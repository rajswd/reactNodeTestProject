const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 5001;

let dataList = [
   {"id":10001, "first_name": "Raj", "last_name":"Singh", "gender":"Male", "nationality": "india", "terms": true, "notes":"This is 1 data"},
   {"id":10002, "first_name": "Raju", "last_name":"Kumar", "gender":"Male", "nationality": "india", "terms": false, "notes":"This is 2 data"},
   {"id":10003, "first_name": "Ankita", "last_name":"Panth", "gender":"Female", "nationality": "Malaysia", "terms": true, "notes":"This is 3 data"}
];

app.listen(port, () => {
   console.log(`The app server is running  on port: ${port}`);
});

const DIST_DIR = path.join(__dirname, "dist");
const HTML_FILE = path.join(DIST_DIR, "index.html");

app.use(express.json());
app.use(express.static("public"));
app.use(express.static("dist"));

app.get("/", (req, res) => {
   res.sendFile(HTML_FILE, function(err){
      console.log("------Server Started at -------", port);
      if(err){
         res.status(500).send(err);
      }
   });
});


app.get("/todo/list", (req, res) => {
   /**
 * TODO
 * Can write logic to call service which interact with Database and get resultset. 
 */
   res.send(dataList);
});

app.post("/todo/list", (req, res) => {
   let newData = Object.assign({},req.body, {id: Math.ceil(Date.now() * Math.random() * 1000)});
   /**
 * TODO
 * Can write logic to call service which interact with Database and get resultset. 
 */
   dataList.push(newData);
   res.send({status: "success", "message":"Data is added successfuly."});
});

app.get("/todo/list/:id", (req, res) => {
/**
 * TODO
 * Can write logic to call service which interact with Database and get resultset. 
 */
   res.send({status: "success", "message":"Data is updated successfuly."});

   res.send(dataList);
});

app.delete("/todo/list/:id", (req, res) => {
   
   /**
 * TODO
 * Can write logic to call service which interact with Database and get resultset. 
 */
   dataList = dataList.filter(el => el.id != req.params.id);
   res.send({status: "success", "message":`Data(i.e ${req.params.id}) is deleted successfuly`});

});


