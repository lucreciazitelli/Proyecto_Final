const express = require('express');
const app = express();
const server = require('http').createServer(app);
const mongoose = require('mongoose');
const bodyParser=require('body-parser');
const cors=require('cors');
const session = require("express-session");

const connectionString = "";

//mongoose models
require('./models/user.js');


//middlewares
app.use(cors({credentials: true, origin: '*'}));
app.use(bodyParser.urlencoded({ extended: false  }));
app.use(bodyParser.json());

const sessionMiddleware = session({
	secret: "some secret string",
	resave:false,
	saveUninitialized: false,
	name: "sid"
});
app.use(sessionMiddleware);

app.use(require('./routes'));

//mongoose conection
mongoose.connect(connectionString);

let router=express.Router();
app.use(router);

//not found error middleware
app.use(function(req,res){res.sendStatus(404);});

const port=3000;

server.listen(port, '0.0.0.0', function() {
	  console.log(`Server running on port ${port}`);
});







