import '../globals.css';
import '@fontsource/inter/100.css';
import '@fontsource/inter/200.css';
import '@fontsource/inter/300.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';
import '@fontsource/inter/900.css';
import NavBar from '../common/NavBar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='font-inter'>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
