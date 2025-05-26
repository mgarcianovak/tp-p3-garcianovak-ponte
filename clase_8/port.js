const express = require("express");
        const app = express()
        const port = 3000

        app.use(express.static('clase_8'));

        app.listen(port, () => {
        console.log(`Servidor escuchando en http://localhost:${port}`);
        });
        
        app.get("/",(req,res)=>{res.send("hola")})  
//para que funcione en la terminal instalo express y pongo node C:\Users\lucas\Documents\progra_3\clase_8\port.js(ubi abslouta)

