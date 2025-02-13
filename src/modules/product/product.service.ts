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
    return await prisma.product.update({
      where: { id }, // Identifica o produto pelo ID
      data: {
        name: data.name,
        brand: data.brand,
        model: data.model,
        type: data.type,
        size: data.size,
        color: data.color,
        price: data.price,
        supplier_id: data.supplier_id,
      },
    });
  }
  

  async deleteProduct(id: number) {
    await this.findProductById(id);
    return await prisma.product.delete({ where: { id } });
  }
}

export default new ProductService();
