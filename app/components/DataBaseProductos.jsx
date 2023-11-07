"use client"
import { useState } from "react";
import all_product from "../../public/Assets/all_product";
import Tienda from "../tienda/page";

const DataBaseProductos = () => {
    const [products, setProducts] = useState(all_product)
  return (
    <div>
      

      <Tienda products={products} 
      setProducts={setProducts}
      
      />



    </div>
  )
}

export default DataBaseProductos
