import { ThemeModeScript } from "flowbite-react";
import Script from "next/script";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <ThemeModeScript />
      </head>
      <body>{children}</body>
    </html>
  );
}
