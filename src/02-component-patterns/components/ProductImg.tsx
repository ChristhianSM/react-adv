import {useContext, CSSProperties} from 'react'
import noImage from '../assets/no-image.jpg';
import { ProductContext } from './ProductCard';
import styles  from '../styles/styles.module.css';

export interface Props {
  img?: string | undefined,
  className?: string;
  style?: CSSProperties; 
}

export const ProductImg = ({img, className, style}: Props) => {
  const {product} = useContext(ProductContext);

  let showImg = '';
  if (img) {
    showImg = img;
  }else if (product.img) {
    showImg = product.img;
  }else{
    showImg = noImage;
  }

  return (
    <img 
      className={`${styles.productImg} ${className}`}
      style={style}
      src={showImg}
      alt="Product Image" 
    />
  )
}
