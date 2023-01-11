import { NextApiRequest, NextApiResponse } from 'next';

export default function demo(req: NextApiRequest, res: NextApiResponse) {
  res.json({ success: true });
}
