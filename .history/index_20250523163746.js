import express from 'express';
import fetch from 'node-fetch';

const app = express();
app.use(express.json());

app.post('/insert-location', async (req, res) => {
  const { latitude, longitude } = req.body;

  if (!latitude || !longitude) {
    return res.status(400).json({ error: 'Latitude and longitude required' });
  }

  const postData = {
    dataSource: "Cluster0",
    database: "geo",
    collection: "location",
    document: {
      text: "Location!",
      latitude,
      longitude,
      date: new Date().toISOString(),
    },
  };

  try {
    const response = await fetch(
      'https://us-east-1.aws.data.mongodb-api.com/app/data-hjopnck/endpoint/data/v1/action/insertOne',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/ejson',
          Accept: 'application/json',
          apiKey: 'kq2MKDLKoTX9mulTY2b4oVakaipENhLNT4oqX8q3HU1ZduB7Ad1JkdtkIoij53Wa',
        },
        body: JSON.stringify(postData),
      }
    );

    if (!response.ok) {
      const errorData = await response.text();
      return res.status(response.status).json({ error: errorData });
    }

    const result = await response.json();
    res.json(result);
  } catch (error) {
    console.error('Error inserting document:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
