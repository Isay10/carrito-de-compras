import React, { useState, useEffect } from "react";
import { productsService } from "../services/productsService";

export default function ProductsCard() {
  const [products, setProucts] = useState([]);

  useEffect(() => {
    let resultProductName = productsService.getProducts();
    setProucts(resultProductName);
  }, []);

  return (
    <div>
      {products.map((data, index) => {
        return (
          <div key={data.id}>
            <div>Acá va la imagen</div>
            <div>
              <h3>{data.title}</h3>
              <span>{data.price}</span>
            </div>
            <button type="button">Agregar al carrito</button>
          </div>
        );
      })}
    </div>
  );
}
