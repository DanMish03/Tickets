const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.set('view engine', 'ejs');

const PORT = 3000;
const Post = require('./models/post')
const db = 'mongodb+srv://Daniil:admin@cluster0.44kjk.mongodb.net/Tickets?retryWrites=true&w=majority';
mongoose
    .connect(db,)
    .then((res) => console.log('Connect to db'))
    .catch((error) => console.log(error));
const path = require('path');

const createPath = (page) => path.resolve(__dirname, 'ejs-views', `${page}.ejs`);

app.listen(PORT,'localhost', (error) =>{
    error ? console.log(error) : console.log(`Listening port ${PORT}`);
});

app.use('/styles',express.static('styles'));
app.use('/Assets',express.static('Assets'));
app.use('/js',express.static('/js'));
app.use(express.urlencoded({extended:false}));

app.get('/admin',(req,res) =>{
    Post
        .find()
        .then((posts)=>res.render(createPath('admin'),{posts}))
        .catch((error) => console.log(error));
})
app.get('/',(req,res) =>{
    res.render(createPath('index'));
})
app.get('/login',(req,res) =>{
    res.render(createPath('login'));
})
app.get('/admin/:id',(req,res) =>{
    Post
        .findById(req.params.id)
        .then((post)=>res.render(createPath('request'),{post}))
        .catch((error) => console.log(error));
})

app.delete('/admin/:id',(req,res) =>{
    Post
        .findByIdAndDelete(req.params.id)
        .then(result => {
            res.sendStatus(200);
        })
        .catch((error) => console.log(error));
})
app.post('/index',(req, res) =>{
    const {name,phone,match } = req.body;
    const post = new Post(
        {name,
            phone,
            match,
            status: 'New'
        }
    );
    post
        .save()
        .then((result)=>res.render(createPath('request'),{post}))
        .catch((error)=>{
            console.log(error)
        })
    // const post = {
    //     id: '1',
    //     name,
    //     phone,
    //     match,
    //     status : 'New',
    //     edit : 'In Process'
    //
    // }
    // res.render(createPath('request'),{post});
});
