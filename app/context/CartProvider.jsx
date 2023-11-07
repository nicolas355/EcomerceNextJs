"use client"
import { useState, createContext } from 'react';
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const [contador, setContador] = useState(0)


{/* añadir producto , esto va a  [id]*/}
  const addToCart = (product) => {

    // si es igual al id que ya esta 
    const productIndex = cart.findIndex((item) => item.id === product.id);
  
   
    if (productIndex !== -1) {
      // el producto ya está en el carrito , aumentamos la cantidad
      const updatedCart = [...cart];
      updatedCart[productIndex].cantidad += 1;
      setCart(updatedCart);
    } else {
      // El producto no está en el carrito, lo agregamos
      setCart((prevCart) => [...prevCart, { ...product, cantidad: 1 }]);
    }
  
    setContador(contador + 1);




  };



  

  const addContador=(numero)=>{



    setContador(numero)
  }
 return (
  <CartContext.Provider value={{ cart,addToCart,setCart,contador,setContador,addContador }}>
    {children}
  </CartContext.Provider>
 );
};