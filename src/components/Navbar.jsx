import { useEffect, useState, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FiSearch, FiUser, FiX } from "react-icons/fi";
import LoginModal from "../modals/LoginModal";

export default function Navbar({ isLoggedIn = false, user = { name: "User" }, onLogin = () => { } }) {
    const [scrolled, setScrolled] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showUserModal, setShowUserModal] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);

    const searchRef = useRef(null);
    const userRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 0);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleClick = (e) => {
            if (!searchRef.current?.contains(e.target)) setShowSearch(false);
            if (!userRef.current?.contains(e.target)) setShowUserModal(false);
        };
        const handleKey = (e) => {
            if (e.key !== "Tab") {
                setShowSearch(false);
                setShowUserModal(false);
            }
        };
        document.addEventListener("mousedown", handleClick);
        document.addEventListener("keydown", handleKey);
        return () => {
            document.removeEventListener("mousedown", handleClick);
            document.removeEventListener("keydown", handleKey);
        };
    }, []);

    const handleSearch = (e) => {
        if (e.key === "Enter" && query) {
            navigate(`/search?q=${encodeURIComponent(query)}`);
        } else if (query.length > 1) {
            setSuggestions([
                "Background Check",
                "Counseling Support",
                "Surveillance Services",
                "Legal Advisory",
            ]);
        } else {
            setSuggestions([]);
        }
    };

    const textColor = scrolled ? "text-gray-800" : "text-white";

    return (
        <>
            <nav className={`fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md ${scrolled ? "bg-white/80 shadow-md" : "bg-transparent"}`}>
                <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
                    {/* Logo */}
                    <div className={`text-xl font-bold text-purple-700 ${textColor}`}>007Phere</div>

                    {/* Navigation Links */}
                    <div className={`hidden md:flex gap-6 ${textColor}`}>
                        {[
                            ["Home", "/"],
                            ["About", "/about"],
                            ["Services", "/services"],
                            ["Contact", "/contact"],
                        ].map(([name, path]) => (
                            <Link
                                key={name}
                                to={path}
                                className={`transition ${location.pathname === path
                                    ? "font-semibold underline"
                                    : "hover:opacity-80"
                                    }`}
                            >
                                {name}
                            </Link>
                        ))}
                    </div>

                    {/* Search + Login/Avatar */}
                    <div className="flex items-center gap-4">
                        {/* Search */}
                        <div ref={searchRef} className="relative">
                            <button onClick={() => setShowSearch((s) => !s)}>
                                <FiSearch className={`text-xl ${textColor}`} />
                            </button>
                            {showSearch && (
                                <div className="absolute right-0 top-8 w-64 bg-white/60 border border-purple-300 rounded-md p-2">
                                    <input
                                        type="text"
                                        value={query}
                                        onChange={(e) => setQuery(e.target.value)}
                                        onKeyDown={handleSearch}
                                        placeholder="Search..."
                                        className="w-full px-2 py-1 bg-white/90 rounded text-sm border border-gray-300 focus:outline-none focus:ring"
                                    />
                                    {query && (
                                        <button onClick={() => setQuery("")}>
                                            <FiX className="absolute top-3 right-3 text-gray-500" />
                                        </button>
                                    )}
                                    {suggestions.length > 0 && (
                                        <ul className="bg-white/90 mt-2 rounded shadow text-sm">
                                            {suggestions.map((s, i) => (
                                                <li key={i} className="px-3 py-1 hover:bg-purple-100 cursor-pointer">
                                                    {s}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* User or Login */}
                        <div ref={userRef} className="relative">
                            {isLoggedIn ? (
                                <button onClick={() => setShowUserModal((m) => !m)}>
                                    <FiUser className={`text-xl ${textColor}`} />
                                </button>
                            ) : (
                                <button
                                    onClick={() => setShowLoginModal(true)}
                                    className={`text-sm font-medium ${scrolled ? "text-purple-700" : "text-white"}`}
                                >
                                    Log In
                                </button>
                            )}
                            {showUserModal && (
                                <div className="absolute right-0 top-8 w-48 bg-white/90 rounded shadow-md text-sm">
                                    <div className="px-4 py-2 font-medium">{user.name}</div>
                                    <Link to="/account" className="block px-4 py-2 hover:bg-gray-100">
                                        Account Settings
                                    </Link>
                                    <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                                        Log Out
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

            {showLoginModal && (
                <LoginModal onClose={() => setShowLoginModal(false)} onLogin={onLogin} />
            )}
        </>
    );
}
