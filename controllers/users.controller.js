const User = require("../models/User.model");

module.exports.userController = {
  
  postUser: async (req, res) => {
    try {
      // const {name} = req.body
      await User.create({
        name: req.body.name
      });
      res.json("user dobavlen");
    } catch (err) {
      res.json(err);
    }
  },

  getUser: async (req, res) => {
    try {
      const user = await User.find({});
      res.json(user);
    } catch (err) {
      res.json(err);
    }
  },
};
