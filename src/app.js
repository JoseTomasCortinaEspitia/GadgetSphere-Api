// dependencies 
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mainRouter = require("./routes/mainRouter");


const app = express();

// Middleware de CORS
app.use(cors({
    origin: 'http://localhost:5173', // Origen permitido
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos HTTP permitidos
    credentials: true // Permitir el envío de cookies si es necesario
  }));
  
app.use(morgan("dev"));
app.use(express.json());
app.use(mainRouter)

module.exports = app