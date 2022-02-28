import React, { useEffect, useState } from "react";
import CellphoneImage from "../assets/images/image-product.jpg";
import { productsService } from "../services/productsService";
import "./ProductCard.css";

export default function ProductsCard() {
  const [products, setProucts] = useState([]);

  useEffect(() => {
    let resultProductName = productsService.getProducts();
    setProucts(resultProductName);
  }, []);

  return (
    <div className="product-container">
      {products.map((data, index) => {
        return (
          <div key={data.id} className="card-container">
            <img src={CellphoneImage} alt="imagen-producto" />
            <div className="card-data">
              <h3 className="product-title">{data.title}</h3>
              <h5 className="product-price">
                <span style={{ color: "purple" }}>Precio:</span> ${data.price}
              </h5>
            </div>
            <div className="card-button">
              {" "}
              <span className="button-text">Agregar al carrito</span>{" "}
            </div>
          </div>
        );
      })}
    </div>
  );
}
