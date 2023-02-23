import './globals.css';
export default function RootLayout({ children }) {
  return (
    <html>
      <head></head>
      <body>
        <h1 className="text-center mt-20 font-bold font-sans font text-6xl">
        Bilal Todo App
        </h1 >
        {children}
      </body>
    </html>
  );
}
