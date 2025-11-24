import { Router, Request, Response } from 'express';

const router = Router();

// Sample data
interface User {
  id: number;
  name: string;
  email: string;
  createdAt: string;
}

const users: User[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    createdAt: new Date().toISOString()
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    createdAt: new Date().toISOString()
  }
];

// Get all users
router.get('/users', (req: Request, res: Response) => {
  res.json({
    success: true,
    data: users,
    count: users.length
  });
});

// Get user by ID
router.get('/users/:id', (req: Request, res: Response) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);
  
  if (!user) {
    return res.status(404).json({
      success: false,
      message: 'User not found'
    });
  }
  
  res.json({
    success: true,
    data: user
  });
});

// Create new user
router.post('/users', (req: Request, res: Response) => {
  const { name, email } = req.body;
  
  if (!name || !email) {
    return res.status(400).json({
      success: false,
      message: 'Name and email are required'
    });
  }
  
  const newUser: User = {
    id: users.length + 1,
    name,
    email,
    createdAt: new Date().toISOString()
  };
  
  users.push(newUser);
  
  res.status(201).json({
    success: true,
    data: newUser,
    message: 'User created successfully'
  });
});

// Test endpoint with error
router.get('/test-error', (_req: Request, _res: Response) => {
  throw new Error('This is a test error');
});

export default router;
