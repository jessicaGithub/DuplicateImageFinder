const fs = require('fs')
const path = require('path')

module.exports = {
  getCurrentDirectoryBase: () => {
    return path.basename(process.cwd())
  },

  directoryExists: (filePath) => {
    return fs.existsSync(filePath)
  },

  getAllFiles: (dirPath, arrayOfFiles) => {
    imageList = fs.readdirSync(dirPath)
    arrayOfImages = arrayOfFiles || []
    imageList.forEach(function(file) {
      if (fs.statSync(dirPath + "/" + file).isDirectory()) {
        arrayOfImages = module.exports.getAllFiles(dirPath + "/" + file, arrayOfImages)
      } else {
        arrayOfImages.push(path.join( process.cwd(), dirPath, "/", file))
      }
    })

    return arrayOfImages
  },

}