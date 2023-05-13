import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    title: 'Perfume',
    price: 500,
    description: 'FOGG Scent Impressio Eau de Parfum - 100 ml  (For Men)',
  },
  {
    id: 'p2',
    title: 'T-Shirt',
    price: 400,
    description: "Men's Casual Regular Fit T-Shirt for Men & Boys",
  },
  {
    id: 'p3',
    title: 'Denim Jacket',
    price: 1500,
    description: "Men's Regular Fit Long Sleeve Button Down Panel Denim Jacket",
  },
  {
    id: 'p4',
    title: 'Shoes',
    price: 1200,
    description: "Campus Men's North Plus Running Shoes",
  },
];

const Products = props => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(product => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
