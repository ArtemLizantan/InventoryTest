export interface INavigationItem {
  id: number;
  name: string;
  path: string;
}

export interface INavigationItemProps {
  navigation: INavigationItem[];
}

export interface IOrder {
  id: string;
  title: string;
  date: string;
  description: string;
  products: IProduct[];
}

export interface IProduct {
  id: number;
  serialNumber: number;
  isNew: number;
  photo: string;
  title: string;
  type: string;
  specification: string;
  guarantee: {
    start: string;
    end: string;
  };
  price: {
    value: number;
    symbol: string;
    isDefault: number;
  }[];
  order: number;
  date: string;
}

export interface IProductItemProps {
  title: string;
  type: string;
  startGuarantee: string;
  endGuarantee: string;
  id: number;
  img: string;
  serialNumber: number;
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
  id: number;
  nameOrder: string;
}
