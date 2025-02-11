import { prisma } from '../../prisma';
import { IProduct } from './product.model';

class ProductService {
  async createProduct(data: IProduct) {
    return await prisma.product.create({ data });
  }

  async findProductById(id: number) {
    const product = await prisma.product.findUnique({ where: { id } });
    if (!product) throw new Error('Produto não encontrado');
    return product;
  }

  async findAllProducts(filters: Partial<IProduct>) {
    return await prisma.product.findMany({ where: filters });
  }

  async updateProduct(id: number, data: Partial<IProduct>) {
    return await prisma.product.update({ where: { id }, data });
  }

  async deleteProduct(id: number) {
    await this.findProductById(id);
    return await prisma.product.delete({ where: { id } });
  }
}

export default new ProductService();
