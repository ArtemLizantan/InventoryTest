export interface INavigationItem {
  id: number;
  name: string;
  path: string;
}

export interface INavigationItemProps {
  navigation: INavigationItem[];
}

export interface IOrder {
  id: string | number;
  title: string;
  date: string;
  description: string;
  products: IProduct[];
}

export interface IProduct {
  id: number;
  serialNumber: number;
  isNew?: number;
  photo?: string;
  title: string;
  type?: string | undefined;
  specification?: string;
  guarantee?: {
    start?: string;
    end?: string;
  };
  price?: {
    value: number;
    symbol: string;
    isDefault: number;
  }[];
  order?: number;
  date?: string;
}

export interface IProductItemProps {
  title: string;
  type: string;
  startGuarantee?: string;
  endGuarantee?: string;
  id: number;
  img?: string;
  serialNumber: number;
  photo?: string;
  orderTitle?: string;
  price: {
    value: number;
    symbol: string;
  }[];
}

export interface IOrderItemProps {
  title: string;
  date: string;
  sum: number;
  products: IProductItemProps[];
  id: number | string;
  nameOrder: string;
  photo: string;
  countProducts: number;
  openProducts: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export interface IOrderProductsProps {
  title: string;
  products: IProduct[];
}

export interface IOrderProductProps {
  id: number;
  photo: string | undefined
  title: string;
}
