const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch'); // Asegúrate de tener esta lib en Node.js < 18

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.post('/insert', async (req, res) => {
  try {
    const result = await fetch('https://us-east-1.aws.data.mongodb-api.com/app/data-hjopnck/endpoint/data/v1/action/insertOne', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/ejson',
        'Accept': 'application/json',
        'apiKey': '0ba6255c-0dd0-44dd-a1ab-2a7f2747ee45'
      },
      body: JSON.stringify(req.body)
    });

    const data = await result.json();
    res.status(result.status).json(data);
  } catch (err) {
    console.error('Error al insertar:', err);
    res.status(500).json({ error: 'Error interno al insertar el documento' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor proxy escuchando en http://localhost:${PORT}`);
});
