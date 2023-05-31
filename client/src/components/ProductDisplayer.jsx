import React from "react";
import ProductCard from "./ProductCard";

// pequeno objeto que simuila resultado de llamar API con productos
const ProductDisplayer = () => {
  const products = [
    {
      title: "Mouse XI4",
      category: "Mouse",
      description: "Description of Product 1",
      image:
        "https://imageio.forbes.com/specials-images/imageserve/63d4ff54c30a4889814c550c/Keychron-M3/960x0.jpg?format=jpg&width=960",
      price: 10.99,
    },
    {
      title: "HEADSET U.U",
      category: "headsets",
      description: "Description of Product 2",
      image:
        "https://assets2.razerzone.com/images/pnx.assets/eacc83c0643ed2da8c9e98968f8aa215/headset-landingpg-500x500-barracuda.jpg",
      price: 19.99,
    },
  ];

  return (
    <div>
      {/* Array mapeado por producto una Card */}
      {products.map((prod) => (
        <ProductCard prod={prod} />
      ))}
    </div>
  );
};

export default ProductDisplayer;
