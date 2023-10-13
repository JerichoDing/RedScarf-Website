


const Sequelize = require('sequelize')
const database = require('../config/database')

module.exports = () => {
  return async (ctx, next) => {
    try {
      const seq = new Sequelize(database.db, database.username, database.password, {
        host: database.host,
        port: database.port,
        dialect: 'mysql',
        pool: {
          max: 10,
        },
        query: {
          raw: true
        },
      })
      // 挂载上下文
      ctx.sequelize = seq 
      await next()
    } catch (error) {
      console.error(error);
    }
    
  }
}
