import { db } from '@/config/db';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const users = await db.user.findMany({
        include: {
          posts: true,
        },
      });
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  } else if (req.method === 'POST') {
    const { firstName, lastName, email, isAdmin = false } = req.body;

    try {
      const newUser = await db.user.create({
        data: {
          firstName,
          lastName,
          email,
          isAdmin,
        },
      });
      res
        .status(201)
        .json({ message: 'User added successfully', user: newUser });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}
