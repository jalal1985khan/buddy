import { ThemeModeScript } from "flowbite-react";
import Header from "@/components/Header/page";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <ThemeModeScript />
      </head>

      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
