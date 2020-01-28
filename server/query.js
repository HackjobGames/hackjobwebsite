import mysql from 'mysql'
import process from 'process'

const config = 
    {
        host: 'localhost',
        user: process.env.USERNAME,
        password: process.env.PASSWORD,
        database: process.env.HACKJOB_DATABASE
    }
  

export default function query(sql, callback) {
    return new Promise((resolve, reject) => {
        const connection = mysql.createConnection(config)
        connection.connect((err) => {
            if (err) reject(err);
            connection.query(sql, (err, result) => {
                if (err) reject(err)
                resolve(result)
            })
        })
    })

}