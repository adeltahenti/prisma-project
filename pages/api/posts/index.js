import { db } from '@/config/db';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const posts = await db.post.findMany({
        include: {
          author: {
            select: {
              firstName: true,
              lastName: true,
            },
          },
        },
      });
      res.status(200).json(posts);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  } else if (req.method === 'POST') {
    const { title, body, authorId } = req.body;

    try {
      const newPost = await db.post.create({
        data: {
          title,
          body,
          authorId,
        },
      });
      res
        .status(201)
        .json({ message: 'Post added successfully', post: newPost });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}
