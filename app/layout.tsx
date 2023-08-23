import './globals.css';
import './main.css';

import Header from '@/components/Header';

export const metadata = {
  title: 'The Milkshake Cup',
  description: 'The Village, Leeds, Saturday 2nd September 2023',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='bg-background'>
        <Header />
        <main className='min-h-screen bg-background flex flex-col items-center'>
          {children}
        </main>
      </body>
    </html>
  );
}
