var sqlite3 = require('sqlite3').verbose()
var db = new sqlite3.Database('./database')
 
export const query = (sql) => new Promise((resolve, reject) => {
  db.all(sql, (err, rows) => {
    if (err) reject(err)
    resolve(rows)
  })
})
