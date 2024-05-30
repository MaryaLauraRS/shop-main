import Footer from "./componentes/Footer"
import Header from "./componentes/Header"
import Main from "./componentes/Main"

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
        <Main/>
        {children}
        <br/>
        <Footer/>
        </body>
    </html>
  );
}
