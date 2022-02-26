import React, { useState, useEffect } from "react";
import { productsService } from "../services/productsService";

export default function ProductsCard() {
  const [products, setProucts] = useState("");
  const [productPrice, setProuctPrice] = useState(0);

  useEffect(() => {
    let resultProductName = productsService.getProducts();
    resultProductName.forEach((product) => {
      setProucts(product);
    });

    setProucts(resultProductName);
    /* setProuctName(resultName.firstName); */
    let resultMoney = productsService.getProducts();
    /* setProuctName(resultMoney.credit); */
    /* let resultName = userService.getUsers();
    setUser(resultName.firstName); */
  }, []);

  /*   productName.forEach((product) => {
    console.log(product.toString());
  }); */
  return (
    <div>
      {products.map((data, index) => {
        return (
          <>
            <div>Acá va la imagen</div>
            <div>
              <h3>nada</h3>
              <span>15151</span>
            </div>
            <button type="button">Agregar al carrito</button>
          </>
        );
      })}
    </div>
  );
}
