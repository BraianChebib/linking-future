const { UserDataHandler } = require("../handlers/UserDataHandler");
const UserDataController = async (req, res) => {
  
  try {
    const userLogged = await UserDataHandler(req.user);
    res.status(200).json(userLogged);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = { UserDataController };
