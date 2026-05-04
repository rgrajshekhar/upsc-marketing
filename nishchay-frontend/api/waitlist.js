import clientPromise from '../lib/db.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  // Validate email
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email' });
  }

  try {
    const client = await clientPromise;
    const db = client.db('nishchay');

    const existing = await db.collection('waitlist').findOne({ email });

    if (existing) {
      return res.json({ success: true, new: false });
    }

    await db.collection('waitlist').insertOne({
      email,
      created_at: new Date()
    });

    return res.json({ success: true, new: true });

  } catch (error) {
    return res.status(500).json({ error: 'Server error' });
  }
}