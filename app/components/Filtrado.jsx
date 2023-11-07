"use client";

import { useState } from "react";


const rangeMin = 0;
const rangeMax = 500;



const Filtrado = ({setProducts,products}) => {
  const [rango, setRango] = useState(rangeMax);
  const [select, setSelect] = useState(null)
  
  const handleSelect=(e)=>{
    const categoriaSelect=e.target.value

    
    if (categoriaSelect === "") {
    
      setSelect(null);
      setProducts(products);
    } else {
    
      const productosFiltradosPorSelect = products.filter((item) => item.category === categoriaSelect);
      setSelect(productosFiltradosPorSelect);
      setProducts(productosFiltradosPorSelect);
    }

    

  }

  const handleChangeMinPrecio = (e) => {
    setRango(e.target.value);
    const productosFiltrados = products.filter(
      (product) => product.new_price <= rango
    );

    setProducts(productosFiltrados)


  };

  


  return (
      <>

      <div className=" w-full  sm:w-3/6   mx-auto p-5 mb-5">

 <h2 className="text-center text-2xl sm:text-4xl mt-20">Todos los Productos</h2>
      </div>
      
    <section className="max-w-[85rem] md:px-10  md:flex-row mx-auto flex items-center flex-col-reverse justify-between  space-x-4">
     
      <div className="w-2/3 lg:w-1/3">
        <label htmlFor="range" className="block text-gray-700">
          Precio
        </label>
        <input
          id="range"
          onChange={handleChangeMinPrecio}
          type="range"
          min={rangeMin}
          value={rango}
          max={rangeMax}
          className="w-full"
          suppressHydrationWarning={true}
        />
        <span>  $ {rango}  </span>
      </div>

      {/* Select con categorías */}
      <div className="w-2/3 lg:w-1/3">
        <label htmlFor="category" className="block text-gray-700">
          Categoría
        </label>
        <select
          id="category"
          onChange={handleSelect}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="">Selecciona una categoría</option>
          <option value="men">Hombre</option>
          <option value="kid">Niños</option>
          <option value="mujeres">Mujer</option>
        </select>
      </div>
    </section>
      
      </>
  );
};

export default Filtrado;
