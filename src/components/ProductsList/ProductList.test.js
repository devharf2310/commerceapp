import React from 'react'
import renderer from 'react-test-renderer'
import ProductList from './ProductsList';

const products = [{
    "id": "c9a5c012-6295-48d5-a103-68ca76ff047b",
    "name": "Intelligent Concrete Computer",
    "description": "Omnis veritatis in aliquam aspernatur nulla. Officia quidem qui. Maxime veniam nulla sint qui dolorem qui saepe neque placeat. Magni culpa aut eos molestiae nihil molestias. Quidem consectetur quia quo blanditiis perspiciatis facere dolorem.",
    "price": "752.00",
    "brand": "Gusikowski - Ebert",
    "stock": 44903,
    "photo": "http://lorempixel.com/640/480/technics",
    "categories": ["Services"]
  }];

describe('product list snapshot tests with data', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<ProductList products={products}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

