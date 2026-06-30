import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, phone, service, message } = req.body || {};
  if (!name || !email) {
    return res.status(400).json({ error: "Name and Email are required fields" });
  }

  console.log("Contact lead received:", { name, email, phone, service, message });

  res.json({
    success: true,
    message: `Lead captured with maximum voltage. Stand by, ${name}. Our growth architects will analyze your presence and reach out within 24 hours.`,
    leadId: Math.random().toString(36).substring(7).toUpperCase(),
  });
}
