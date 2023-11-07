import Image from "next/image";
import hero from '../../public/Assets/hero_image.jpg'
  import Link from "next/link";
const Hero = () => {



  return (
    <main className="bg-white  dark:bg-gray-900">
  

    <div className="container px-6 py-16 mx-auto">
      <div className="items-center lg:flex lg:w-3/4 mx-auto">
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg">
            <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
            ¡Bienvenido a 
<span className="text-blue-500"> VALHALA</span>
            </h1>
            <p className="mt-3 text-gray-600 leading-10 lg:text-lg dark:text-gray-400">
            En nuestra tienda, encontrarás una selección cuidadosamente curada de artículos que te transportarán a un lugar donde la calidad y la originalidad son la norma

            </p>
         <Link href='./tienda' >
         <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover-bg-blue-500 focus-outline-none focus-bg-blue-500">
Ver tienda            </button>
         </Link>
          </div>
        </div>

        <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
          <Image className="w-full h-full lg:max-w-3xl" src={hero} alt="Catalogue-pana.svg" />
        </div>
      </div>
    </div>
  </main>
  );
}


export default Hero;
