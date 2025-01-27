const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = express.Router();
const PORT = 4000;


let userSchema = require('./user.model');
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/userdetails',  {useNewUrlParser: true});
const connection = mongoose.connection;

connection.once('open', function(){
    console.log("MongoDB database connection established");
})
userRoutes.route('/').get(function(req,res){
    userSchema.find(function(err,users){
        if(err){
            console.log(err);
        }else{
            res.json(users);
        }
    });
});
userRoutes.route('/:_id').get(function(req,res){
    let id = req.params.username;
    userSchema.findById(id, function(err,users){
        res.json(user);
    });
});
userRoutes.route('/add').post(function(req,res){
    let user = new userSchema(req.body);
    user.save()
    .then(user =>{
        res.status(200).json({'user': 'user added successfully'});
    })
    .catch(err => {
        res.status(400).send('adding new user failed')
    });
});
app.get('/', (req,res)=> res.send('Hello world'));
app.use('/users', userRoutes);

app.listen(PORT, function(){
    console.log("Server is running on Port:" +PORT);
});