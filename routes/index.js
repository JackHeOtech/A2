var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;


const http = require('node:http');
const express = require("express")
var connect = require("connect")
var app = connect()

const app = express();
const hostname = '127.0.0.1';
const port = 3000;


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end("Assignment 2");
});


//Defining the routes to the different view pages and setting the view engine as ejs

app.set("view engine", "ejs");

app.get("/", (req,res) => { //using / opens the root file rather than needing to put /index
  res.render("index", {title: "Home"}) //res.render works by loading the first parameter (view) which is your web page, locals is the variable inside the webpage you want to pass to the view
})

app.get("/about", (req,res) => {
  res.render("about", {title: "About Me"}) //setting title variable replaces anywhere where the "title" variable exists with "About Me" for example
}) //using <%=title%> in the html code, title is replaced with about me

app.get("/projects", (req,res) => {
  res.render("projects", {title: "Projects"}) //Injecting the Projects title
})

app.get("/contact", (req,res) => {
  res.render("contact", {title: "Contact Me"})
})