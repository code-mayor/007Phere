import { useState } from "react";
import { FiX } from "react-icons/fi";

export default function LoginModal({ onClose, onLogin }) {
    const [form, setForm] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.email === "user@007phere.com" && form.password === "password123") {
            onLogin({ name: "007 Agent", email: form.email });
            onClose();
        } else {
            setError("Invalid credentials");
        }
    };

    return (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center">
            <div className="bg-white w-full max-w-sm p-6 rounded shadow relative">
                <button className="absolute top-3 right-3" onClick={onClose}>
                    <FiX className="text-xl text-gray-500" />
                </button>
                <h2 className="text-xl font-semibold mb-4">Sign In</h2>
                {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        className="w-full border px-3 py-2 rounded text-sm"
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                        className="w-full border px-3 py-2 rounded text-sm"
                        onChange={handleChange}
                    />
                    <button
                        type="submit"
                        className="bg-purple-600 text-white px-4 py-2 rounded w-full"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}
