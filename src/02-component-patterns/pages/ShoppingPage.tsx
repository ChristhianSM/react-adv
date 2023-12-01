import ProductCard, { ProductButtons, ProductImg, ProductTitle } from '../components';

const product = {
  id: '1',
  title: "Coffee Mud - Card",
  img: './coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage Route</h1>
      <hr />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>
      <ProductCard product={product}>
        <ProductCard.Img />
        <ProductCard.Title title='Hola Mundo'/>
        <ProductCard.Buttons />
      </ProductCard>
      <ProductCard product={product}>
        <ProductImg />
        <ProductTitle />
        <ProductButtons />
      </ProductCard>
      </div>
    </div>
  )
}
