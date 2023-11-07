"use client"
import tienda from '../../public/Assets/tienda.jpg'

import Image from "next/image";
export const Carrusel = () => {
  return (
    <div className="max-w-[95rem] px-10 mx-auto flex items-center justify-between  space-x-4 mb-5 ">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
         
          </div>
          <div className="max-w-xl mb-6 flex justify-center flex-col align-middle my-auto mx-auto w-full ">
            <h2 className="max-w-lg  mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            Descubre tu estilo con nosotros

           
           

              <span className="inline-block text-deep-purple-accent-400">
         
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
            En nuestra tienda, nos apasiona la moda y estamos comprometidos a ayudarte a encontrar tu estilo único. Nuestra amplia selección de prendas de alta calidad y las últimas tendencias 
            </p>
          </div>
          <div>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Saber más
              <svg
                className="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </a>
          </div>
        </div>
        <div className=" items-center hidden md:flex text-center  justify-center -mx-4 lg:pl-8">
          <div className="flex flex-col items-end px-3">
            <Image
              className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
              src={tienda}
              alt="Imagen_carrousel"
              width={500}
            />
            <Image
              className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
              src={tienda}
              width={500}
            />
          </div>
          <div className="px-3">
            <Image
              className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
              src={tienda}
              alt="Imagen_carrousel"
            />
          </div>
        </div>
      </div>
    </div>
  );
};


export default Carrusel