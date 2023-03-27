import mysql from 'mysql'

const connection = () => {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'todo',
  })
}

const sqlconnect = (sql, params?) => {
  const connect = connection()
  return new Promise((resolve, reject) => {
    try {
      connect.query(sql, params, (err, res) => {
        if (err) {
          reject(err)
        } else {
          resolve(res)
        }
      })
    } catch(err) {
      reject(err)
    } finally {
      connect.end()
    }
  })
}

export default {sqlconnect}