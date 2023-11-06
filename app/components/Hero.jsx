import Link from "next/link";
import hero from "../../public/Assets/hero_image.png";

import Image from "next/image";
const Hero = () => {
  return (
    <main className="hero">
      <section className=" max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 justify-center items-center ">
        <div className="titular p-10 md:p-0 text-center md:text-start   mx-auto w-2/2 ">
          <h3 className="text-white text-2xl  md:text-3xl ">¡Bienvenido a VALHALA!</h3>
          <h1 className="text-3xl font-bold md:text-6xl  tracking-tighter lg:w-4/7 text-white">
            Donde tu estilo se convierte en leyenda
          </h1>
        <Link href={'/tienda'}>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-3xl  text-white py-2 px-4 rounded-md shadow-md mt-5 w-60">
          Ver Productos
          </button>
        
        </Link>
        </div>
        <div className="imagen mx-auto hidden md:flex">
          <Image width={500} src={hero} alt="Imagen_hero" className="h-50 w-96"></Image>
        </div>
      </section>
    </main>
  );
};

export default Hero;
