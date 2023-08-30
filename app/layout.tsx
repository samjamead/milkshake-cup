import './main.css';
import './globals.css';

import Header from '@/_components/Header';
import Resources from '@/_components/Resources';

export const dynamic = 'force-dynamic';

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
        <main className='bg-background'>
          {children}

          <div className='w-full'>
            <div className='animate-in opacity-0 max-w-4xl mx-auto px-3 text-foreground'>
              <Resources />
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
