const imageProcessor  = require('../lib/imageProcessor')
const files  = require('../lib/files')

test('Sorting out array by hashval value', () => {
    let arrayStart = [{"imgPath": "test3.jpg", "hashVal": 13 },{"imgPath": "test1.jpg", "hashVal": 10 },{"imgPath": "test2.jpg","hashVal": 11}]
    let arrayEnd = [{"imgPath": "test1.jpg", "hashVal": 10 },{"imgPath": "test2.jpg", "hashVal": 11 },{"imgPath": "test3.jpg","hashVal": 13 }]
    expect( arrayStart.sort(imageProcessor.sortByHashVal) ).toStrictEqual(arrayEnd);
});
