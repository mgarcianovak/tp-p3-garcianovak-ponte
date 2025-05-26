const ejs = require("ejs");//"installar ejs"
const path = require("path");

const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true })); // const datos = req.body;
app.use(express.json()); // const datos = req.body;

class Persona {
    apellido = "";
    nombre = "";
}

var p = new Persona
p.nombre = "lucas"
p.apellido = "ponte"
//controlador:
async function vistaEjemplo1(req, res) {
    let html = await ejs.renderFile(path.join(__dirname, '.', 'Vistas', 'clase_11.ejs'), p);
    res.status(200).send(html);
}

async function vistaEjemplo2(req, res) {
    const dato = req.body;
    let html = await ejs.renderFile(path.join(__dirname, '.', 'Vistas', 'persona2.ejs'), {nom:dato.nombre , ape:dato.apellido});
    res.status(200).send(html);
}
//uso el controlador
app.get('/', vistaEjemplo1);
app.post('/' , vistaEjemplo2);


const port = 3000;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});