import type { Metadata } from "next";
import {geistMono, geistSans, jet} from './fonts';
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Food Delivery",
  description: "Ready to Fill Your Cravings!!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className={"w-screen h-screen bg-white text-white relative " + jet.className}>
            <div className="w-full h-full relative bg-gradient-to-br from-gray-800 via-gray-900 to-gray-950">
              <div className="absolute z-10 inset-0 bg-gradient-to-r from-white/5 to-transparent backdrop-blur-xl">
              </div>
                <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-20 p-8 text-white">
                  <Navbar />
                  {children}
                </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
