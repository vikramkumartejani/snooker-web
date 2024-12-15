"use client";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Head from "next/head";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);
  return (
    <html lang="en">
      <head>
        <Head>
          <title>Cue Keeper</title>
          <meta name="description" content="With our integrated CRM, project management, collaboration and invoicing capabilities, you can manage your business in one secure platform." />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
