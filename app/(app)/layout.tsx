import '@fontsource/inter/100.css';
import '@fontsource/inter/200.css';
import '@fontsource/inter/300.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';
import '@fontsource/inter/900.css';
import '../globals.css';
import { getPages } from '@/sanity/sanity-utils';
import NavBar from './common/NavBar';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pages = await getPages();
  // const router = useRouter();
  return (
    <html lang='en'>
      <body className='font-inter'>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
