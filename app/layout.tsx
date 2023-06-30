import './globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '800'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Wealthup.me',
  description: 'MAKE SMARTER FINANCIAL DECISIONS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
