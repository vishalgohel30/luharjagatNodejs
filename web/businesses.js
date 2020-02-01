const businessesModal = require('../model/businessesModal');

module.exports.selectBusiness = (req, res) => {

    businessesModal.selectUserBusiness((err, result) => {
        if (err) {
            return res.json(error.serverDown);
        } else if (result) {
            return res.json({
                code: 100,
                message: "Select Business successfully",
                result
            });
        } else {
            return res.json(error.contactNotFound);
        }
    });
}

module.exports.addBusiness = (req, res) => {
    const { category_id, user_id, business_name, address, city, pincode, state, country, phone, email } = req.body;
    businessesModal.addUserBusiness({ category_id, user_id, business_name, address, city, pincode, state, country, phone, email }, (err, result) => {
        if (err) {
            return res.json(error.serverDown);
        } else if (result) {
            return res.json({
                code: 100,
                message: "add Business successfully",
                // result
            });
        } else {
            return res.json(error.contactNotFound);
        }
    })
}

module.exports.deleteBusiness = (req, res) => {
    const { id } = req.body;
    if (!id) { return res.json('delete id is requred') }
    businessesModal.deleteUserBusiness(id, (err, result) => {
        if (err) {
            return res.json(error.serverDown);
        } else if (result) {
            return res.json({
                code: 100,
                message: "delete Business successfully",
                // result
            });
        } else {
            return res.json(error.contactNotFound);
        }
    })
}

module.exports.editBusiness = (req, res) => {
    const { id } = req.params
    if (!id) { return res.json({ message: 'edit id is requred' }) }
    businessesModal.editUserBusiness(id, (err, result) => {
        if (err) {
            return res.json(error.serverDown);
        } else if (result) {
            return res.json({
                code: 100,
                message: 'edit Business successfully',
                result
            });
        } else {
            return res.json(error.contactNotFound);
        }
    });
}

module.exports.updateBusiness = (req, res) => {
    const { id, category_id, user_id, business_name, address, city, pincode, state, country, phone, email } = req.body;
    if (!id) { return res.json('requrid id'); }
    businessesModal.updateUserBusiness(id, { category_id, user_id, business_name, address, city, pincode, state, country, phone, email }, (err, result) => {
        if (err) {
            return res.json(error.serverDown)
        } else if (result) {
            return res.json({ code: 100, message: 'update Business successfully' });
        } else {
            return res.json(error.contactNotFound)
        }
    })
}
