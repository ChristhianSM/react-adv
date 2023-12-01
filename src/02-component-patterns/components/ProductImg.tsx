import {useContext} from 'react'
import noImage from '../assets/no-image.jpg';
import { ProductContext } from './ProductCard';
import styles  from '../styles/styles.module.css';

export const ProductImg = ({img = ''}) => {
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
    <img className={styles.productImg} src={showImg} alt="Product Image" />
  )
}
