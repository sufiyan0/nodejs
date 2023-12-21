// Create a big file and put 10000 lines into it with fs module and stream module to show the performance difference between them 
// const { writeFileSync } = require('fs')
// for (let i = 0; i < 10000; i++) {
//   writeFileSync('./content/big.txt', `hello world ${i}\n`, { flag: 'a' })
// }



const { createReadStream } = require('fs')

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })
// const stream = createReadStream('../content/big.txt', { highWaterMark: 90000, encoding: 'utf8' } )
const stream = createReadStream('./content/big.txt' )


stream.on('data', (result) => {
  console.log(result)
})
stream.on('error', (err) => console.log(err))

