import '../globals.css';

export const metadata = {
  title: 'Function Store 2023',
  description: 'Built with Next.js, Sanity.io + Tailwind',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
