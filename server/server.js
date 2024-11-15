import dotenv from 'dotenv';
dotenv.config();  // Load environment variables

import express from 'express';
import cors from 'cors';
import uploadRoutes from './routes/uploadRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', uploadRoutes);

app.listen(3001, () => {
    console.log('Server running on port 3001');
});
