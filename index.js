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

app.get('/route', (req,res)=>{
    fetch('https://api.duniamaps.com/route?point=-1.297948,36.816498&point=-1.282815,36.810314&locale=en-US&vehicle=car&weighting=fastest&elevation=true&use_miles=false&layer=OpenStreetMap&points_encoded=false')
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
