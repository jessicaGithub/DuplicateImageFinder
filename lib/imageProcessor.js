const files = require('./files')
const { imageHash } = require('image-hash')

module.exports = {
    asyncForEach: async(array, callback) => {
        for (let index = 0; index < array.length; index++) {
          await callback(array[index], index, array);
        }
    },
    waitFor: (ms) => {
        new Promise(r => setTimeout(r, ms))
    },
    getHashedVals: async( imageList ) => {
        const hashedImages = []
        const listLength = imageList.length
        // module.exports.asyncForEach(imageList, (imgFile) => {
        //     imageHash(imgFile, 16, true, (error, data) => {
        //         if (error) throw error
        //         hashedImages.push({
        //             "imgPath": imgFile,
        //             "hashVal": data
        //         })
        //         if ( hashedImages.length == listLength ) {
        //             return hashedImages.slice().sort();
        //         }
        //     })
        // })
    },
    findAllImageFiles: async(dirPath) => {
        const imageList = files.getAllFiles(dirPath)
        return imageList
    }
}