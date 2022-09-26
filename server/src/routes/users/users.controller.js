const {
  getAllUsers,
  addNewUser,
  updateUser,
  existsUserWithId,
  removeUserById,
  getUserbyID,
} = require("../../models/users.model");
const bcrypt = require("bcrypt");

async function httpGetAllusers(req, res) {
  let allusers = await getAllUsers();
  allusers = allusers.rows;
  res.send(allusers);
}

async function httpUpdateUser(req, res) {
  const { name, email, admin, verified, user } = req.body;

  const role = whatRole(admin, verified, user);

  const id = req.params.id.slice(1);
  let exists = await existsUserWithId(id);
  exists = exists.rows[0].exists;

  if (exists && name && email) {
    res.status(200).redirect("/admin");
    updateUser(name, email, role, id);
  } else if (exists) {
    res.status(406).send("Please fill all the required fields");
  } else {
    res.status(404).send("The User does not exist");
  }
}

async function httpAddNewUser(req, res) {
  const { name, email, password, admin, verified, user } = req.body;

  const role = whatRole(admin, verified, user);

  if (!name && !email && !password) {
    res.status(406).send("Please fill all the required fields");
  }

  const encryptpassword = await bcrypt.hash(password, 10);
  await addNewUser(name, email, role, encryptpassword);
  res.status(200);
}

async function httpRemoveUser(req, res) {
  const id = req.params.id.slice(1);
  if (existsUserWithId(id)) {
    res.status(200).send("The User has been deleted");
    removeUserById(id);
  } else {
    res.status(404).send("The User does not exist");
  }
}

const whatRole = (admin, verified, user) => {
  if (admin === "on") return 2;
  if (verified === "on") return 1;
  if (user === "on") return 0;
};

module.exports = {
  httpGetAllusers,
  httpUpdateUser,
  httpAddNewUser,
  httpRemoveUser,
};
