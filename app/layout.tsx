import { Urbanist } from "next/font/google";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar/navbar";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";

import { ThemeProvider } from "next-themes";
import Scrollbars from "react-custom-scrollbars-2";
import "./globals.css";

const font = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "Desk Culture | Shop",
  description:
    "Create a workspace that epitomizes your refined preferences while igniting your drive for productivity.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
        <ToastProvider />
        <ModalProvider />
        <Navbar />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange>
          <div className="pt-20">{children}</div>
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
