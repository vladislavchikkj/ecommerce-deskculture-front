import { Urbanist } from "next/font/google";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar/navbar";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";
import "@radix-ui/themes/styles.css";

import { ThemeProvider } from "next-themes";
import dynamic from "next/dynamic";
import "./globals.css";
import { Theme } from "@radix-ui/themes";

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
  const CrispWithNoSSR = dynamic(() => import("../components/crisp"));
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
        <CrispWithNoSSR />
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
