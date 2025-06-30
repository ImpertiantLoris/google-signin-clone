import './globals.css';

export const metadata = {
  title: 'Google Sign In Clone',
  description: 'For assignment demo',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#202124] text-white">{children}</body>
    </html>
  );
}
