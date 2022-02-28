import { productsDummy } from "../dummys/products";

export const productsService = {
  getProducts,
};

function getProducts() {
  return productsDummy.productos;
}
