const Data = require ('../models/dataModel');

const getData = async(req , res)=>{
    try{
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 15;
        const skip = (page - 1) * limit;
        const query = searchTerm ? {type:{$regex: searchTerm, $options: 'i'}} : {};

        const data = await Data.find(query).skip(skip).limit(limit);

        const totalDocuments = await Data.countDocuments(query);

        res.status(200).json({
            status:'success',
            results:data.length,
            totalDocuments,
            data:{
                data
            }
        })
    }catch(err){
        res.status(404).json({
            status:'fail',
            message:err
        })
    }
}