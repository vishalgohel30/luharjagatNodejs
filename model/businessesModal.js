const CONSTANT = require('../constant/constants');
const dbUtils = require('../utils/dbUtils');

module.exports.selectUserBusiness = function (callback) {
    console.log(new Date().toISOString() + " servicesModel: services sql in ++");
    const SERVICES_SQL = `SELECT * FROM ${CONSTANT.TABLE_BUSINESS}`;
    dbUtils.getDatabase().query(SERVICES_SQL, callback);
    console.log(new Date().toISOString() + " servicesModel: services sql exit --");
}

module.exports.addUserBusiness=(addUserObj, callback)=>{
  console.log(new Date().toISOString() + " servicesModel: addContact ++");
  const SERVICES_SQL = `INSERT INTO ${CONSTANT.TABLE_BUSINESS} SET ?`;
  console.log(SERVICES_SQL)
  dbUtils.getDatabase().query(SERVICES_SQL, addUserObj, callback);
  console.log(new Date().toISOString() + " servicesModel: addContact --");
}

module.exports.deleteUserBusiness=(id,callback)=>{
    console.log(new Date().toISOString() + " servicesModel: services sql in ++");
    const SERVICES_SQL = `DELETE FROM ${CONSTANT.TABLE_BUSINESS} WHERE id=${id}`;
    dbUtils.getDatabase().query(SERVICES_SQL, callback);
    console.log(new Date().toISOString() + " servicesModel: services sql exit --");
  }
  
module.exports.editUserBusiness = (id, callback) => {
    console.log(new Date().toISOString() + " servicesModel: services sql in ++");
    const SERVICES_SQL = `SELECT * FROM ${CONSTANT.TABLE_BUSINESS} WHERE id='${id}'`
    dbUtils.getDatabase().query(SERVICES_SQL, callback);
    console.log(new Date().toISOString() + " servicesModel: services sql exit --");
  }
  
module.exports.updateUserBusiness=(id, update, callback)=>{
    console.log(new Date().toISOString() + " servicesModel: services sql in ++");
    const SERVICES_SQL = `UPDATE ${CONSTANT.TABLE_BUSINESS} SET? WHERE ID=${id}`
    dbUtils.getDatabase().query(SERVICES_SQL, update, callback);
    console.log(new Date().toISOString() + " servicesModel: services sql exit --");
  }