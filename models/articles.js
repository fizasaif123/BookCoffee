const mongoose = require('mongoose');

const ArticleSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
        min:0
    },
    year:{
        type:Number,
        required:true,
        
    },
    category:{
        type:String,
        lowercase:true,
        //in case we write capital Fruit ,,it will not give error
        enum:['fashion','cooking','business']
    },
    comments:
    {
        type:String

    }
}
)

const Article=mongoose.model('Article',ArticleSchema);
module.exports=Article;