const express = require("express")
//transpilar 
//EcmaScript ES modules | import express from "express"
//CommonJS const express = require("express")

const app = express();
const example = function(){
    console.log("Estoy a la escucha")
}

app.listen(
    9000,
    example
)
