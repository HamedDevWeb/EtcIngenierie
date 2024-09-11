import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer.jsx";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "ETCE | INGENIERIE",
  description: "Generated by ETC | INGENIERIE",
};

export default function RootLayout({ children }) {
  return (
    <html lang='fr'>
      <head>
        
        <script src="https://cdn.tailwindcss.com"></script>;
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="bg-blue-300 w-full min-h-screen mx-auto flex flex-col justify-between">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
