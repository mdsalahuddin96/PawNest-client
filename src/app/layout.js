import { Fredoka, Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Providers } from "@/components/Providers";
import { ToastContainer } from "react-toastify";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const fredoka = Fredoka({
  variable: "--fredoka-sans",
  subsets: ["latin"],
});
export const metadata = {
  title: "PawNest",
  description: "PawNest is a modern pets adoption platform. where pet lovers can adopt pets and also post for give adoption",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} h-full antialiased` }
    >
      <body className="min-h-full flex flex-col">
        <Providers>
          <Navbar />
          {children}
        </Providers>
        <ToastContainer />
      </body>
    </html>
  );
}
