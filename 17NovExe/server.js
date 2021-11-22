const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const router = express.Router();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/views/home.html"));
});

app.get("/userlist", (req, res) => {
  fs.readFile("data/user_data.json", (err, data) => {
    if (err) {
      console.log(err);
      res.end("No data found");
    } else res.end(data);
  });
});

router.get("/adduser", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/add_user.html"));
});

router.get("/aboutus", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/about_us.html"));
});

app.delete("/deleteuser/:id", (req, res) => {
  fs.readFile("data/user_data.json", "utf8", (err, data) => {
    data = JSON.parse(data);

    delete data[req.params.id];
    data = data.filter((obj) => {
      if (obj !== null) {
        return true;
      }
    });

    // console.log(JSON.stringify(data));
    res.status(200);
    fs.writeFile("data/user_data.json", JSON.stringify(data), "utf-8", () => {
      console.log("removed file");
    });

    res.end("Removed");
  });
  res.end("delete called");
});

app.post("/adduser", createdOn, (req, res) => {
  console.log("inside post");
  res.send();
});

function createdOn(req, res, next) {
  console.log("inside createdOn");
  let obj = req.body;
  obj.createdOn = new Date().toISOString();

  fs.readFile("data/user_data.json", "utf8", (err, data) => {
    data = JSON.parse(data);
    data.push(obj);
    fs.writeFile("data/user_data.json", JSON.stringify(data), "utf-8", () => {
      console.log("added file");
    });
    res.end("Removed");
  });
  
  next();
}
app.use("/", router);

app.listen(3000, () => console.log("Server Started"));
