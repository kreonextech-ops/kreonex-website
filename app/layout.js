import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeContextProvider } from "@/context/ThemeContext";
import LenisScroll from "@/components/Lenis";
import Navbar from "@/components/Navbar"; // Make sure this is imported
import Footer from "@/components/Footer"; // Make sure this is imported

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export const metadata = {
    title: "Kreonex Technologies",
    description: "Innovating for Business & Education.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={poppins.className}>
                <ThemeContextProvider>
                    <LenisScroll />
                    <Navbar />
                    {children}
                    <Footer />
                </ThemeContextProvider>
            </body>
        </html>
    );
}