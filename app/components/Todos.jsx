import Image from "next/image";
import all_product from "../../public/Assets/all_product.js";
import Link from "next/link";




const Todos = ({products}) => {
  return (
    <div className="mt-6 mx-auto w-full  grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2  lg:w-4/5 lg:grid-cols-4 xl:gap-x-8 mb-5">
      {products.map((allProductos) => (
   
          <div key={allProductos.id} className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-100 lg:w-30">
              <Image
              src={allProductos.image}
              alt={allProductos.name}
              width={500}
              height={500}
              className="h-full w-full   object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 flex flex-col md:flex-row justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <Link href={`/${allProductos.id}`}>
                    <span
                      aria-hidden="true"
                      className="absolute inset-0"
                    ></span>
                    {allProductos.name}
                  </Link>
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {allProductos.category}
                </p>
              </div>
              <p className="text-sm font-medium text-gray-900">
                ${allProductos.new_price}
              </p>
            </div>

            <button
              type="submit"
              className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Ver Producto{" "}
            </button>
          </div>
       
      ))}
    </div>
  );
};

export default Todos;
