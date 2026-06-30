import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini SDK lazily to avoid crashing on startup if key is missing
let aiClient: GoogleGenAI | null = null;

function getGeminiClient() {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is required");
    }
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

// API Routes

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", time: new Date().toISOString() });
});

// Mock Contact Lead Submission
app.post("/api/contact", (req, res) => {
  const { name, email, phone, service, message } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: "Name and Email are required fields" });
  }
  
  console.log("Contact lead received:", { name, email, phone, service, message });
  
  // Return successful response in Voltiq tone
  res.json({
    success: true,
    message: `Lead captured with maximum voltage. Stand by, ${name}. Our growth architects will analyze your presence and reach out within 24 hours.`,
    leadId: Math.random().toString(36).substring(7).toUpperCase()
  });
});

// Mock Strategy Call Booking
app.post("/api/book", (req, res) => {
  const { name, email, date, timeSlot, service } = req.body;
  if (!name || !email || !date || !timeSlot) {
    return res.status(400).json({ error: "Missing required booking details" });
  }
  
  console.log("Strategy call booked:", { name, email, date, timeSlot, service });
  
  res.json({
    success: true,
    message: `Strategy call successfully locked in for ${date} at ${timeSlot}. A high-voltage calendar link has been sent to ${email}.`,
    bookingId: "VTQ-" + Math.floor(100000 + Math.random() * 900000)
  });
});

// AI Digital Presence Audit Endpoint
app.post("/api/audit", async (req, res) => {
  const { websiteUrl, industry, businessDescription } = req.body;
  
  if (!websiteUrl) {
    return res.status(400).json({ error: "Website URL is required to trigger the digital audit." });
  }
  
  try {
    const ai = getGeminiClient();
    
    const systemPrompt = `You are the lead marketing architect at Voltiq, an elite, high-voltage digital growth agency.
Your tone is confident, charged, direct, and results-backed.
No fluffy wording. Avoid: "innovative", "solutions", "synergy", "seamless", "leverage", "empower".
Use words like: "dominate", "voltage", "precision", "charged", "results", "power", "relentless", "intelligent".
Perform a detailed, highly specific digital presence audit based on the user's details. Even if the website URL is simple or local, analyze it with professional acumen. Give actionable, precise SEO suggestions, design conversion pitfalls, and paid ads opportunities.`;

    const userPrompt = `Audit Details:
Website: ${websiteUrl}
Industry: ${industry || "General digital presence"}
Business Description: ${businessDescription || "Looking for scaling and better conversions."}

Generate the audit in structured JSON format according to the requested schema. Provide realistic and razor-sharp growth tactics.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: userPrompt,
      config: {
        systemInstruction: systemPrompt,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            voltageScore: { 
              type: Type.INTEGER, 
              description: "Overall digital voltage score from 1 to 100 based on their digital presence quality" 
            },
            seoAudit: {
              type: Type.OBJECT,
              properties: {
                score: { type: Type.INTEGER, description: "SEO score out of 100" },
                opportunities: { 
                  type: Type.ARRAY, 
                  items: { type: Type.STRING },
                  description: "List of 3 specific, actionable SEO high-yield opportunities" 
                },
                mistakes: { 
                  type: Type.ARRAY, 
                  items: { type: Type.STRING },
                  description: "List of 2-3 severe organic traffic roadblocks or mistakes" 
                }
              },
              required: ["score", "opportunities", "mistakes"]
            },
            designAudit: {
              type: Type.OBJECT,
              properties: {
                score: { type: Type.INTEGER, description: "UX and Conversion Design score out of 100" },
                quickWins: { 
                  type: Type.ARRAY, 
                  items: { type: Type.STRING },
                  description: "List of 3 visual design or load-speed quick wins to boost conversion rates" 
                },
                roadblocks: { 
                  type: Type.ARRAY, 
                  items: { type: Type.STRING },
                  description: "List of 2-3 elements currently leaking leads" 
                }
              },
              required: ["score", "quickWins", "roadblocks"]
            },
            adsAudit: {
              type: Type.OBJECT,
              properties: {
                score: { type: Type.INTEGER, description: "Paid Ads & Targeting readiness score out of 100" },
                keyStrategies: { 
                  type: Type.ARRAY, 
                  items: { type: Type.STRING },
                  description: "List of 2-3 elite campaign structures or funnel improvements (Meta/Google Ads)" 
                }
              },
              required: ["score", "keyStrategies"]
            },
            actionPlan: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING },
              description: "Three immediate, punchy actions they should take this week" 
            },
            summaryText: { 
              type: Type.STRING, 
              description: "A super confident, relentless summary of what they are missing out on and why they need to dominate today" 
            }
          },
          required: ["voltageScore", "seoAudit", "designAudit", "adsAudit", "actionPlan", "summaryText"]
        }
      }
    });

    const resultText = response.text;
    if (!resultText) {
      throw new Error("Received empty response from Gemini.");
    }
    
    const parsedResult = JSON.parse(resultText);
    res.json({
      success: true,
      audit: parsedResult,
    });
  } catch (error: any) {
    console.error("Gemini API Error in digital presence audit:", error);
    res.status(500).json({
      error: "Failed to generate digital presence audit.",
      details: error.message || "Unknown error occurred."
    });
  }
});

// Vite Middleware integration for development / Static Serving for production
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT} in ${process.env.NODE_ENV || "development"} mode`);
  });
}

startServer();
