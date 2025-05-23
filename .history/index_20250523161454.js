import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
 // Asegúrate de tener esta lib en Node.js < 18

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.post("/api/save-location", async (req, res) => {
  try {
  const response = await fetch(
    "https://us-east-1.aws.data.mongodb-api.com/app/data-hjopnck/endpoint/data/v1/action/insertOne",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",  // Cambiado de application/ejson
        Accept: "application/json",
        apiKey: "kq2MKDLKoTX9mulTY2b4oVakaipENhLNT4oqX8q3HU1ZduB7Ad1JkdtkIoij53Wa",
      },
      body: JSON.stringify(postData),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to insert document");
  }

  const result = await response.json();
  console.log("Document inserted successfully:", result);
  setImageLoaded(true);
} catch (error) {
  console.error("Error inserting document:", error);
  setError("Error inserting document");
} finally {
  setLoading(false);
}

});

app.listen(PORT, () => {
  console.log(`🚀 Servidor proxy escuchando en http://localhost:${PORT}`);
});
