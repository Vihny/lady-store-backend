import { prisma } from '../../prisma';
import { IStock } from './stock.model';

class StockService {
  async createStock(data: IStock) {
    return await prisma.stock.create({ data });
  }

  async findStockById(id: number) {
    const stock = await prisma.stock.findUnique({ where: { id } });
    if (!stock) throw new Error('Estoque não encontrado');
    return stock;
  }

  async findAllStocks(filters: Partial<IStock>) {
    return await prisma.stock.findMany({ where: filters });
  }

  async updateStock(id: number, data: Partial<IStock>) {
    return await prisma.stock.update({ where: { id }, data });
  }

  async deleteStock(id: number) {
    await this.findStockById(id);
    return await prisma.stock.delete({ where: { id } });
  }
}

export default new StockService();
