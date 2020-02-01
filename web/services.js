const express = require('express');
const error = require('../constant/errorCodes');
const servicesModel = require('../model/servicesModel');
// const multer = require('multer');
// import a from '../';
const app = express();


module.exports.selectServices = function (req, res) {
    servicesModel.selectUserServices((err, result) => {
        if (err) {
            console.log(new Date().toISOString(), "servicesModel.selectServices error");
            console.log(err);
            return res.json(error.serverDown);
        } else if (result) {
            console.log(new Date().toISOString(), "servicesModel.selectServices result");
            return res.json({
                code: 100,
                message: "Select Services successfully",
                result
            });
        } else {
            return res.json(error.contactNotFound);
        }
    });

    console.log(new Date().toISOString(), " selectServices: selectServices --");
};



// Public Folder
app.use(express.static('../public'));

module.exports.insertServices = (req, res) => {
    let { service, description } = req.body;
    let { file: { filename: image = '' } = {} } = req;
    console.log('image',image, service, description  )
    // let image = 'adsf';
    servicesModel.insertUserServices({ service, description, image }, (err, result) => {
        if (err) {
            return res.json(error.serverDown);
        } else if (result) {
            return res.json({
                code: 100,
                message: "insert Services successfully",
            });
        } else {
            return res.json(error.contactNotFound);
        }
    });
    console.log(new Date().toISOString(), " selectServices: selectServices --");
}

module.exports.deleteServices = (req, res) => {
    let { id } = req.body;
    servicesModel.deleteUserServices(id, (err, result) => {
        if (err) {
            return res.json(error.serverDown);
        } else if (result) {
            return res.json({
                code: 100,
                message: "delete Services successfully",
            });
        } else {
            return res.json(error.contactNotFound);
        }
    });
    console.log(new Date().toISOString(), " selectServices: selectServices --");
}

module.exports.editIdServices = (req, res) => {
    let { id } = req.params;
    servicesModel.editUserServices(id, (err, result) => {
        if (err) {
            return res.json(error.serverDown);
        } else if (result) {
            return res.json({
                code: 100,
                message: "edit Services successfully",
                result
            });
        } else {
            return res.json(error.contactNotFound);
        }
    });
    console.log(new Date().toISOString(), " selectServices: selectServices --");
}

module.exports.updateServices = (req, res) => {
    const { service, image, description, id } = req.body;
    if (!id) {
        return res.json({
            message: 'id is required?'
        })
    }
    const update = { service, image, description };
    servicesModel.updateUserServices(update, id, (err, result) => {

        if (err) {
            return res.json(error.serverDown);
        } else if (result) {
            return res.json({
                code: 100,
                message: "update Services successfully",

            })
        } else {
            return res.json(error.contactNotFound);
        }
    });
}


//https://www.youtube.com/watch?v=ByPelyF4SJs&feature=youtu.be