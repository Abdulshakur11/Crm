const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
//
const ejs = require('ejs');
const { PORT } = require('./config');
const router = require('./controllers');
const cookieParser = require('cookie-parser');


app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));
//
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, './views'))
//
app.use("/assets",express.static(path.resolve(__dirname, "public")));
app.use(cookieParser());
app.use(router);


app.listen({port: PORT}, () => {
  console.log(PORT);
})