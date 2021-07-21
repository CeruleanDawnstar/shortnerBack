const express = require("express");
const cors = require("cors");
const passport = require("passport");
// Setup server port
const hostname = '0.0.0.0';
const port = 8125;

const app = express();

const login = require('./routes/login');
const signUp = require('./routes/signUp');

app.use(cors({
    credentials:true,
    origin:'http://localhost'
}));

app.use(passport.initialize());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const userRoute = require('./routes/userRoute.js');
userRoute(app);

const linkRoute = require('./routes/linkRoute.js');
linkRoute(app);

app.use('/login', login);
app.use('/signUp', signUp);

//listen for requests
app.listen(port, hostname);
