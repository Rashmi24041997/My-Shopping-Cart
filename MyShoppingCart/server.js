const express = require("express") ;
const app =  express();
const  bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({
    extended : true
}));
app.use(bodyparser.json());

app.post("/create", function(req,res){
    var obj = new customer();
    obj.save().then((data) =>{
        res.send(data);
    })
    .catch((err)=>{
        res.status(500).send({
            message : err
        });
    });
});


app.listen(3000);

console.log("Server connected successfully");
