
export const metadata = {
  title: 'Valhala-Tienda ',
  description: 'Valhala - Ropa común de calidad superior. Explora nuestro catálogo de moda casual que combina estilo y confort. Encuentra tu próximo atuendo favorito en Valhala.',
 }

import Carrusel from "../components/Carrusel";

import Todos from "../components/Todos";
import Filtrado from "../components/Filtrado";
import all_product from "../../public/Assets/all_product"; 

const Tienda = ({products,setProducts}) => {

  return (
    <>
      <Carrusel />

    

      <Filtrado setProducts={setProducts}
          products={products}/>

      <Todos products={all_product} />
    </>
  );
};

export default Tienda;
