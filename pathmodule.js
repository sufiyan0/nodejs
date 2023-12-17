
const path = require('path')

console.log(path.sep) // returns the path separator

const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath) // /content/subfolder/test.txt


const base = path.basename(filePath) // returns the last portion of a path
console.log(base) // test.txt


const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt') // returns an absolute path
console.log(absolute) // C:\Users\DELL\Documents\GitHub\nodejs\content\subfolder\test.txt


