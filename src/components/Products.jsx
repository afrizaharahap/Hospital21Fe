import React, { useEffect, useState } from "react";
import axios from "axios";

function Products(props) {
  const [products, setPoducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      //const result = await axios("http://localhost:5000/api/doctors");
      const result = await axios("https://localhost:7239/api/Products");
      setPoducts(result.data);
    }
    getProducts();
  });
  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.item_cd}>{product.item_descs}</li>
        ))}
      </ul>
    </div>
  );
}
export default Products;
