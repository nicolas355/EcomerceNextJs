"use client";
import product from "../../public/Assets/all_product";
import Image from "next/image";
import "../styles/productoIndividual.css";
import BotonesIndividual from "../components/BotonesIndividual.jsx";

import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartProvider";

const page = ({ params }) => {
 
  const [size, setSize] = useState(null)

  const { addToCart } = useContext(CartContext);
  const [alerta, setAlerta] = useState(null);

  const idComoString = params.id;
  const idComoNumero = parseInt(idComoString); // pasamos de string a numero el parametro
  const productoEncontrado = product.find(
    (producto) => producto.id === idComoNumero
  ); // verifico si el producto es igual al id de la url


  const handleSize=(size)=>{
    setSize(size)
  }


  const handleAddToCart = (products) => {
      
    products.map((product) => {

      if (product.id != idComoNumero) {
        return null;
      } else {
  
        addToCart({...product,size})
     
     

        setTimeout(() => {
          setAlerta(() => (
            <div className="bg-green-500  text-center  text-white px-4 py-2 rounded-lg shadow-md">
              Producto Añadido Correctamente!
            </div>
          ));
        }, 300);

        setTimeout(() => {
          setAlerta(null);
        }, 2000);
      }
    });
  };

  return (
    <>
      {alerta}
      {productoEncontrado && productoEncontrado.image  && (
      <section key={productoEncontrado.id}>

        <div className="flex justify-between md:flex-row   flex-col   flex-wrap mx-auto p-4 w-3/4 border-b border-gray-300">
     
          <div className="flex flex-col w-3/2 mx-auto pr-4">
           
            <div className="mb-4">
     
              <Image src={productoEncontrado.image} alt="Producto_individual_tienda" width={500} height={500} ></Image>
            </div>
         
            <div className="flex space-x-4">

              <Image src={productoEncontrado.image}
                alt="Producto_individual_tienda_pequeño"
                width={100}
                height={100}>

              </Image>
          
              <Image src={productoEncontrado.image}
                alt="Producto_individual_tienda_pequeño"
                width={100}
                height={100}></Image>
            </div>
          </div>

   
          <div className="w-1/2">
    
            <h2 className="text-2xl font-bold">{productoEncontrado.name}</h2>
            <p className="text-lg font-semibold">
              ${productoEncontrado.new_price}
            </p>

    
            <div className="flex items-center mt-2">
              <div className="flex items-center space-x-1">
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span>({product.rating})</span>
              </div>
              <span className="ml-4">Tamaño: {product.size}</span>
            </div>

     
            <BotonesIndividual onClick={handleSize} />
     
            <button
              onClick={() => handleAddToCart(product)}
              type="submit"
              className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Añadir al Carrito{" "}
            </button>


            <h3 className="text-lg font-semibold mt-4">Descripción</h3>
            <p className="mt-2">{product.description}</p>


            <div className="border-t my-4"></div>

        
            <h3 className="text-lg font-semibold">Fabricación</h3>
            <ul className="list-disc pl-4 mt-2">
              <li>Los mejores materiales</li>
              <li>La mejor calidad</li>
              <li>Otra característica del producto</li>
              <li>Otra característica del producto</li>
            </ul>
          </div>
        </div>
      </section>






      

)}

<div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-xl px-4 md:px-8">
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">

      <div>
        <div className="rounded-lg border p-4">
          <h2 className="mb-3 text-lg font-bold text-gray-800 lg:text-xl">Reseñas de Clientes</h2>

          <div className="mb-0.5 flex items-center gap-2">
            <div className="-ml-1 flex gap-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <span className="text-sm font-semibold">4/5</span>
          </div>
          <span className="block text-sm text-gray-500">Basado en 27 reseñas</span>
          <div className="my-5 flex flex-col gap-2 border-t border-b py-5">
            {/* Reseñas simuladas */}
            <div className="flex gap-2 items-center">
              <div className="text-yellow-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4l1.141 2.426L15.293 7h1.736c.87 0 1.286 1.037.673 1.548l-1.569 1.292.63 2.75c.258 1.13-.276 1.423-.78 1.869L13 15.437V20l-1.926-1.146c-.504-.446-1.038-.738-.78-1.869l.63-2.75-1.569-1.292c-.613-.511-.197-1.548.673-1.548h1.736l2.152-.574L12 4z" />
                </svg>
              </div>
              <div className="text-sm font-semibold">5/5</div>
              <span className="text-gray-500">Excelente calidad de ropa</span>
            </div>
            <div className="flex gap-2 items-center">
              <div className="text-yellow-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4l1.141 2.426L15.293 7h1.736c.87 0 1.286 1.037.673 1.548l-1.569 1.292.63 2.75c.258 1.13-.276 1.423-.78 1.869L13 15.437V20l-1.926-1.146c-.504-.446-1.038-.738-.78-1.869l.63-2.75-1.569-1.292c-.613-.511-.197-1.548.673-1.548h1.736l2.152-.574L12 4z" />
                </svg>
              </div>
              <div className="text-sm font-semibold">4/5</div>
              <span className="text-gray-500">Gran variedad de ropa de moda</span>
            </div>
          </div>
          <a href="#" className="block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active-bg-gray-200 md:px-8 md:py-3 md:text-base">Escribir una reseña</a>
        </div>
      </div>

      <div className="lg:col-span-2">
        <div className="border-b pb-4 md:pb-6">
          <h2 className="text-lg font-bold text-gray-800 lg:text-xl">Reseñas Principales</h2>
        </div>
        <div className="divide-y">

          <div className="flex flex-col gap-3 py-4 md:py-8">
            <div>
              <span className="block text-sm font-bold">Ana López</span>
              <span className="block text-sm text-gray-500">5 de septiembre de 2021</span>
            </div>
            <div className="flex gap-2 items-center">
              <div className="text-yellow-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4l1.141 2.426L15.293 7h1.736c.87 0 1.286 1.037.673 1.548l-1.569 1.292.63 2.75c.258 1.13-.276 1.423-.78 1.869L13 15.437V20l-1.926-1.146c-.504-.446-1.038-.738-.78-1.869l.63-2.75-1.569-1.292c-.613-.511-.197-1.548.673-1.548h1.736l2.152-.574L12 4z" />
                </svg>
              </div>
              <div className="text-sm font-semibold">4/5</div>
            </div>
            <p className="text-gray-600">Esta tienda tiene una excelente selección de ropa y la calidad es inigualable. ¡Altamente recomendada!</p>
          </div>

          <div className="flex flex-col gap-3 py-4 md:py-8">
            <div>
              <span className="block text-sm font-bold">Carlos Rodríguez</span>
              <span className="block text-sm text-gray-500">12 de agosto de 2021</span>
            </div>
            <div className="flex gap-2 items-center">
              <div className="text-yellow-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4l1.141 2.426L15.293 7h1.736c.87 0 1.286 1.037.673 1.548l-1.569 1.292.63 2.75c.258 1.13-.276 1.423-.78 1.869L13 15.437V20l-1.926-1.146c-.504-.446-1.038-.738-.78-1.869l.63-2.75-1.569-1.292c-.613-.511-.197-1.548.673-1.548h1.736l2.152-.574L12 4z" />
                </svg>
              </div>
              <div className="text-sm font-semibold">5/5</div>
            </div>
            <p className="text-gray-600">Compré ropa de esta tienda y estoy muy satisfecho con la calidad y el servicio al cliente. ¡Volveré a comprar aquí!</p>
          </div>

          <div className="flex flex-col gap-3 py-4 md:py-8">
            <div>
              <span className="block text-sm font-bold">Isabel Gómez</span>
              <span className="block text-sm text-gray-500">24 de julio de 2021</span>
            </div>
            <div className="flex gap-2 items-center">
              <div className="text-yellow-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4l1.141 2.426L15.293 7h1.736c.87 0 1.286 1.037.673 1.548l-1.569 1.292.63 2.75c.258 1.13-.276 1.423-.78 1.869L13 15.437V20l-1.926-1.146c-.504-.446-1.038-.738-.78-1.869l.63-2.75-1.569-1.292c-.613-.511-.197-1.548.673-1.548h1.736l2.152-.574L12 4z" />
                </svg>
              </div>
              <div className="text-sm font-semibold">5/5</div>
            </div>
            <p className="text-gray-600">¡Me encanta la moda de esta tienda! Siempre encuentro ropa de calidad a precios asequibles.</p>
          </div>

        </div>
      </div>

    </div>
  </div>
</div>
    </>
  );
};

export default page;
