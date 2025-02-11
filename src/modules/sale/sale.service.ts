import { prisma } from '../../prisma';
import { ISale } from './sale.model';

class SaleService {
  async createSale(data: ISale) {
    return await prisma.sale.create({ data });
  }

  async findSaleById(id: number) {
    const sale = await prisma.sale.findUnique({ where: { id } });
    if (!sale) throw new Error('Venda não encontrada');
    return sale;
  }

  async findAllSales(filters: Partial<ISale>) {
    return await prisma.sale.findMany({ where: filters });
  }

  async updateSale(id: number, data: Partial<ISale>) {
    return await prisma.sale.update({ where: { id }, data });
  }

  async deleteSale(id: number) {
    await this.findSaleById(id);
    return await prisma.sale.delete({ where: { id } });
  }
}

export default new SaleService();
