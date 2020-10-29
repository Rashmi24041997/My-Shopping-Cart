const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ShoppingCart',
{useUnifiedTopology:true},(err)=>{
        if(!err) {
            console.log("MongoDB connected successfully");
        } 
        else
            console.log("Sorry, error occurred."+ err);
    }
)
module.exports = mongoose

