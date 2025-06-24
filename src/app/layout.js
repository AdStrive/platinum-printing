import { Inter, Sora, Poppins, Bree_Serif, Inria_Serif } from 'next/font/google';
import Navbar from '@/components/Navbar/Navbar';
import './globals.scss';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

const breeSerif = Bree_Serif({
  subsets: ['latin'],
  weight: ['400'], 
  variable: '--font-bree-serif',
});

const inriaSerif = Inria_Serif({
  subsets: ['latin'],
  weight: ['300', '400', '700'], // Choose available weights
  variable: '--font-inria-serif',
});

export const metadata = {
  title: 'Platinum Printing Solutions',
  description: 'Website for platinum printing solutions.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-transparent">
      <body
        className={`relative flex flex-col justify-between bg-transparent ${inter.variable} font-inter ${poppins.variable} font-poppins ${breeSerif.variable} ${inriaSerif.variable}`}
      >
        <div className="relative h-full ">
          <div className="sticky top-0 z-50">
            <Navbar />
          </div>
          <div className="h-full overflow-y-scroll z-30">{children}</div>
        </div>
      </body>
    </html>
  );
}
