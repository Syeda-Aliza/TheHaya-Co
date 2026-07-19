import Header from "../components/Header";
import Footer from "../components/Footer";
import { CartProvider } from "../components/CartContext";
import ClientComponents from "./ClientComponents";
import "./globals.css";

export const metadata = {
  title: "Haya&Co | Premium Hijabs & Modest Wear",
  description: "Elegantly draped, premium hijabs and modest fashion.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <div className="page-wrapper">
            <Header />
            <main className="main-content">{children}</main>
            <Footer />
            <ClientComponents />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
