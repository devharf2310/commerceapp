import React, { useEffect, useState } from "react";
import ProductsList from "../../components/ProductsList/ProductsList";
import { getProducts, getTotalAmountProducts } from "../../utils/DataUtils";
import { CircularProgress, Grid } from "react-md";
import './Products.scss';

const Products = ({match}) => {
  const [products, setProducts] = useState([]);
  const [progress, setProgress] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    setProgress(undefined);
    await getProducts(setProducts, match.params.category);
    setProgress(null);
  }

  return (
    <Grid>
      {progress !== null && <CircularProgress value={progress}/>}
      {progress === null &&
      <p>
          Showing <span className="span-quantity-products">{products.length}</span> -
          Hidden <span className="span-quantity-products">{getTotalAmountProducts() - products.length}</span>
      </p>}
      <ProductsList products={products} />
    </Grid>
  );
};

export default Products;


