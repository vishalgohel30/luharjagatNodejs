const CONSTANT = require('../constant/constants');
const dbUtils = require('../utils/dbUtils');

module.exports.addUser = function (addUserObj, callback) {
  console.log(addUserObj)
  console.log(new Date().toISOString() + " userModel: User sql in ++");
  const SERVICES_SQL = `INSERT INTO ${CONSTANT.TABLE_USERS} SET ?`;
  dbUtils.getDatabase().query(SERVICES_SQL, addUserObj, callback);
  console.log(new Date().toISOString() + " userModel: User sql in --");
};

module.exports.selectUser = function (callback) {
  console.log(new Date().toISOString() + " userModel: User sql in ++");
  const SERVICES_SQL = `SELECT * FROM ${CONSTANT.TABLE_USERS}`;
  dbUtils.getDatabase().query(SERVICES_SQL, callback);
  console.log(new Date().toISOString() + " userModel: User sql in --");
};

module.exports.editUser = function (id, callback) {
  console.log(new Date().toISOString() + " userModel: User sql in ++");
  const SERVICES_SQL = `SELECT * FROM ${CONSTANT.TABLE_USERS} WHERE id=${id}`;
  dbUtils.getDatabase().query(SERVICES_SQL, callback);
  console.log(new Date().toISOString() + " userModel: User sql in --");
};

module.exports.deleteUser = function (id, callback) {
  console.log(new Date().toISOString() + " userModel: User sql in ++");
  const SERVICES_SQL = `DELETE FROM ${CONSTANT.TABLE_USERS} WHERE id='${id}'`;
  dbUtils.getDatabase().query(SERVICES_SQL, callback);
  console.log(new Date().toISOString() + " userModel: User sql in --");
};

module.exports.updateUser=(id,update, callback)=>{
  console.log(new Date().toISOString() + " userModel: User sql in ++");
    const SERVICES_SQL = `UPDATE ${CONSTANT.TABLE_USERS} SET ? WHERE id='${id}'`;
    dbUtils.getDatabase().query(SERVICES_SQL, update, callback);
    console.log(new Date().toISOString() + " userModel: User sql exit --");
}
