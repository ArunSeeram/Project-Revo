const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());          
app.use(express.json());  


let names = [];


app.post("/api/names", (req, res) => {
  const name = req.body.name;

  
  if (!name) {
    return res.json({ success: false, message: "Name is required" });
  }

  if (name.trim() === "") {
    return res.json({ success: false, message: "Name cannot be empty" });
  }

  names.push(name.trim());

  return res.json({
    success: true,
    message: "Name stored successfully"
  });
});


app.get("/api/names", (req, res) => {
  return res.json({
    success: true,
    names: names
  });
});


app.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});
