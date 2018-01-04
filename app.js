const express = require("express")
const mustacheExpress = require("mustache-express")
const bodyParser = require("body-parser")

const app = express()

let ToDoItems = []

app.use(bodyParser.urlencoded({extended :false}))

app.engine("mustache",mustacheExpress())
app.set("views","./views")
app.set("view engine","mustache")

app.listen(3000,function(){
  console.log("server is running!")
})

app.get("/", function(req,res){
  res.send("hello world")
})

app.get("/todolist",function(req,res){
  res.send("Welcome to the to do list")
})

app.get("/todos",function(req,res){
  res.render("todos", )
})

app.get("/todo",function(req,res){
  res.render("todo", {todo : ToDoItems})
})

app.post("/newToDoItem",function(req,res){
  let title = req.body.itemTitle
  let itemDescription =  req.body.description

  ToDoItems.push({"title":title,"description":itemDescription})
  console.log(ToDoItems)

  res.render("todos",{todo : ToDoItems})
})
