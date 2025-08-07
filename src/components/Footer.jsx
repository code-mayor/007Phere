import { Link } from "react-router-dom";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa";

export default function Footer() {
    const links = [
        ["Home", "/"],
        ["About", "/about"],
        ["Services", "/services"],
        ["Careers", "/careers"],
        ["Contact", "/contact"],
        ["Terms of Use", "/terms-of-use"],
        ["Privacy Policy", "/privacy-policy"],
        ["Data Storage Policy", "/data-storage-policy"],
    ];

    const socials = [
        { icon: <FaFacebookF />, href: "https://facebook.com/007phere" },
        { icon: <FaInstagram />, href: "https://instagram.com/007phere" },
        { icon: <FaLinkedinIn />, href: "https://linkedin.com/company/007phere" },
        { icon: <FaTwitter />, href: "https://twitter.com/007phere" },
        { icon: <FaYoutube />, href: "https://youtube.com/@007phere" },
    ];

    return (
        <footer className="bg-gray-100 text-gray-700 pt-10 pb-6 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4">
                {/* Top: Logo and links */}
                <div className="md:flex md:justify-between md:items-start gap-12">
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-2xl font-bold text-purple-700">007Phere</h2>
                        <p className="text-sm mt-1 text-gray-500">@007Phere</p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm">
                        {links.map(([label, path]) => (
                            <Link key={label} to={path} className="hover:text-purple-600">
                                {label}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Bottom: Social icons and copyright */}
                <div className="flex flex-col md:flex-row justify-between items-center mt-8 gap-4">
                    <div className="flex gap-4 text-gray-500 text-lg">
                        {socials.map((s, idx) => (
                            <a key={idx} href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">
                                {s.icon}
                            </a>
                        ))}
                    </div>
                    <p className="text-xs text-gray-500">© {new Date().getFullYear()} 007Phere. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
