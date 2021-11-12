//CommonJs, every file is module by default
//Modules - Encapsulated code (Only share minimum)

//importing files(modules)
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')

console.log(names)

//using function
sayHi(names.firstname)
sayHi(names.secondname)

//
console.log(data) 