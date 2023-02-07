import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body>
      <h1>Awesome Todo App</h1> 
      {children}
      </body>
    </html>
  )
}
