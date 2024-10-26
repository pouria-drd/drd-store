import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

const geistSans = localFont({
    src: "./fonts/GeistVF/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});

const geistMono = localFont({
    src: "./fonts/GeistMonoVF/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

const vazir = localFont({
    src: "./fonts/Vazir/Vazir-Regular-FD.woff",
    variable: "--font-vazir",
    weight: "100 900",
});

const iranYekanX = localFont({
    src: "./fonts/IRANYekanX/IRANYekanX-Regular.woff",
    variable: "--font-yekanx",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "DRD Store",
    description: "DRD Store, an online digital store for DRD products",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fa-IR">
            <body
                className={`${geistSans.variable} ${geistMono.variable}
                ${vazir.variable} ${iranYekanX.variable} antialiased 
                font-[family-name:var(--font-geist-sans), var(--font-vazir), var(--font-yekanx)]`}>
                {children}
            </body>
        </html>
    );
}
