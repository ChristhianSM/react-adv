import { Props } from "../components/ProductCard";

import { Props as PropsButtons } from "../components/ProductButtons";
import { Props as PropsImg } from "../components/ProductImg";
import { Props as PropsTitle } from "../components/ProductTitle";

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
  Title:    (Props: PropsTitle) => JSX.Element;
  Img:      (Props: PropsImg) => JSX.Element;
  Buttons:  (Props: PropsButtons) => JSX.Element
}