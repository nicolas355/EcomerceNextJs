"use client"
import { useState } from "react";
const BotonesIndividual = ({onClick}) => {
      
    const tallas = ['XXS', 'XS', 'S', 'M', 'L'];

    const [BotonActivo, setActiveButton] = useState(null);

    const handleClick = (talla) => {
        onClick(talla)
        setActiveButton(talla);
      };

  return (


 
    <div className="flex w-100 items-center mt-4 space-x-2">
   
   {/* tallas = 'XXS', 'XS', 'S', 'M', 'L' */  }
   
   {tallas.map((talla, index) => (
        <button
          key={index}
          
          className={`btn-talla btn-shadow lg:w-2/3 ${BotonActivo === talla ? 'bg-indigo-600 text-white' : 'bg-transparent'}`}
          onClick={() => handleClick(talla)}
        >
          {talla}
        </button>
      ))}



   
  </div>

 
  )
}

export default BotonesIndividual
