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
        className=" inset-x-0 z-20 w-full border-b border-gray-100 bg-white/80 backdrop-blur dark:border-gray-700/30 dark:bg-gray-900/80"
      >
        <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
          <div className="relative flex flex-wrap items-center justify-between gap-6 lg:gap-0 lg:py-4">
            <div className="relative z-20 flex w-full justify-between md:px-0 lg:w-max">
              <a
                href="/"
                aria-label="logo"
                className="flex items-center space-x-2"
              >
                <Image alt="logo" src={logo}></Image>
              </a>
            </div>

            <div
              id="navlinks"
              className="  top-full left-0 z-20 w-full origin-top-right  flex-col flex-wrap justify-end gap-6 rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10   dark:border-gray-700 dark:bg-gray-800 dark:shadow-none   flex lg:w-auto lg:translate-y-0 lg:scale-100 lg:flex-row lg:items-center lg:gap-0 lg:border-none lg:p-0 lg:shadow-none lg:peer-checked:translate-y-0   "
            >
              <ul className=" items-center text-base justify-between font-medium flex ">
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
                    <Image alt="Carrito" width={50} height={50} src={cart} />
                    <span className="rounded-full px-1 hover:cursor-pointer  bg-red-500 text-sm  z-10 text-white absolute top-0 right-0">
                      {" "}
                      {contador}{" "}
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
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
