"use client";
import Footer from "@/components/Footer";
import { Montserrat } from "next/font/google";
import Header from "@/components/Header";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import "../globals.css";
const inter = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});

import ToasterContext from "../context/ToastContext";
import { LanguageProvider } from "../context/LanguageContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`dark:bg-black ${inter.className}`}>
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          defaultTheme="light"
        >
          <LanguageProvider>
            {/* <Lines /> */}
            <Header />
            <ToasterContext />
            {children}
            {/* <Footer /> */}
            {/* <ScrollToTop /> */}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
