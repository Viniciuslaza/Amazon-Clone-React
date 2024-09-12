import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { callApi } from "../utils/CallApi";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getProduct = () => {
    callApi(`data/products.json`).then((productResults) => {
      setProduct(productResults[id]);
    });
  };

  useEffect(() => {
    getProduct();
  }, [getProduct]);

  if (!product?.title) return <h1>Loading</h1>;
  return product && <div>{product.title}</div>;
};

export default ProductPage;
