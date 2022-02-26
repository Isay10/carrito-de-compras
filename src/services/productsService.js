import { productsDummy } from "../dummys/products";

export const userService = {
  getProfile,
};

async function getProfile() {
  return productsDummy;
}
