import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  // API Route for Reservation
  app.post("/api/reserve", async (req, res) => {
    const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL || "https://script.google.com/macros/s/AKfycby9XGcSp6PqGYHkxiRM2yYixXZ9X7EEjOH7Ak-1Go8jo4DHPPpa0twFmnEzwiHC9H9V/exec";

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body),
      });

      console.log(`Google Sheets response status: ${response.status}`);

      if (response.ok || (response.status >= 300 && response.status < 400)) {
        res.json({ success: true });
      } else {
        const errorText = await response.text().catch(() => "");
        console.error("Google Sheets Web App Error detail:", errorText);
        res.status(500).json({ error: "Failed to send data to Google Sheets" });
      }
    } catch (error) {
      console.error("Error sending data to Google Sheets:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
