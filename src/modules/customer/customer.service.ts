import { prisma } from '../../prisma';
import { ICustomer } from './customer.model';

// verifica e cria cliente no banco de dados 
class CustomerService {
  async createCustomer(data: ICustomer) {
    const existingCustomer = await prisma.customer.findFirst({
      where: { OR: [{ cpf: data.cpf }, { email: data.email }] },
    });

    if (existingCustomer) {
      throw new Error('Cliente já existe!');
    }

    return await prisma.customer.create({ data });
  }

  async findCustomerById(id: number) {
    const customer = await prisma.customer.findUnique({
      where: { id },
    });

    if (!customer) {
      throw new Error('Cliente não encontrado');
    }

    return customer;
  }

  async findAllCustomers(filters: Partial<ICustomer>) {
    return await prisma.customer.findMany({ where: filters });
  }

  async updateCustomer(id: number, data: Partial<ICustomer>) {
    const existingCustomer = await prisma.customer.findFirst({
      where: { OR: [{ cpf: data.cpf }, { email: data.email }] },
    });

    if (existingCustomer && existingCustomer.id !== id) {
      throw new Error('CPF ou E-mail já em uso por outro cliente');
    }

    return await prisma.customer.update({
      where: { id },
      data,
    });
  }

  async deleteCustomer(id: number) {
    const customer = await prisma.customer.findUnique({ where: { id } });

    if (!customer) {
      throw new Error('Cliente não encontrado');
    }

    return await prisma.customer.delete({ where: { id } });
  }
}

export default new CustomerService();
