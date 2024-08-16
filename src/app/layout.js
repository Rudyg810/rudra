import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "./internals/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rudra",
  description: "Personal Site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
<Footer/>
      </body>
    </html>
  );
}
