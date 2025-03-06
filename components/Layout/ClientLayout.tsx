"use client";
import { Montserrat } from "next/font/google";
import Header from "@/components/Header";
import { ThemeProvider } from "next-themes";
import "@/app/globals.css";
import { LanguageProvider } from "@/app/context/LanguageContext";
import ToasterContext from "@/app/context/ToastContext";
import { StoreProvider } from "@/app/StoreProvider";
import SnackbarProvider from "@/lib/context/SnackbarContext";
import { NextScript } from "next/document";
const inter = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});

export default function ClientLayout({
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
              <SnackbarProvider>
                <Header />
                <ToasterContext />
                {children}
              </SnackbarProvider>
              {/* <Lines /> */}

              {/* <Footer /> */}
              {/* <ScrollToTop /> */}
            </LanguageProvider>
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
