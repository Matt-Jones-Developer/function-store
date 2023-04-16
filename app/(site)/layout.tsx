import '@fontsource/inter/100.css';
import '@fontsource/inter/200.css';
import '@fontsource/inter/300.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';
import '@fontsource/inter/900.css';
import '../globals.css';
import NavBar from './common/NavBar';

// master layout component for next13
// head and meta can be found in studio/layout
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='font-inter'>
        <NavBar />
        <main className='main mt-24 md:mt-16'>{children}</main>
      </body>
    </html>
  );
}
