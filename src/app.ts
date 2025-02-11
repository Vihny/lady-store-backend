import express from 'express';
import cors from 'cors';
import customerRoutes from './routes/customer.routes';
import productRoutes from './routes/product.routes';
import saleRoutes from './routes/sale.routes';
import stockRoutes from './routes/stock.routes';

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rota padrão (Raiz) para testar se o servidor está funcionando
app.get('/', (req, res) => {
    res.send('Servidor está funcionando!');
  });
  
// Rotas
app.use('/customers', customerRoutes);
app.use('/products', productRoutes);
app.use('/sales', saleRoutes);
app.use('/stocks', stockRoutes);

export default app;
