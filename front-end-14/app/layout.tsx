import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";

const lato = Lato({
  weight: ["400", "700", "100", "300", "900"],
  style: ["normal"],
  subsets: ['latin']
});
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StoreProvider>
        <body className={`${lato.className}`}>
            {children}
        </body>
      </StoreProvider>
    </html>
  );
}