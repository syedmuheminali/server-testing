const express = require("express");
const app = express();


const PORT = 5000



app.get("/",(req,res) =>{
    res.send("Hello World!")
})



// listening to server

app.listen(PORT,() => console.log(`Your server is running on ${PORT}`))

