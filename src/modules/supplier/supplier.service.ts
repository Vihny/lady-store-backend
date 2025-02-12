import { prisma } from '../../prisma';
import { ISupplier } from './supplier.model';

class SupplierService {
  // Cria fornecedor
  async createSupplier(data: ISupplier) {
    return await prisma.supplier.create({ data });
  }

  // Busca fornecedor por ID
  async findSupplierById(id: number) {
    const supplier = await prisma.supplier.findUnique({
      where: { id },
    });

    if (!supplier) {
      throw new Error('Fornecedor não encontrado');
    }

    return supplier;
  }

  // Busca todos os fornecedores
  async findAllSuppliers(filters: Partial<ISupplier>) {
    return await prisma.supplier.findMany({ where: filters });
  }

  // Atualiza fornecedor
  async updateSupplier(id: number, data: Partial<ISupplier>) {
    const supplier = await prisma.supplier.findUnique({ where: { id } });

    if (!supplier) {
      throw new Error('Fornecedor não encontrado');
    }

    return await prisma.supplier.update({
      where: { id },
      data,
    });
  }

  // Deleta fornecedor
  async deleteSupplier(id: number) {
    const supplier = await prisma.supplier.findUnique({ where: { id } });

    if (!supplier) {
      throw new Error('Fornecedor não encontrado');
    }

    return await prisma.supplier.delete({ where: { id } });
  }
}

export default new SupplierService();
