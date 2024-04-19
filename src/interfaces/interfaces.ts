import { MouseEventHandler } from "react";

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
  type: string | undefined;
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
  sum?: number;
  products: IProduct[];
  id: number | string;
  nameOrder?: string | undefined;
  photo?: string | undefined;
  countProducts?: number | undefined;
  openProducts: boolean;
  isOpen?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  calculateOrderPrice?: (index: number) => number;
  handleDeleteClick?: () => void | undefined;
}

export interface IOrderProductsProps {
  title: string;
  products: IProduct[];
}

export interface IOrderProductProps {
  id: number;
  photo: string | undefined;
  title: string;
  serialNumber: string | number;
  inPopup?: boolean;
  handleDeleteClick?: () => void;
}

export interface IPopupProps {
  closePopup: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  title: string;
  onClickDelete: React.MouseEventHandler<HTMLButtonElement>;
  onClickRemove: React.MouseEventHandler<HTMLButtonElement>;
  isPopupOpen: boolean;
}
