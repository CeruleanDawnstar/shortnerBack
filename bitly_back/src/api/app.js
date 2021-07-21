const express = require("express");
const cors = require("cors");
const passport = require("passport");
// Setup server port
const hostname = '0.0.0.0';
const port = 8125;
// create express app
const app = express();

app.use(cors({
    credentials:true,
    origin:'http://localhost'
}));

const login = require('./routes/login');
const signUp = require('./routes/signUp');
//const shortLinks = require('./routes/urlLinkRoute');
//const allLinks = require('./routes/urlLinkRoute');

//const userRoute = require('./routes/userRoute');
//userRoute(app); 

//app.use(cors());
app.use(passport.initialize());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const linkRoute = require('./routes/linkRoute');
linkRoute(app);

app.use('/login', login);
app.use('/signUp', signUp);
//app.use('/short', shortLinks);
//app.use('/links', allLinks);
//app.use('/links/:qrCode', allLinks);

//listen for requests
app.listen(port, hostname);