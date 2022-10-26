const express = require("express");
const path = require ("path");

const app = express()
const publicPath= path.resolve(__dirname, "public")
app.use(express.static(publicPath))

app.use(express.static("css"))

app.use(express.static("img"))

const port = process.env.PORT || 3000;

app.listen(port, ()=> {
    console.log(`Servidor corriendo en el puerto ${port}, link puerto: http://localhost:${port}`)
})

app.get("/", (req, res)=>{
    res.sendFile(path.resolve(__dirname, "home.html"))
})




