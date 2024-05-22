// import React, { useState, useEffect } from "react";
// import axios from "axios";
import { useGetData } from "../../hooks/UseGetData";

const ProductList = () => {
  // const [products, setProducts] = useState([]);

  const products = useGetData("products")

  return (
    <div className="container mx-auto py-8 bg-blue-500">
      <h1 className="text-5xl font-bold mb-6 ml-[630px] text-white">
        Product List
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products && products.map((product) => (
          <div
            key={product.id}
            className="forcanera bg-white shadow-md rounded-lg overflow-hidden transition duration-700 ease-in-out transform hover:scale-105 cursor-pointer hover:bg-blue-400 hover:text-white flex"
          >
            <div className="forcanera-image w-1/2">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="forcanera-content p-4 w-1/2">
              <h2 className="text-lg font-bold mb-2">{product.title}</h2>
              <p className="mb-4">Subtitle : {product.subtitle}</p>
              <div className="forcanera-details">
                <div>
                  <p>Size: {product.size}</p>
                  <p>Color: {product.color}</p>
                </div>
                <div>
                  <p>Rate: {product.rate}</p>
                </div>
              </div>
              <p className="mb-4">{product.description}</p>
              <p className="text-2xl font-bold text-green-600">
                ${product.price.toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
