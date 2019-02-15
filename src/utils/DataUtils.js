import productsData from "../data/products.json";

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function getTotalAmountProducts(){

    return productsData.length;
}

export async function getProducts(setProducts, category){
    await timeout(3000);

    if(!category){
        setProducts(productsData);
        return;
    } 

    setProducts(productsData
        .filter((product) => product.categories
        .some((cat)=> cat.toUpperCase() === category.toUpperCase())));
}