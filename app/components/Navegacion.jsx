"use client";
import Link from "next/link";
import logo from "../../public/Assets/logo.png";
import cart from "../../public/Assets/cart_icon.png";
import Image from "next/image";
import { useContext } from "react";
import { CartContext } from "../context/CartProvider";

const Navegacion = () => {
  const { contador } = useContext(CartContext);

  return (
    <div>
      <nav
        id="navbar"
        className=" inset-x-0 z-20 w-full border-b  "
      >
        <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
          <div className="relative flex flex-wrap items-center justify-between gap-6 lg:gap-0 lg:py-4">
            <div className="relative  z-20 flex w-full justify-between md:px-0 lg:w-max">
            
                <Image className="mx-auto" alt="logo" width={180} height={150} src={logo}></Image>
          
            </div>

           
              <ul className="mx-auto lg:mx-0 items-center text-base justify-between font-medium flex ">
                <li className="">
                  <Link className="text-lg m-4" href={"/"}>
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link className="text-lg m-4" href={"/tienda"}>
                    Tienda
                  </Link>
                </li>
                <li>
                  <Link className="text-lg m-4" href={"/about"}>
                    About
                  </Link>
                </li>

                <li className="relative">
                  <Link href={"/checkout"}>
                    <Image className="carrito" alt="Carrito" width={50} height={50} src={cart} />
                    <span className="rounded-full px-1 hover:cursor-pointer  bg-red-500 text-sm  z-10 text-white absolute top-0 right-0">
                      {" "}
                      {contador}{" "}
                    </span>
                  </Link>
                </li>
              </ul>
          
          </div>
        </div>
      </nav>

      <ul>
        <li></li>

        <li></li>

        <li></li>
      </ul>
    </div>
  );
};

export default Navegacion;
