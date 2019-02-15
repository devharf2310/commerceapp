import React from "react";
import { Cell } from "react-md";
import ProductCard from '../ProductCard/ProductCard';
import "./ProductsList.scss";

const ProductList = ({ products }) => {
  return (
    <>
      {products &&
        products.map(product => (
          <Cell size={12} key={product.id} >
              <ProductCard product={product}/>
        </Cell>
        ))}
    </>
  );
};

export default ProductList;
