const DB = process.env.DB || "MONGODB";
const User = require("./mongodb/User");
const lodash = require("lodash");
const { comparePassword } = require("../helpers/bcrypt");
const { generateAuthToken } = require("../../auth/Providers/jwt");
const { handleBadRequest } = require("../../utils/handleErrors");

const registerUser = async (normalizedUser) => {
  if (DB === "MONGODB") {
    try {
      const { email } = normalizedUser;
      let user = await User.findOne({ email });
      if (user) throw new Error("User already registered");

      user = new User(normalizedUser);
      user = await user.save();

      user = lodash.pick(user, ["name", "email", "_id"]);
      return Promise.resolve(user);
    } catch (error) {
      error.status = 400;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("registerUser new user not in mongodb");
};

const loginUser = async ({ email, password, attempt }) => {
  if (DB === "MONGODB") {
    try {
      const user = await User.findOne({ email });

      if (!user)
        throw new Error("Authentication Error: Invalid email or password");

      if (!!user.blockedTill) {
        const curDate = new Date();
        const userDate = new Date(user.blockedTill);
        if (curDate >= user.blockedTill) {
          await User.findOneAndUpdate(
            { email },
            { blockedTill: null },
            {
              new: true,
            }
          );
        }
        throw new Error(
          `User blocked. Block remove on: ${userDate.toLocaleTimeString()}`
        );
      }

      const validPassword = comparePassword(password, user.password);
      if (!validPassword) {
        if (!user.isAdmin && attempt >= 3) {
          let blockTime = new Date();
          blockTime.setHours(blockTime.getHours() + 24);
          await User.findOneAndUpdate(
            { email },
            { blockedTill: blockTime },
            {
              new: true,
            }
          );
          throw new Error("User blocked after 3 unsuccessful attempts");
        }
        throw new Error("Authentication Error: Invalid email or password");
      }

      const token = generateAuthToken(user);
      return Promise.resolve(token);
    } catch (error) {
      error.status = 400;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("loginUser user not in mongodb");
};

const getUsers = async () => {
  if (DB === "MONGODB") {
    try {
      const users = await User.find({}, { password: 0, __v: 0 });
      return Promise.resolve(users);
    } catch (error) {
      error.status = 404;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("get users not in mongodb");
};

const getUser = async (userId) => {
  if (DB === "MONGODB") {
    try {
      let user = await User.findById(userId, {
        password: 0,
        __v: 0,
      });
      if (!user) throw new Error("Could not find this user in the database");
      return Promise.resolve(user);
    } catch (error) {
      error.status = 404;
      return handleBadRequest("Mongoose", error);
    }
  }
  return Promise.resolve("get user not in mongodb");
};

const updateUser = async (userId, normalizedUser) => {
  if (DB === "MONGODB") {
    try {
      let user = await User.findByIdAndUpdate(userId, normalizedUser, {
        new: true,
      });
      if (!user)
        throw new Error("A user with this ID cannot be found in the database");
      return Promise.resolve(user);
    } catch (error) {
      error.status = 400;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("user update not in mongodb");
};

const changeUserBusinessStatus = async (userId) => {
  if (DB === "MONGODB") {
    try {
      let user = await User.findById(userId);
      user.isBusiness = !user.isBusiness;
      let newUser = await User.findByIdAndUpdate(userId, user, {
        new: true,
      });
      return Promise.resolve(newUser);
    } catch (error) {
      error.status = 400;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("card liked not in mongodb");
};

const changeUserBlock = async (userId, isBlock) => {
  if (DB === "MONGODB") {
    try {
      let user = await User.findById(userId);
      if (!user) return Promise.resolve();

      if (isBlock) {
        let blockTime = new Date();
        blockTime.setHours(blockTime.getHours() + 24);
        let newUser = await User.findByIdAndUpdate(
          userId,
          { blockedTill: blockTime },
          {
            new: true,
          }
        );
        return Promise.resolve(newUser);
      }

      let newUser = await User.findByIdAndUpdate(
        userId,
        { blockedTill: null },
        {
          new: true,
        }
      );
      return Promise.resolve(newUser);
    } catch (error) {
      error.status = 400;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("card liked not in mongodb");
};

const deleteUser = async (userId) => {
  if (DB === "MONGODB") {
    try {
      let deletedUser = await User.findByIdAndDelete(userId);
      return Promise.resolve(deletedUser);
    } catch (error) {
      error.status = 400;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("user deleted not in mongodb");
};

exports.registerUser = registerUser;
exports.loginUser = loginUser;
exports.getUsers = getUsers;
exports.getUser = getUser;
exports.updateUser = updateUser;
exports.changeUserBusinessStatus = changeUserBusinessStatus;
exports.changeUserBlock = changeUserBlock;
exports.deleteUser = deleteUser;
