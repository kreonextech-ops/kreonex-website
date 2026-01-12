import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeContextProvider } from "@/context/ThemeContext";
import LenisScroll from "@/components/Lenis";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import N8nChat from "@/components/N8nChat"; // Import the wrapper

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
                    
                    {/* The Chat Widget */}
                    <N8nChat />
                    
                </ThemeContextProvider>
            </body>
        </html>
    );
}