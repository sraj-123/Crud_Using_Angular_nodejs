const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors");
const fs = require('fs');

app.use(express.json());
app.use(cors());


const dataFile = "data.json";

const loadData = ()=>{
  const data = fs.readFileSync(dataFile);
  return JSON.parse(data);

}

const saveData = ((data)=>{
  fs.writeFileSync(dataFile, JSON.stringify(data))
});

app.get("/api/employees",(req,res)=>{
  const data = loadData();
  res.send(data);

});

app.post("/api/employees",(req,res)=>{
  const data = loadData();
  const employee = req.body;
  data.push(employee);
  saveData(data);
  res.send({success: true});
});


app.put("/api/employees/:id",(req,res)=>{
  const data = loadData();
  const id = req.params.id;
  const newEmployee = req.body;
  data[id] = newEmployee;
  saveData(data);
  res.send({success:true})
});


app.delete("/api/employees/:id",(req,res)=>{
  const data = loadData();
  const id = req.params.id;
  data.splice(id,1);
  saveData(data);
  res.send({success:true})
})


const port = 3500;
app.listen(port,()=>{
  console.log(`This server is working in port no ${port}`)
})