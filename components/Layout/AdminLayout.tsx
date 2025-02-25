import "jsvectormap/dist/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/components/Layout/style.css";
import SnackbarProvider from "@/lib/context/SnackbarContext";
import { Metadata } from "next/types";
import { StoreProvider } from "@/app/StoreProvider";
import Loading from "../Admin/Loading/Loading";
import { ThemeProvider } from "next-themes";
export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "Africa It Summit",
    template: "%s | Africa It Summit",
  },
  description: "...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <ThemeProvider
            enableSystem={false}
            attribute="class"
            defaultTheme="light"
          >
            <SnackbarProvider>
              <Loading>{children}</Loading>
            </SnackbarProvider>
          </ThemeProvider>
        </body>
      </html>
    </StoreProvider>
  );
}
