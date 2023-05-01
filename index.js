
const fs = require('fs')
const http = require('http')

// blocking -- sync
// const textIn = fs.readFileSync('./txt/input.txt')
// console.log(textIn)

// const textOut = `this is what we know about the avocado ${textIn} ./n Created on ${Date.now()}`
// fs.writeFileSync('./txt/textOut.txt',textOut)

// console.log('file written !')
 

// //none blocking -- async
// fs.readFile('./txt/start.txt','utf-8' ,(err,data)=>{
//     console.log(data)
// })
// console.log('will read file')

///////////// server
// THIS IS HOW WE MAKE A SERVER ON LOCAL HOST
const server = http.createServer((req,res)=>{
    res.end('hello from the server')
})
// AFTER WE MAKE OUR SERVER WE HAVE TO MAKE IT LISTEN FROM HOST 8000
// AND 127.0.0.1 IS STANDARD HOST
server.listen(8000 ,'127.0.0.1' , () => {
    console.log('listening to request on port 8000')
})
 



