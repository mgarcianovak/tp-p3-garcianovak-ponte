//como configurar un server
// el archivo .env configura la variable de entorno
//prosess.env para levamtar el archivo
//comando: --env-file=.env nombre del archivo para ver el env
const express = require("express")
const app = express()
const port = 280
// tamos haciendo un servidor : escucha solicitudes http y las responde
const n = process.env.nombre;
const a = process.env.apellido;

console.log(`nombre:${n} apellido:${a}`);

app.get("/",(req,res)=>{res.send("hola")})

app.listen(port, ()=>{
    console.log("corriendo servidor")
})

//para hacer una pag web hay que configurar el milware para eventos estaticios
app.use(express.static('estatico'));//el estatic devuelve un milware estatico adentro va la ruta de mi carpeta estatica
//para hacerlo tengo uqe hacer un archivo.html estatito que hostee la imagen/uso''
app.use('/carpeta' , express.static('estatico'));//llego al mismo lugar pero la ruta es distinta le agrego una carpeta 

//el front end es un archivo estatico y va en estos repositorios

//cors // distintas formas de configurar
var cors = require('cors')
app.use(cors());//aca lo setteo como mileare con todas las solicitudes 

app.use(express.json());//si viene una solicitud con headere content-type aplicasion/json
//ya el json no es asincronico 
app.post('/concors', (req,res,next)=>{
    const contenido = req.body;
    contenido.resibido="ok";
    res.status(200).send(contenido)
})

//api abm // para mandar atraves del url
app.get('/api/:id',async(req,res,next)=>{
    const id = res.params.id;
    res.status(200).send("el id recibido fue:"+id);
});
//busco el nombre por el url
Router.get(`/api/busqueda`,(res,req)=>{
    res.send(`buscando:${req.query,nombre}`);
})
//el suario manda dato y le devuelvo su id
app.get('/api/:id',async(req,res,next)=>{
    const dato = req.body;
    //grabo los datos
    console.log(dato);
    res.status(200).send({id:53535});
})
//intentar crear un servidor que hostee el parctico 2

