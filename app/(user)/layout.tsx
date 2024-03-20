import HeaderComponent from "@/components/navbar/HeaderComponent ";
import "../globals.css";
import FooterComponent from "@/components/FooterComponent ";
import { Suspense } from "react";
import Loading from "./loading";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="/website/css/uicons-so" rel="stylesheet" />
      </head>
      <body>
        {/* header */}
        <aside>
          <HeaderComponent />
        </aside>
        <main>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </main>
        {/* footer */}
        <FooterComponent />
      </body>
    </html>
  );
}
