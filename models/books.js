const mongoose = require('mongoose');


const BookSchema=new mongoose.Schema({
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
        enum:['fantasy','thriller','romance']
    },
    comments:
    {
        type:String

    }
}
)

const Book=mongoose.model('Book',BookSchema);
module.exports=Book;