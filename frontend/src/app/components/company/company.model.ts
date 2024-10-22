export interface Company {
  id?: number;
  name: string;
  email: string;
  phone: string;
  cnpj: string;
  address: {
    street: string;
    number: string;
    complement: string;
    neighborhood: string;
    city: string;
    state: string;
    zipcode: string;
  };
}
