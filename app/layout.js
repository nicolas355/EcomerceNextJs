import { Roboto } from 'next/font/google';
import Navegacion from './components/Navegacion';
import Footer from './components/Footer';
import "./globals.css"
import { CartProvider } from './context/CartProvider';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['700'],
  style: ['normal']
});

export default function RootLayout({ children }) {
  return (
    <CartProvider>
    <html>
      <body className={roboto.className}>
        <Navegacion />
        {children}



      <Footer/>
        </body>
      </html>
    </CartProvider>
  );
}