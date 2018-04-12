const express = require( "express")
// const bodyParser = require( )
const app = express( )
app.set("view engine", "ejs");


app.get ("/", (req, res) => {
  res.render("index")
})

app.listen (3000, (req, res) => console.log(" LIVE on 3000"))
