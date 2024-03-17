import HeaderComponent from "@/components/HeaderComponent ";
import "./globals.css";
import FooterComponent from "@/components/FooterComponent ";

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
        <HeaderComponent />
        {children}
        {/* footer */}
        <FooterComponent />
      </body>
    </html>
  );
}
