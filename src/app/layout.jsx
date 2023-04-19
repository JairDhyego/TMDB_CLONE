import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Providers from '@/components/Providers';
import SearchBox from '@/components/SearchBox';
import '../styles/globals.css';

export const metadata = {
  title: 'Create App TMDB',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <Navbar />
          <SearchBox />
          {children}
        </Providers>
      </body>
    </html>
  );
}