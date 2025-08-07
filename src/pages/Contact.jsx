import MainLayout from "../layouts/MainLayout";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", city: "", state: "", message: "", accepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.accepted) return;
    alert(
      `Your information has been securely shared with the 007Phere team.\nWe’ll call you within 2 working days between 10am to 7pm.`
    );
  };

  return (
    <MainLayout title="Contact Us - 007Phere">
      {/* Hero */}
      <section className="relative h-[30vh] bg-gradient-to-r from-purple-800 to-purple-400 flex items-center justify-center text-white">
        <h1 className="text-4xl font-bold">Contact</h1>
      </section>

      {/* Contact Info */}
      <section className="max-w-4xl mx-auto p-6">
        <h2 className="text-xl font-semibold mb-4">We're Here for You</h2>
        <div className="text-gray-700 text-sm mb-6 space-y-2">
          <p><strong>Address:</strong> SEZ, Sector 126, Noida</p>
          <p><strong>Email:</strong> <a href="mailto:hello@007phere.com" className="text-purple-600">hello@007phere.com</a></p>
          <p><strong>WhatsApp:</strong> <a href="https://wa.me/917827901112" className="text-purple-600">+91-7827901112</a></p>
        </div>

        {/* Contact Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {["name", "email", "phone", "city", "state"].map((f) => (
            <input
              key={f}
              name={f}
              placeholder={f.charAt(0).toUpperCase() + f.slice(1)}
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              onChange={handleChange}
              required
            />
          ))}
          <textarea
            name="message"
            placeholder="Message (optional)"
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
            rows="4"
            onChange={handleChange}
          />
          <label className="block text-sm">
            <input type="checkbox" name="accepted" onChange={handleChange} className="mr-2" />
            I have read the <a href="/terms-of-use" className="text-purple-600">Terms of Use</a> and <a href="/privacy-policy" className="text-purple-600">Privacy Policy</a>.
          </label>
          <button
            type="submit"
            disabled={!formData.accepted}
            className="bg-purple-600 text-white px-6 py-2 rounded disabled:opacity-50"
          >
            Contact Me
          </button>
        </form>
      </section>
    </MainLayout>
  );
}
