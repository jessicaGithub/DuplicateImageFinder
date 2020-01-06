const chalk = require('chalk')
const { imageHash } = require('image-hash')
const cliProgress = require('cli-progress');

module.exports = {
    sortByHashVal: (a, b) => {
        if (a.hashVal < b.hashVal) {
            return -1;
        }
        if (a.hashVal > b.hashVal) {
            return 1;
        }
        return 0;
    },
    getHashedVals: async (imageList) => {

        if (imageList.length > 0) {
            const progresssbar = new cliProgress.SingleBar({
                format: chalk.green('Processing images... |' + '{bar}' + '| {percentage}% '),
                barCompleteChar: '\u2588',
                barIncompleteChar: '\u2591',
                hideCursor: true
            });

            progresssbar.start(100, 0);

            const hashedImageList = []
            imageList.forEach(imgFile => {
                imageHash(imgFile, 16, true, (error, data) => {
                    if (error) throw error
                    hashedImageList.push({
                        "imgPath": imgFile,
                        "hashVal": data
                    })

                    progresssbar.increment();

                    if (hashedImageList.length == imageList.length) {

                        progresssbar.update(80);

                        hashedImageList.sort(module.exports.sortByHashVal);

                        let results = [];
                        for (let i = 0; i < hashedImageList.length - 1; i++) {
                            if (hashedImageList[i + 1].hashVal == hashedImageList[i].hashVal) {
                                results.push(hashedImageList[i]);
                            }
                        }

                        progresssbar.update(100);
                        progresssbar.stop();

                        if (results.length > 0) {
                            console.log(chalk.green("We've found some duplicates listed below:"))
                            results.forEach((duplicateItem) => {
                                console.log(chalk.magenta(
                                    duplicateItem.imgPath)
                                )
                            })
                        } else {
                            console.log(chalk.yellow('No duplicates found!'))
                        }
                    }
                })
            })
        } else {
            console.log( chalk.red('No image files were found in this directory.'))
        }
    }
}