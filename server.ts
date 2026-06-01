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
    const defaultWebhook = "https://script.google.com/macros/s/AKfycbwOFwb9U4dxSZ9g2rV2jhcqfw9mI_QbpLvUekR4xJPOJ2gJVV2Wpjvg1_Zh9tpgM04I/exec";
    const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL || defaultWebhook;

    const payload = req.body || {};
    
    // Normalize fields so they map cleanly to common Google Sheets columns/Google Apps Script variables
    const formType = payload.formType || "Reservation";
    const firstName = payload.firstName || "";
    const lastName = payload.lastName || "";
    const fullName = payload.name || `${firstName} ${lastName}`.trim();
    const email = payload.email || "";
    const rawPhone = payload.phone || payload.whatsapp || "";
    const countryCode = payload.countryCode || "";
    const phone = countryCode ? `${countryCode} ${rawPhone}`.trim() : rawPhone;
    const gender = payload.gender || "";
    const country = payload.country || "";
    const program = payload.program || payload.retreatType || payload.retreat || "";
    const date = payload.date || payload.arrivalDate || "";
    const duration = payload.duration || payload.retreatDays || "";
    const accommodation = payload.accommodation || "";
    const message = payload.message || payload.comments || payload.healthComments || "";
    const timestamp = new Date().toISOString();

    const unifiedData = {
      timestamp,
      formType,
      name: fullName,
      firstName,
      lastName,
      email,
      phone,
      whatsapp: payload.whatsapp || "",
      gender,
      country,
      program,
      retreatType: payload.retreatType || "",
      retreat: payload.retreat || "",
      date,
      arrivalDate: payload.arrivalDate || "",
      duration,
      retreatDays: payload.retreatDays || "",
      accommodation,
      message,
      comments: payload.comments || "",
      healthComments: payload.healthComments || "",
      ...payload
    };

    console.log("--- Google Sheet Submission ---");
    console.log(`Target Webhook URL: ${webhookUrl}`);
    console.log("Normalized Unified Data for Apps Script:", JSON.stringify(unifiedData, null, 2));

    try {
      // Append fields to URL query parameters to support e.parameter in standard Google Apps Script
      const urlWithParams = new URL(webhookUrl);
      Object.entries(unifiedData).forEach(([key, val]) => {
        if (typeof val === "string" || typeof val === "number" || typeof val === "boolean") {
          urlWithParams.searchParams.append(key, String(val));
        }
      });

      console.log(`Sending to script with direct/fallback query parameters...`);

      const response = await fetch(urlWithParams.toString(), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        },
        body: JSON.stringify(unifiedData),
        redirect: "follow"
      });

      console.log(`Google Sheets response status code: ${response.status}`);
      console.log(`Google Sheets response ok: ${response.ok}`);

      const responseText = await response.text().catch(() => "");
      console.log("Google Sheets response body:", responseText);

      // Apps Script Web Apps when successful return 302 redirects which fetch automatically follows, 
      // yielding the content of the Web App (often JSON or HTML) and a 200 OK status from the redirected URL
      if (response.ok || (response.status >= 300 && response.status < 400)) {
        res.json({ success: true });
      } else {
        console.error("Google Sheets Web App Error detail:", responseText);
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
