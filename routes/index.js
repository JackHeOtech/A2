var express = require('express');
var router = express.Router();


//Defining the routes to the different view pages and setting the view engine as ejs

app.set("view engine", "ejs");

router.get("/", (req,res) => { //using / opens the root file rather than needing to put /index
  res.render("index", {title: "Home"}) //res.render works by loading the first parameter (view) which is your web page, locals is the variable inside the webpage you want to pass to the view
})

router.get("/about", (req,res) => {
  res.render("about", {title: "About Me"}) //setting title variable replaces anywhere where the "title" variable exists with "About Me" for example
}) //using <%=title%> in the html code, title is replaced with about me

router.get("/projects", (req,res) => {
  res.render("projects", {title: "Projects"}) //Injecting the Projects title
})

router.get("/contact", (req,res) => {
  res.render("contact", {title: "Contact Me"})
})