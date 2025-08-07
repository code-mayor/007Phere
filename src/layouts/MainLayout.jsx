import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout({ children, title, description }) {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = title || "007Phere - Matrimonial Support Services";

        const metaDesc = document.querySelector("meta[name='description']");
        if (description && metaDesc) {
            metaDesc.setAttribute("content", description);
        }
    }, [pathname, title, description]);

    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    );
}
