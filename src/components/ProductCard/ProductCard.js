import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText, Grid, Cell } from "react-md";
import './ProductCard.scss';


const ProductCard = ({product}) => (

    <Card className="md-block-centered">
        <CardTitle
            title={product.name}
            subtitle={`${product.categories.join(", ")} - ${product.brand}`}
        />
        <CardText>
        <Grid>
            <Cell size={4}>
            <center>
                <img alt={product.name} src={product.photo} className="product-image" />
            </center>
            </Cell>
            <Cell size={8}>
                <p>{product.description}</p>
                <p><span className="span-product-detail">Stock:</span> {product.stock}</p>
                <p><span className="span-product-detail">Price:</span> <span className="currency-value">{product.price}</span></p>
            </Cell>
        </Grid>
        </CardText>
    </Card>
);


ProductCard.propTypes = {
    product : PropTypes.shape({name: PropTypes.string.isRequired,
    categories: PropTypes.array.isRequired,
    brand: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired,
    price: PropTypes.string.isRequired
  })};

export default ProductCard;
