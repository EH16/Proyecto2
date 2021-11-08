const express = require('express');
const path = require('path');

const app = express();
app.use(express.static('/dist/cliente'));
app.get('/*', (req,res) =>
    res.sendFile('inicio.component.html', {root: 'dist/cliente/src/app/Components/inicio'}),
);
app.listen(process.env.PORT || 8080);