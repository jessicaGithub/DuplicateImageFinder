const chalk = require('chalk')
const clear = require('clear')
const inquirer  = require('./lib/inquirer')
const files  = require('./lib/files')
const imageProcessor  = require('./lib/imageProcessor')

clear()

console.log(
  chalk.yellow('Welcome to Duplicate Image Finder')
)

const run = async () => {
    const userReply = await inquirer.askTargetDirectory()

    if (files.directoryExists(userReply.targetDir)) {
        console.log(chalk.green('Directory found!'))
        
        const imageList = files.getAllFiles(userReply.targetDir)
        imageProcessor.getHashedVals( imageList )
    }
    else {
        console.log(chalk.red('Directory not found!'))
    }
}

run()
