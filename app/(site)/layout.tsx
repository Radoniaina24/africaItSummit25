"use client";
import { Montserrat } from "next/font/google";
import Header from "@/components/Header";
import { ThemeProvider } from "next-themes";
import "../globals.css";
const inter = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});

import ToasterContext from "../context/ToastContext";
import { LanguageProvider } from "../context/LanguageContext";
import { StoreProvider } from "../StoreProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`dark:bg-black ${inter.className}`}>
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P2GHQFPK"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
        <StoreProvider>
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
        </StoreProvider>
      </body>
    </html>
  );
}
