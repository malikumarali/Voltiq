import type { VercelRequest, VercelResponse } from "@vercel/node";
import { GoogleGenAI, Type } from "@google/genai";

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

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { websiteUrl, industry, businessDescription } = req.body || {};

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
              description: "Overall digital voltage score from 1 to 100 based on their digital presence quality",
            },
            seoAudit: {
              type: Type.OBJECT,
              properties: {
                score: { type: Type.INTEGER, description: "SEO score out of 100" },
                opportunities: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING },
                  description: "List of 3 specific, actionable SEO high-yield opportunities",
                },
                mistakes: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING },
                  description: "List of 2-3 severe organic traffic roadblocks or mistakes",
                },
              },
              required: ["score", "opportunities", "mistakes"],
            },
            designAudit: {
              type: Type.OBJECT,
              properties: {
                score: { type: Type.INTEGER, description: "UX and Conversion Design score out of 100" },
                quickWins: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING },
                  description: "List of 3 visual design or load-speed quick wins to boost conversion rates",
                },
                roadblocks: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING },
                  description: "List of 2-3 elements currently leaking leads",
                },
              },
              required: ["score", "quickWins", "roadblocks"],
            },
            adsAudit: {
              type: Type.OBJECT,
              properties: {
                score: { type: Type.INTEGER, description: "Paid Ads & Targeting readiness score out of 100" },
                keyStrategies: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING },
                  description: "List of 2-3 elite campaign structures or funnel improvements (Meta/Google Ads)",
                },
              },
              required: ["score", "keyStrategies"],
            },
            actionPlan: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Three immediate, punchy actions they should take this week",
            },
            summaryText: {
              type: Type.STRING,
              description: "A super confident, relentless summary of what they are missing out on and why they need to dominate today",
            },
          },
          required: ["voltageScore", "seoAudit", "designAudit", "adsAudit", "actionPlan", "summaryText"],
        },
      },
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
      details: error.message || "Unknown error occurred.",
    });
  }
}
