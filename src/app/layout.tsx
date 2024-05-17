import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import background from ".//MCOCBackground.jpeg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "School Shoes for Kids 2024",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-cover h-screen bg-[url('.//MCOCBackground.jpeg')] min-h-72" >
          
        {/* Top bar */}
        <div className="bg-green-500 min-w-full h-[35px]">
          <h1 className="pt-1 flex justify-center text-white">Mission Community Outreach Center: School Shoes for Kids</h1>
        </div>
        {children}
        </body>
    </html>
  );
}
