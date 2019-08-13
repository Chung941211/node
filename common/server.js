/**
 * MongoDB 连接模块
 */

 const config   = require('../config')
 const mongoose = require('mongoose')
 const consola  = require('consola')
 
 exports.connect = () => {
   
  mongoose.connect(config.MONGODB.url)

  mongoose.connection.on('error', error => consola.warn('MongoDB 连接失败!', error))

  mongoose.connection.on('open', () => consola.ready('MongoDB 连接成功'))
  
  return mongoose
 }

 exports.mongoose = mongoose