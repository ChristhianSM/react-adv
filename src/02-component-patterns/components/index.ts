import { ProductCard as ProductCardHOC} from "./ProductCard";

import { ProductButtons } from "./ProductButtons";
import { ProductTitle } from "./ProductTitle";
import { ProductImg } from "./ProductImg";
import { ProductCardHOCProps } from "../interfaces/interfaces";

export { ProductButtons } from "./ProductButtons";
export { ProductImg } from "./ProductImg";
export { ProductTitle } from "./ProductTitle";

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Img: ProductImg,
  Buttons: ProductButtons,
})

export default ProductCard;