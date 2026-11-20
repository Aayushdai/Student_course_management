import express from 'express';
import studentRoutes from './src/routes/student.route.js';

const app = express();
app.use(express.json());

app.use('/api/students', studentRoutes);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

export default app;