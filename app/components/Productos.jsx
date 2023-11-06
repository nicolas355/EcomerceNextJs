"use client"
import Image from "next/image";
import all_product from "../../public/Assets/new_collections.js";
import Link from "next/link";


const Productos = () => {



  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Nueva Coleccion
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {all_product.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-100 lg:w-30">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="h-full w-full   object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex-col md:flex-row flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link href={`/${product.id}`}>
               
                        <span aria-hidden="true" className="absolute inset-0"></span>
                        {product.name}
                    
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">${product.new_price}</p>

             


              </div>

              <button type="submit" className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Ver Producto </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Productos;