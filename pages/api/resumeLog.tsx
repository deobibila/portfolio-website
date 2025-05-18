import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).end(); // Method Not Allowed
    }

    const now = new Date().toISOString();
    const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

    console.log(`[RESUME DOWNLOAD] ${now} from IP: ${ip}`);

    // TODO: store this in a database or PostHog later if needed

    return res.status(200).json({ success: true });
}
