import Footer from "./componentes/Footer"
import Header from "./componentes/Header"
import Home from "./page"

export const metadata = {
  title: "Meu Shop.com",
  description: "E-commerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <br/>
        <Home/>
        {children}
        <br/>
        <Footer/>
        </body>
    </html>
  );
}
