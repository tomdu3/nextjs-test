import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO metadata
// This metadata will be used for the entire application
export const metadata = {
  title: "Recipe App",
  description: "Welcome to the Recipe App, where you can add and view recipes!",
  keywords: "recipes, cooking, food, culinary",
  authors: [{ name: "Tom"}],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="text-sm flex justify-center space-x-8 p-20">
          <Link href="/" className="font-bold">
            Home
          </Link>
          <Link href="/add" className="font-bold">
            Add Recipe
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
