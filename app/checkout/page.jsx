
"use client"

import React, { useContext } from 'react';
import { CartContext } from '../context/CartProvider';
import Image from 'next/image';
import cruz from '../../public/Assets/x.png'


const Chekout = () => {
  const { cart,setCart,setContador,contador  } = useContext(CartContext);


  const deleteProduct=(item)=>{
    const newCart = cart.filter(product =>(product.id != item));
    const productToDelete = cart.find(product => product.id === item);

    setCart(newCart)

    /* restar segun la cantidad de productos que haya en el cart , si es mayor a una resta segun la cantidad , sino (1 cantidad) solamente resta 1 solo  */ 
    if (productToDelete && productToDelete.cantidad > 1) {
      setContador(contador - productToDelete.cantidad);
    } else {
      setContador(contador - 1);
    }
  


  }





  return (

      <>
<section className="grid grid-cols-1 md:grid-cols-2 w-full mx-auto">
  {/* Barra lateral con resumen del pedido */}
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4 text-center">Resumen del pedido</h2>
    <div className="overflow-x-auto">
      <table className="table-auto bg-red w-full">
        <thead className="bg-red-50">
          <tr className="hidden md:table-row">
            <th className="px-4 md:w-1/4 lg:px-8 py-2">Nombre</th>
            <th className="px-4 md:w-1/6 lg:px-8 py-2">Precio</th>
            <th className="px-4 md:w-1/6 lg:px-8 py-2">Cantidad</th>
            <th className="px-4 md:w-1/6 lg:px-8 py-2">Talla</th>
            <th className="px-4 md:w-1/6 lg:px-8 py-2">Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td className="border px-4 md:w-1/4 py-2">
                <div className="flex items-center">
                  <div className="w-16 h-16 mr-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      className="imagen rounded-full"
                      width={70}
                      height={70}
                    />
                  </div>
                  <div>
                    <p className="font-bold text-xs">{item.name}</p>
                  </div>
                </div>
              </td>
              <td className="border md:w-1/6 px-4 py-2">${item.new_price}</td>
              <td className="border md:w-1/6 px-4 py-2">{item.cantidad}</td>
              <td className="border md:w-1/6 px-4 py-2">{item.size}</td>
              <td className="border md:w-1/6 px-4 py-2">${item.new_price}</td>
              <td className="border w-1/6 px-4 py-2">
                <Image
                  onClick={() => deleteProduct(item.id)}
                  className="hover:cursor-pointer cruz cruz-img"
                  width={40}
                  height={40}
                  alt="Cruz"
                  src={cruz}

                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  {/* Formulario de pago */}
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">Detalles de pago</h2>
    <form>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700">Nombre</label>
        <input
          id="name"
          type="text"
          className="w-full py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="cardNumber" className="block text-gray-700">Número de tarjeta</label>
        <input
          id="cardNumber"
          type="text"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="expiryDate" className="block text-gray-700">Fecha de vencimiento</label>
        <input
          id="expiryDate"
          type="text"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="cvv" className="block text-gray-700">CVV</label>
        <input
          id="cvv"
          type="text"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Completar compra
      </button>
    </form>
  </div>
</section>

<div className="bg-gray-200 w-full py-6 mt-14">
  <div className="px-4 md:px-8">
    <div className="rounded-lg p-4 sm:p-8">
      <div className="mb-4 sm:mb-8">
        <h2 className="text-center text-xl font-bold text-indigo-500 sm:text-2xl lg:text-3xl">
          Newsletter
        </h2>
        <p className="text-center text-gray-500">Obtenga las últimas actualizaciones</p>
      </div>
      <form className="mb-3 mx-auto flex w-full max-w-md gap-2 sm:mb-5">
        <input
          placeholder="Email"
          className="bg-gray-white w-full flex-1 rounded border border-gray-300 px-3 py-2 text-gray-800 placeholder-gray-400 outline-none ring-indigo-300 transition duration-100 focus:ring"
        />

        <button className="inline-block rounded bg-indigo-500 px-8 py-2 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
          Enviar
        </button>
      </form>
    </div>
  </div>
</div>
      </>





  )
}

export default Chekout
