import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavGpt from "./components/NavGpt";
import Header from "./components/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "CSEC ASTU",
  description:
    "Computer Science and Engineering at Adama Science and Technology University",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased w-full`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
