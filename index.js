
const fs = require('fs')

// blocking -- sync
// const textIn = fs.readFileSync('./txt/input.txt')
// console.log(textIn)

// const textOut = `this is what we know about the avocado ${textIn} ./n Created on ${Date.now()}`
// fs.writeFileSync('./txt/textOut.txt',textOut)

// console.log('file written !')
 

//none blocking -- async
fs.readFile('./txt/start.txt','utf-8' ,(err,data)=>{
    console.log(data)
})
console.log('will read file')







