const chalk = require('chalk')
const clear = require('clear')
const figlet = require('figlet')
const inquirer  = require('./lib/inquirer')
const files  = require('./lib/files')
const imageProcessor  = require('./lib/imageProcessor')

clear()

console.log(
  chalk.yellow(
    figlet.textSync('Hello!', { horizontalLayout: 'full' })
  )
)
const run = async () => {
    const userReply = await inquirer.askTargetDirectory()

    if (files.directoryExists(userReply.targetDir)) {
        console.log(chalk.green('Directory found!'))
        const duplicates = imageProcessor.findDuplicates(userReply.targetDir)
        console.log("duplicates")
        console.log(duplicates)

        // let duplicatesList = duplicates.slice().sort();
        // let results = [];
        // for (let i = 0; i < duplicatesList.length - 1; i++) {
        // if (duplicatesList[i + 1] == duplicatesList[i]) {
        //     results.push(duplicatesList[i]);
        // }
        // }

        // if ( results.length > 0 ) {
        //     console.log(chalk.green("We've found some duplicates listed below:"))
        //     results.forEach( ( duplicateItem ) => {
        //         console.log(duplicateItem.imgPath)
        //     })
        //     console.log(chalk.green("We've found some duplicates listed below:"))
        // } else {
        //     console.log(chalk.yellow('No duplicates found!'))
        // }
    }
    // else {
    //     console.log(chalk.red('Directory not found!'))
    // }
}

run()
