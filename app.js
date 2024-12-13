const express = require('express');
const conn = require("./connection/conn");
const cors = require('cors');
const wishesRoute = require("./source/routes/wish");

conn()

const app = express();

app.use(express.json());
app.use(cors());
app.use('/', wishesRoute)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Servidor iniciado na porta ${PORT}`))