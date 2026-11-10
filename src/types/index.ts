export interface Product {
  id: string;
  name: string;
  category: string;
  brand: string;
  gender: 'Masculino' | 'Feminino' | 'Unissex';
  price: number;
  volume: string;
  description: string;
  highlights?: string[];
  notes?: {
    top?: string;
    heart?: string;
    base?: string;
  };
  olfactoryFamily?: string;
  concentration?: string;
  image: string;
  tag?: string;
  isPricePending?: boolean;
  isDecant?: boolean;
  originalPrice?: number; // preço normal, preenchido só enquanto o produto está em promoção
  soldOut?: boolean; // true = produto esgotado (aparece no catálogo, mas não pode ser comprado)
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export type PaymentMethod = 'pix' | 'credit' | 'debit';

export interface AddressInfo {
  cep: string;
  street: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
  reference?: string;
}

export interface CustomerOrderInfo {
  customerName: string;
  customerPhone: string;
  address: AddressInfo;
  paymentMethod: PaymentMethod;
  notes?: string;
}