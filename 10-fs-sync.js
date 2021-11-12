//reading from a file system

const {readFileSync, writeFileSync} = require('fs');
const { firstname } = require('./4-names');

//reading from a file
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

console.log(first, second)

//writting to a file
writeFileSync('./content/result-sync.txt', `here is the result : ${first}, ${second}`)