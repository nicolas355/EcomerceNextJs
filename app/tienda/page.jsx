"use client"

import Carrusel from "../components/Carrusel";

import Todos from "../components/Todos";
import Filtrado from "../components/Filtrado";
import all_product from "../../public/Assets/all_product";
import { useState } from "react";

const Tienda = () => {


  const [products, setProducts] = useState(all_product)

  return (
    <>
      <Carrusel />

    

      <Filtrado setProducts={setProducts}
          products={all_product}/>

      <Todos products={products} />
    </>
  );
};

export default Tienda;
