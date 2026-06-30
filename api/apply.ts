import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, role, portfolio, message } = req.body || {};
  if (!name || !email) {
    return res.status(400).json({ error: "Name and Email are required fields" });
  }

  console.log("Careers application received:", { name, email, role, portfolio, message });

  res.json({
    success: true,
    message: `Application captured successfully. Our talent team will review your portfolio within 48 hours!`,
    applicationId: "VTQ-APP-" + Math.floor(100000 + Math.random() * 900000),
  });
}
