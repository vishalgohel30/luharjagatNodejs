const contactsModel = require('../model/contactsModel');

module.exports.selectContacts=(req,res)=>{

contactsModel.selectUserContact((err, result) => {
        if (err) {
            console.log(new Date().toISOString(), "contactsModel.selectContacts error");
            console.log(err);
            return res.json(error.serverDown);
        } else if (result) {
            console.log(new Date().toISOString(), "contactsModel.selectContacts result");
            return res.json({
                code: 100,
                message: "Select Contacts successfully",
                result
            });
        } else {
            return res.json(error.contactNotFound);
        }
    });

    console.log(new Date().toISOString(), " selectContacts: selectContacts --");
}

module.exports.addContacts=(req, res)=>{
    const {name, phone, subject, message} = req.body;
    contactsModel.addUserContacts({name, phone, subject, message},(err, result)=>{
        if (err) {
            return res.json(error.serverDown);
        } else if (result) {
            return res.json({
                code: 100,
                message: "add contacts successfully",
                // result
            });
        } else {
            return res.json(error.contactNotFound);
        }
    })
}

module.exports.deleteContacts=(req,res)=>{
    const {id} = req.body;
    if(!id){return res.json('delete id is requred')}
    contactsModel.deleteUserContacts(id,(err,result)=>{
        if(err){
            return res.json(error.serverDown);
        }else if(result){
            return res.json({
                code: 100,
                message: "delete contacts successfully",
                // result
            });
        }else {
            return res.json(error.contactNotFound);
        }
    })
}

module.exports.editContacts=(req, res)=>{
    const {id} = req.params
    if(!id){return res.json({message:'edit id is requred'})}
    contactsModel.editUserContacts(id, (err,  result)=>{
        if(err){
            return res.json(error.serverDown);
        }else if(result){
            return res.json({
                code:100,
                message: 'edit contacts successfully',
                result
            });
        }else {
            return res.json(error.contactNotFound);
        }
    });
}

module.exports.updateContacts=(req,res)=>{
    const {id, name, phone, subject, message} = req.body;
    if(!id){ return res.json('requrid id');}
    contactsModel.updateUserContacts(id,{name, phone, subject, message},(err,result)=>{
        if(err){
            return res.json(error.serverDown)
        }else if(result){
            return res.json({code:100, message:'update contacts successfully'});
        }else{
            return res.json(error.contactNotFound)
        }
    })
}