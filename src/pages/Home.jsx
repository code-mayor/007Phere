import MainLayout from "../layouts/MainLayout";
import { useState } from "react";
import bgCheck from "../assets/services/basic-bg-check.jpg";
import lifestyle from "../assets/services/lifestyle-audit.jpg";
import financial from "../assets/services/financial.jpg";
import surveillance from "../assets/services/surveillance.jpg";
import Testimonials from "../components/Testimonials";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", city: "", state: "", message: "", accepted: false,
  });

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!formData.accepted) return;
    alert(`Thanks ${formData.name}, we’ll contact you within 2 working days.`);
  };

  const services = [
    { title: "Background Check", image: bgCheck },
    { title: "Lifestyle Audit", image: lifestyle },
    { title: "Asset Investigation", image: financial },
    { title: "Surveillance", image: surveillance }
  ];

  return (
    <MainLayout title="Home - 007Phere">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[100vh] bg-black text-white flex items-center justify-center">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover opacity-80"
          autoPlay
          muted
          loop
          playsInline
          src={`${import.meta.env.BASE_URL}public/videos/hero.mp4`}
        />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Walk into a Blissful Marriage</h1>
          <p className="text-lg mt-2">Where trust meets truth — 007Phere.</p>
        </div>
      </section>

      {/* Description */}
      <section className="max-w-4xl mx-auto p-6 text-center">
        <h2 className="text-2xl font-semibold mb-2">Trust, Transparency & Truth</h2>
        <p className="text-gray-600">
          007Phere is a pioneering service redefining matrimonial support — combining due diligence, discretion, and emotional insight for pre- and post-nuptial clarity.
        </p>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto p-6">
        <h2 className="text-xl font-bold mb-4">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white rounded shadow-sm hover:shadow-lg transition-all p-4 text-center">
              <img src={service.image} alt={service.title} className="mb-2 h-32 w-full object-cover rounded" />
              <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
              <button className="text-purple-600 text-sm hover:translate-x-1 transition">→</button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Contact Us */}
      <section className="max-w-3xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-2">Get In Touch</h2>
        <p className="text-sm mb-4 text-gray-500">Share your details and we'll get back to you soon.</p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {["name", "email", "phone", "city", "state"].map((f) => (
            <input key={f} name={f} placeholder={f.charAt(0).toUpperCase() + f.slice(1)} className="w-full border p-2" onChange={handleChange} required />
          ))}
          <textarea name="message" placeholder="Message (optional)" className="w-full border p-2" rows="4" onChange={handleChange} />
          <label className="block text-sm">
            <input type="checkbox" name="accepted" onChange={handleChange} /> I have read the <a href="/terms-of-use" className="text-purple-600">Terms</a> & <a href="/privacy-policy" className="text-purple-600">Privacy</a>.
          </label>
          <button type="submit" disabled={!formData.accepted} className="bg-purple-600 text-white px-4 py-2 rounded disabled:opacity-50">
            Contact Me
          </button>
        </form>
      </section>
    </MainLayout>
  );
}
