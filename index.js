const express = require('express')
const fetch = require('node-fetch');
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



app.get('/', async (req, res) => {
    res.render('index')
})

app.get('/route/:query', (req,res)=>{
    fetch(`https://api.duniamaps.com/route?${req.params.query}`)
        .then(res => res.json())
        .then(json => {
            let data = json
            res.json(data)   
        }).catch(err => {
            console.log(err)
        })
})

app.get('/poi/:query', (req, res) => {
    fetch(`https://api.duniamaps.com/poi?q=${req.params.query}&type=json&subcat=&apikey=API_KEY&limit=5&lat=-1.298424&lon=36.784720`)
        .then(res => res.json())
        .then(json => {
            let data = json
            res.json(data)
        }).catch(err => {
            console.log(err)
        })
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
