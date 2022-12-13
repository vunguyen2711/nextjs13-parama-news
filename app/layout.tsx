import "../styles/globals.css";
import Header from "./Header";
import Footer from "./Footer";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <Header></Header>
        <div>{children}</div>
        <Footer></Footer>
      </body>
    </html>
  );
}
