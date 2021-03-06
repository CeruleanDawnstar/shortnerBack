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
    origin:'http://localhost:8081'
}));

const login = require('./routes/login');
const signUp = require('./routes/signUp');

app.use(passport.initialize());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const userRoute = require('./routes/userRoute.js');
userRoute(app);

const linkRoute = require('./routes/linkRoute');
linkRoute(app);

app.use('/login', login);
app.use('/signUp', signUp);

app.listen(port, hostname);