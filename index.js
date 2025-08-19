//servidor

const express = require('express');
const app = express();
const PORT = process.env.PORT;

//endpoint que responde un mensaje

app.get('/', (_req,res) => {
    res.send('Integracion continua funcionando en examen');       
});

app.listen (PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
}   );



