export interface Product {
   id: string;
   name: string;
   description: string;
   image_url: string;
   slug: string;
   price: number;
   created_at: string;
}

export interface CreditCard {
   number: string;
   name: string;
   expiration_month: number;
   expiration_year: number;
   cvv: string;
}

export enum OrderStatus {
   Approved = 'approved',
   Pending = 'pending',
}

export interface OrderItem {
   product: Product;
   quantity: number;
   price: number;
}

export interface Order {
   id: string;
   credit_card: Omit<CreditCard, "cvv" | "name">;
   items: OrderItem[];
   status: OrderStatus;
}

export const products: Product[] = [
   {
      id: 'uuid-1',
      name: 'produto',
      description: 'muito',
      price: 50.50,
      image_url: 'https://source.unsplash.com/random?product',
      slug: 'produto-teste',
      created_at: '2021-06-06T00:00:00'
   },
   {
      id: 'uuid-2',
      name: 'produto2',
      description: 'mt',
      price: 500.50,
      image_url: 'https://source.unsplash.com/random?product',
      slug: 'produto-teste-1',
      created_at: '2021-06-06T00:00:00'
   }
]