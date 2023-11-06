

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 ">
    <div className="container mx-auto flex flex-wrap justify-between items-center">
      <p className="text-sm text-gray-400"> Valhala - Todos los derechos reservados &copy; {new Date().getFullYear()}</p>
      <ul className="flex space-x-4">
        <li><a href="#" className="text-gray-400 hover:text-white">Acerca de nosotros</a></li>
        <li><a href="#" className="text-gray-400 hover:text-white">Términos de servicio</a></li>
        <li><a href="#" className="text-gray-400 hover:text-white">Política de privacidad</a></li>
      </ul>
    </div>
  </footer>
  )
}

export default Footer
