import express from 'express';
import cors from 'cors';
import customerRoutes from './routes/customer.routes';

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use('/customers', customerRoutes);

export default app;
