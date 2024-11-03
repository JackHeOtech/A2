const http = require('node:http');
const express = require("express")

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

//Defining the routes to the different view pages and setting the view engine as ejs

app.set("view engine", "ejs");

app.get("/index", (req,res) => {
  res.render("index", {title: "Home"}) //res.render works by loading the first parameter (view) which is your web page, locals is a variable inside the webpage you want to pass to the view
})

app.get("/about", (req,res) => {
  res.render("about", {title: "About Me"})
})

app.get("/projects", (req,res) => {
  res.render("projects", {title: "Projects"})
})

app.get("/contact", (req,res) => {
  res.render("contact", {title: "Contact Me"})
})

