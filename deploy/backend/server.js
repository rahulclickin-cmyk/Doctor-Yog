const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Update this with your Vercel URL after deployment
app.use(cors({
  origin: '*' // For development, allow all. In production, set this to your Vercel URL.
}));

app.use(express.json());

// API Route for Reservation
app.post("/api/reserve", async (req, res) => {
  const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
  
  if (!webhookUrl) {
    console.error("GOOGLE_SHEET_WEBHOOK_URL is not set");
    return res.status(500).json({ error: "Server configuration error" });
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    });

    if (response.ok) {
      res.json({ success: true });
    } else {
      res.status(500).json({ error: "Failed to send data to Google Sheets" });
    }
  } catch (error) {
    console.error("Error sending data to Google Sheets:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get('/', (req, res) => {
  res.send('Doctor Yog Backend is running!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
