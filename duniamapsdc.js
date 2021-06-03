if (process.env.MODE_ENV !== 'production') {
    require('dotenv').config()
}
const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/DuniaMapsDB'
const cookieParser = require('cookie-parser');
const path = require('path');
var errorHandler = require('errorhandler');
var sassMiddleware = require('node-sass-middleware');

const app = express()
app.use(sassMiddleware({
    src: path.join(__dirname, 'public/scss'),
    dest: path.join(__dirname, 'public/css'),
    debug: false,
    force: true,
    outputStyle: 'compressed',
    prefix: '/css'
}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept,Authorization');

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT,POST,PATCH,DELETE,GET');
        return res.status(200).json({});
    }
    next();
});

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
const con = mongoose.connection

con.on('open', () => {
    console.log('çonnected...')
})

const POI = require('./models/poi')

app.get('/', async (req, res) => {
    let poi = await POI.find({})
    res.render('index', { poi })
})

app.get('/poi', async (req, res) => {
    let poi = await POI.find({})
    res.status(200).json(poi)
})

app.delete('/:id', async(req,res)=>{
    POI.findOneAndRemove({ _id: req.params.id }, function (err) {
        return res.status(200).json({message:"Deleted"})
    })
})



app.post('/', async (req, res) => {
    try {
        const poi = new POI(req.body)
        poi.save().then(pd => {
            return res.status(200).json(pd)
        }).catch(err => {
            console.log(err)
        })
    } catch (error) {
        console.log(error)
    }
})


app.post('/:id', async (req, res) => {
    try {
        POI.findOneAndUpdate({ _id: req.params.id }, req.body, { upsert: true }, function (err, doc) {
            if (err) { return console.log(err); }
            else {
                return res.status(200).json(doc)
            }
        });
    } catch (error) {
        console.log(error)
    }
})


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next();
});


errorHandler.title = "Ups...";
app.use(errorHandler());

app.listen(7000, () => {
    console.log('Server running at 7000')
})
