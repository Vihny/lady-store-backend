export interface ICustomer {
  id?: number;
  email: string;
  name: string;
  cpf: string;
  phone: string;
  birthdate: string;
  postal_code: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  number: number;
  complement?: string;
}