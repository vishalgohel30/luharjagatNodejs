const businessCategoriesModal = require('../model/businessCategoriesModal');

module.exports.selectBusinessCategories=(req,res)=>{

businessCategoriesModal.selectUserBusinessCategories((err, result) => {
        if (err) {
            return res.json(error.serverDown);
        } else if (result) {
            return res.json({
                code: 100,
                message: "Select BusinessCategories successfully",
                result
            });
        } else {
            return res.json(error.contactNotFound);
        }
    });
}

module.exports.addBusinessCategories=(req, res)=>{
    const {category, description, status} = req.body;
    console.log(req.body)
    businessCategoriesModal.addUserBusinessCategories({category, description, status},(err, result)=>{
        if (err) {
            return res.json(error.serverDown);
        } else if (result) {
            return res.json({
                code: 100,
                message: "add BusinessCategories successfully",
                // result
            });
        } else {
            return res.json(error.contactNotFound);
        }
    })
}

module.exports.deleteBusinessCategories=(req,res)=>{
    const {id} = req.body;
    if(!id){return res.json('delete id is requred')}
    businessCategoriesModal.deleteUserBusinessCategories(id,(err,result)=>{
        if(err){
            return res.json(error.serverDown);
        }else if(result){
            return res.json({
                code: 100,
                message: "delete BusinessCategories successfully",
                // result
            });
        }else {
            return res.json(error.contactNotFound);
        }
    })
}

module.exports.editBusinessCategories=(req, res)=>{
    const {id} = req.params
    if(!id){return res.json({message:'edit id is requred'})}
    businessCategoriesModal.editUserBusinessCategories(id, (err,  result)=>{
        if(err){
            return res.json(error.serverDown);
        }else if(result){
            return res.json({
                code:100,
                message: 'edit BusinessCategories successfully',
                result
            });
        }else {
            return res.json(error.contactNotFound);
        }
    });
}

module.exports.updateBusinessCategories=(req,res)=>{
    const {id, category, description, status} = req.body;
    if(!id){ return res.json('requrid id');}
    businessCategoriesModal.updateUserBusinessCategories(id,{category, description, status},(err,result)=>{
        if(err){
            return res.json(error.serverDown)
        }else if(result){
            return res.json({code:100, message:'update BusinessCategories successfully'});
        }else{
            return res.json(error.contactNotFound)
        }
    })
}
