const { db } = require("../services/postgresql");

async function getAllUsers() {
  return db.query(`select * from "user"`);
}

async function getUserbyID(id) {
  return db.query(`select * from "user" where id='${id}'`);
}

async function getUserbyEmail(email) {
  return db.query(`select * from "user" where email='${email}'`);
}

async function addNewUser(name, email, role, password) {
  db.query(
    `insert into "user" (name, email, role, password) values('${name}','${email}',${role},'${password}' )`
  );
}
async function updateUser(name, email, role, id) {
  // console.log(name, email, role, id);
  db.query(`update "user" set name='${name}',email='${email}',role=${role} where id=${id}`);
}

async function existsUserWithId(id) {
  return db.query(`select exists(select 1 from "user" where id=${id})`);
}
async function removeUserById(id) {
  db.query(`delete from "user" where id=${id}`);
}

module.exports = {
  getAllUsers,
  addNewUser,
  updateUser,
  existsUserWithId,
  removeUserById,
  getUserbyID,
  getUserbyEmail,
};
