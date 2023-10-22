import { Montserrat } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Prisma Project',
  description: 'Next, Prisma, MySQL',
};

export default function RootLayout({ children }) {
  return (
    <html lang='fr'>
      <body
        className={`${montserrat.className} dark:bg-darkthemelight dark:text-white`}
      >
        <Header />
        <main className='container'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
