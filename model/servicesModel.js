const CONSTANT = require('../constant/constants');
const dbUtils = require('../utils/dbUtils');

module.exports.selectUserServices = function (callback) {
    console.log(new Date().toISOString() + " servicesModel: services sql in ++");
    const SERVICES_SQL = `SELECT * FROM ${CONSTANT.TABLE_SERVICES}`;
    dbUtils.getDatabase().query(SERVICES_SQL, callback);
    console.log(new Date().toISOString() + " servicesModel: services sql exit --");
}

module.exports.insertUserServices = (addUserObj, callback) => {
    console.log(new Date().toISOString() + " servicesModel: services sql in ++");
    const SERVICES_SQL = `INSERT INTO ${CONSTANT.TABLE_SERVICES} SET ?`;
    dbUtils.getDatabase().query(SERVICES_SQL, addUserObj, callback);
    console.log(new Date().toISOString() + " servicesModel: services sql exit --");
}

module.exports.deleteUserServices = (id, callback) => {
    console.log(new Date().toISOString() + " servicesModel: services sql in ++");
    const SERVICES_SQL = `DELETE FROM ${CONSTANT.TABLE_SERVICES} WHERE id='${id}'`;
    console.log(SERVICES_SQL)
    dbUtils.getDatabase().query(SERVICES_SQL, callback);
    console.log(new Date().toISOString() + " servicesModel: services sql exit --");
}

module.exports.editUserServices = (id, callback) => {
    console.log(new Date().toISOString() + " servicesModel: services sql in ++");
    const SERVICES_SQL = `SELECT * FROM ${CONSTANT.TABLE_SERVICES} WHERE id='${id}'`;
    dbUtils.getDatabase().query(SERVICES_SQL, callback);
    console.log(new Date().toISOString() + " servicesModel: services sql exit --");
}

module.exports.updateUserServices = (update, id, callback) => {
    console.log(new Date().toISOString() + " servicesModel: services sql in ++");
    const SERVICES_SQL = `UPDATE ${CONSTANT.TABLE_SERVICES} SET ? WHERE id='${id}'`;
    dbUtils.getDatabase().query(SERVICES_SQL, update, callback);
    console.log(new Date().toISOString() + " servicesModel: services sql exit --");
}