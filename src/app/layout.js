import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

const inter = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "PRANESH",
  description: "Pranesh portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="./favicon.ico" sizes="any" />
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
