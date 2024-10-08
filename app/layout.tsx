import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import ThemeProvider  from "./theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anuj's Portfolio",
  description: "Modern & Minimal JS Mastery Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/" sizes="any" />
      </head>
      <body className={`${inter.className} text-white`} >
       
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      
      </body>
    </html>
  );
}