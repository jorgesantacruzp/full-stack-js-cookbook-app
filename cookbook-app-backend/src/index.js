import express from 'express';
import bodyParser from 'body-parser';
import multer from 'multer';
import morgan from 'morgan';

//postgres
//import routes from './routes/postgre/categoriesRoute';

//mongo
import routes from './routes/mongo/recipesRoute';

const app = express();
const upload = multer();

//Allow access control allow header
app.all('/*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With');
    next();
});

app.use('/cookbook', routes);

app.use(express.static(__dirname + '/../public'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// catch 404 and customize it
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    //next(err); uncomment for more details
    res.send('Try another url, this one doesn\'t exist.');
});

var port = 3000;
app.listen(port, () => {
    console.log('Server is listening on port: ' + port);
});

//sample routes
app.get('/hello', (req, res) => {
    res.send('World');
});

app.get('/add/:x/:y', (req, res) => {
    const x = parseInt(req.params.x);
    const y = parseInt(req.params.y);
    res.send({
        sum: x + y
    });
});
