import express from 'express';
import cors from 'cors';
import customerRoutes from './routes/customer.routes';
import productRoutes from './routes/product.routes';
import saleRoutes from './routes/sale.routes';
import stockRoutes from './routes/stock.routes';
import financialRoutes from './routes/financial.routes';
import supplierRoutes from './routes/supplier.routes';


const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rota padrão (Raiz) para testar se o servidor está funcionando
app.get('/', (req, res) => {
    res.send('Servidor está funcionando!');
  });

// Rotas
app.use('/customer', customerRoutes);
app.use('/product', productRoutes);
app.use('/sale', saleRoutes);
app.use('/stock', stockRoutes);
app.use('/supplier', supplierRoutes);
app.use('/financial', financialRoutes);

export default app;
