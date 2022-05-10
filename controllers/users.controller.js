const User = require("../models/User.model");

module.exports.userController = {
  postUser: async (req, res) => {
    try {
      await User.create(req.body);
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
