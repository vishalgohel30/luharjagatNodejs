const CONSTANT = require('../constant/constants');
const dbUtils = require('../utils/dbUtils');

module.exports.selectUserBusinessCategories = function (callback) {
    console.log(new Date().toISOString() + " servicesModel: services sql in ++");
    const SERVICES_SQL = `SELECT * FROM ${CONSTANT.TABLE_BUSINESS_CATEGORIES}`;
    dbUtils.getDatabase().query(SERVICES_SQL, callback);
    console.log(new Date().toISOString() + " servicesModel: services sql exit --");
}

module.exports.addUserBusinessCategories=(addUserObj, callback)=>{
  console.log(new Date().toISOString() + " servicesModel: addContact ++");
  const SERVICES_SQL = `INSERT INTO ${CONSTANT.TABLE_BUSINESS_CATEGORIES} SET ?`;
  console.log(SERVICES_SQL)
  dbUtils.getDatabase().query(SERVICES_SQL, addUserObj, callback);
  console.log(new Date().toISOString() + " servicesModel: addContact --");
}

module.exports.deleteUserBusinessCategories=(id,callback)=>{
    console.log(new Date().toISOString() + " servicesModel: services sql in ++");
    const SERVICES_SQL = `DELETE FROM ${CONSTANT.TABLE_BUSINESS_CATEGORIES} WHERE id=${id}`;
    dbUtils.getDatabase().query(SERVICES_SQL, callback);
    console.log(new Date().toISOString() + " servicesModel: services sql exit --");
  }
  
module.exports.editUserBusinessCategories = (id, callback) => {
    console.log(new Date().toISOString() + " servicesModel: services sql in ++");
    const SERVICES_SQL = `SELECT * FROM ${CONSTANT.TABLE_BUSINESS_CATEGORIES} WHERE id='${id}'`
    dbUtils.getDatabase().query(SERVICES_SQL, callback);
    console.log(new Date().toISOString() + " servicesModel: services sql exit --");
  }
  
module.exports.updateUserBusinessCategories=(id, update, callback)=>{
    console.log(new Date().toISOString() + " servicesModel: services sql in ++");
    const SERVICES_SQL = `UPDATE ${CONSTANT.TABLE_BUSINESS_CATEGORIES} SET? WHERE ID=${id}`
    dbUtils.getDatabase().query(SERVICES_SQL, update, callback);
    console.log(new Date().toISOString() + " servicesModel: services sql exit --");
  }