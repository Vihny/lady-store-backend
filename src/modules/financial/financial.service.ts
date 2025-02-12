import { prisma } from '../../prisma';
import { IFinancial } from './financial.model';

class FinancialService {
  // Cria transação financeira
  async createFinancial(data: IFinancial) {
    // Certifique-se de que a venda (sale_id) existe antes de criar a transação financeira
    const saleExists = await prisma.sale.findUnique({
      where: { id: data.sale_id },
    });

    if (!saleExists) {
      throw new Error('Venda não encontrada');
    }

    return await prisma.financial.create({
      data,
    });
  }

  // Busca transação financeira por ID
  async findFinancialById(id: number) {
    const financial = await prisma.financial.findUnique({
      where: { id },
    });

    if (!financial) {
      throw new Error('Transação financeira não encontrada');
    }

    return financial;
  }

  async findAllFinancials(filters: Partial<IFinancial>) {
    return await prisma.financial.findMany({
      where: filters,
    });
  }
  
  // Busca todas as transações financeiras associadas a uma venda
  async findFinancialsBySaleId(saleId: number) {
    const financials = await prisma.financial.findMany({
      where: { sale_id: saleId },
    });

    if (!financials || financials.length === 0) {
      throw new Error('Nenhuma transação financeira encontrada para esta venda');
    }

    return financials;
  }

  // Atualiza transação financeira
  async updateFinancial(id: number, data: Partial<IFinancial>) {
    const financial = await prisma.financial.findUnique({ where: { id } });

    if (!financial) {
      throw new Error('Transação financeira não encontrada');
    }

    return await prisma.financial.update({
      where: { id },
      data,
    });
  }

  // Deleta transação financeira
  async deleteFinancial(id: number) {
    const financial = await prisma.financial.findUnique({ where: { id } });

    if (!financial) {
      throw new Error('Transação financeira não encontrada');
    }

    return await prisma.financial.delete({ where: { id } });
  }
}

export default new FinancialService();
