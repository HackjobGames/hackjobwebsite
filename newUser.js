const bcrypt = require('bcrypt')
const password = process.argv[2]
console.log(process.argv[2])
const salt = bcrypt.genSaltSync(5)
console.log(bcrypt.hashSync(password, salt))