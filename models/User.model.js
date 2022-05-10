const mongoose = require('mongoose')

const userShema = mongoose.Schema({
  name: String
})
const User = mongoose.Model("User", userShema)

module.exports = User