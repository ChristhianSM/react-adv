import {ReactElement} from 'react'

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
}

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  product: Product;
  increaseBy: (value: number) => void;
}

export interface ProductCardHOCProps {
  ({ children, product }: Props) : JSX.Element;
  Title: ({ title }: {title?: string | undefined}) => JSX.Element;
  Img: ({ img }: {img?: string | undefined}) => JSX.Element;
  Buttons : () => JSX.Element
}