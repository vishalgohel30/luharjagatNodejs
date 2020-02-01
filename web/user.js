const error = require('../constant/errorCodes');
const userModel = require('../model/userModel');


module.exports.selectUser = function (req, res) {
    userModel.selectUser((err, result) => {
        if (err) {
            console.log(new Date().toISOString(), "userModel.selectServices error");
            console.log(err);
            return res.json(error.serverDown);
        } else if (result) {
            console.log(new Date().toISOString(), "userModel.selectServices result");
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

module.exports.insertUser = (req, res) => {
    let { name, phone, stauts, passowrd } = req.body;
    userModel.addUser({ name, phone }, (err, result) => {
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

module.exports.deleteUser = (req, res) => {
    let { id } = req.body;
    userModel.deleteUser(id, (err, result) => {
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

module.exports.editUser = (req, res) => {
    let { id } = req.params;
    userModel.editUser(id, (err, result) => {
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

module.exports.updateUser = (req, res) => {
    const { name, phone, stauts, passowrd, id } = req.body;
    if (!id) {
        return res.json({
            message: 'id is required?'
        })
    }
    const update = { name, phone, stauts, passowrd };
    userModel.updateUser(update, id, (err, result) => {

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