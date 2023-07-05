import "./globals.css";
import { Inter } from "next/font/google";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Redoo Hub",
  description: "A AR/VR Video Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-gray-800 p-4 md:p-0">
          <Head>
            <title>Redoo - Short Videos in Mixed Reality</title>
            <meta
              name="description"
              content="Redoo is the leading AR and VR content creation platform, empowering creators to build immersive experiences."
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <header className="bg-white shadow-md">
            <nav className="container mx-auto py-4 px-6 md:px-0">
              <Link href="/">
                <Image
                  src="/logo_redoo.png"
                  alt="Redoo Logo"
                  width={150}
                  height={50}
                />
              </Link>
            </nav>
          </header>

          <main className="container text-white mx-auto py-8 px-4 md:px-0">
            {children}
          </main>

          <footer className="bg-gray-200 p-4 md:p-0 text-center text-black">
            <p>© 2023 by the Redoo Team.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
