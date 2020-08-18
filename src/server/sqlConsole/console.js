import { query } from '../query'
import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const ask = () => {
  rl.question("Enter SQL\n", function(sql) {
    query(sql).then(results => {
      console.log(results)
      ask()
    })
  }) 
}

ask()