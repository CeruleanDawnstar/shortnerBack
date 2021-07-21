const express = require("express");
const cors = require("cors");
const passport = require("passport");
const port = 8125;

const app = express();

const login = require('./routes/login');
const signUp = require('./routes/signUp');
const shortLinks = require('./routes/urlLinkRoute');
const allLinks = require('./routes/urlLinkRoute');


app.use(cors());
app.use(passport.initialize());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/login', login);
app.use('/signUp', signUp);
app.use('/short', shortLinks);
app.use('/links', allLinks);
app.use('/links/:qrCode', allLinks);

app.listen(port);