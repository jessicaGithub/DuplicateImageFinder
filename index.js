const chalk = require('chalk')
const clear = require('clear')
const figlet = require('figlet')
const inquirer  = require('./lib/inquirer')
const files  = require('./lib/files')
const imageProcessor  = require('./lib/imageProcessor')
const { imageHash } = require('image-hash')


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
        
        const imageList = files.getAllFiles(userReply.targetDir)
        const hashedImageList = []
        imageList.forEach(imgFile => {
          imageHash(imgFile, 16, true, (error, data) => {
              if (error) throw error
              hashedImageList.push({
                  "imgPath": imgFile,
                  "hashVal": data
              })
              if ( hashedImageList.length == imageList.length ) {
                // console.log( "hashedImageList : " )
                // console.log( hashedImageList )

                function compare( a, b ) {
                  if ( a.hashVal < b.hashVal ){
                    return -1;
                  }
                  if ( a.hashVal > b.hashVal ){
                    return 1;
                  }
                  return 0;
                }
                
                hashedImageList.sort( compare );

                let results  = [];
                for (let i = 0; i < hashedImageList.length - 1; i++) {
                  if (hashedImageList[i + 1].hashVal == hashedImageList[i].hashVal ) {
                      results.push(hashedImageList[i]);
                  }
                } 
                // console.log( "results : " )
                // console.log( results )
      
                if ( results.length > 0 ) {
                    console.log(chalk.green("We've found some duplicates listed below:"))
                    results.forEach( ( duplicateItem ) => {
                        console.log(duplicateItem.imgPath)
                    })
                } else {
                    console.log(chalk.yellow('No duplicates found!'))
                }
              }

             
              
          })
        });
console.log("done")
        
    }
    // else {
    //     console.log(chalk.red('Directory not found!'))
    // }
}

run()
