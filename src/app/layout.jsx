import { Gabarito } from 'next/font/google';
import Navbar from '@/components/Navbar';
import '@/app/globals.css';

const gabarito = Gabarito({ subsets: ['latin'] });

export const metadata = {
  title: 'animebase',
  description: 'Indonesian Website Anime',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gabarito.className} bg-color-2`} suppressHydrationWarning={true}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
