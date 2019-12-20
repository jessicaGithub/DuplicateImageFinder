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
        await module.exports.asyncForEach(imageList, async(imgFile) => {
            imageHash(imgFile, 16, true, (error, data) => {
                if (error) throw error
                hashedImages.push({
                    "imgPath": imgFile,
                    "hashVal": data
                })
            })
        })
        return hashedImages
    },
    findDuplicates: (dirPath) => {
        const imageList = files.getAllFiles(dirPath)
        console.log("imageList")
        console.log(imageList)


        const getHashedImages = async() => {
            const hashedImages = await module.exports.getHashedVals(imageList)
            console.log("hashedImages")
            console.log(hashedImages)
        }
        getHashedImages()

    }
}