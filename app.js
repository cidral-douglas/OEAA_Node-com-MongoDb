const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

const linkSchema = new mongoose.Schema({
    title: {type:String, required:true},
    description: String,
    url: {type:String, required:true},
    clicks: {type:Number, default:0}
});

const Link = mongoose.model('Link', linkSchema);

let link = new Link({
    title: "progbr",
    description: "Link para o Site",
    url: "https://programadorbr.com"
});

link.save().then(doc=>{console.log(doc)}).catch(err=>{console.log(err)});

mongoose.connect('mongodb://localhost/links', { useNewUrlParser: true, useUnifiedTopology: true}, (error,db) => {
    // console.log(error);
    // console.log(db);
    console.log("Success");
});

app.get('/', (req, res)=>{
    res.send("Hello World");
});

app.listen(PORT, ()=>{
    console.log("Running");
});