import { db } from '@/config/db';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const user = await db.user.findUnique({
        where: {
          id: req.query.id,
        },
      });
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  } else if (req.method === 'UPDATE') {
    const { firstName, lastName, email, isAdmin = false } = req.body;

    try {
      const updatedUser = await db.user.update({
        where: {
          id: req.query.id,
        },
        data: {
          firstName,
          lastName,
          email,
          isAdmin,
        },
      });
      res.status(201).json({ message: 'User data updated', user: updatedUser });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}
