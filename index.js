const ejs = require('ejs');
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static("assets"));
app.use(express.static("upload"));

app.use("/", routes);

app.listen(3000, (err) => {
if(!err){
    console.log("Server running → http://localhost:3000");
  }else{
    console.log('ERROR..' , err);
  }
});
