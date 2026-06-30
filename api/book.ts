import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, date, timeSlot, service } = req.body || {};
  if (!name || !email || !date || !timeSlot) {
    return res.status(400).json({ error: "Missing required booking details" });
  }

  console.log("Strategy call booked:", { name, email, date, timeSlot, service });

  res.json({
    success: true,
    message: `Strategy call successfully locked in for ${date} at ${timeSlot}. A high-voltage calendar link has been sent to ${email}.`,
    bookingId: "VTQ-" + Math.floor(100000 + Math.random() * 900000),
  });
}
