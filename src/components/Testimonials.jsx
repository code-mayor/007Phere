import { useState } from "react";
import testimonial1 from "../assets/testimonials/testimonial1.jpg";
import testimonial2 from "../assets/testimonials/testimonial2.jpg";
import testimonial3 from "../assets/testimonials/testimonial3.jpg";
import testimonial4 from "../assets/testimonials/testimonial4.jpg";
import testimonial5 from "../assets/testimonials/testimonial5.jpg";

const testimonials = [
  {
    name: "Ravi Mehta",
    title: "“Exceptional Service”",
    text: "The team at 007Phere helped us gain clarity before marriage. Discreet, empathetic, and professional. Highly recommended!",
    image: testimonial1,
  },
  {
    name: "Shruti Nair",
    title: "“Trustworthy & Discreet”",
    text: "Their background checks and follow-ups were precise and non-intrusive. It made us feel safer moving forward.",
    image: testimonial2,
  },
  {
    name: "Anuj Thakur",
    title: "“Saved My Marriage”",
    text: "The counseling support post-marriage helped me and my partner rebuild trust. Thank you, 007Phere!",
    image: testimonial3,
  },
  {
    name: "Kiran Das",
    title: "“Life-Saving Insight”",
    text: "007Phere revealed crucial truths before a major commitment. Professional, polite, and to the point.",
    image: testimonial4,
  },
  {
    name: "Ritika Sengupta",
    title: "“Professional & Kind”",
    text: "Their team operates with genuine care and clarity. Grateful for their guidance during a tough time.",
    image: testimonial5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-purple-50 py-10">
      <h2 className="text-xl font-bold text-center mb-6">Testimonials</h2>

      <div className="relative max-w-4xl mx-auto overflow-hidden">
        {/* Sliding track */}
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="min-w-full flex flex-col md:flex-row items-center gap-6 px-6 py-8"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-24 h-24 rounded-full object-cover"
              />
              <div className="text-center md:text-left">
                <h3 className="text-lg font-semibold mb-1">{t.title}</h3>
                <p className="text-gray-600 text-sm">{t.text}</p>
                <p className="text-xs text-purple-700 mt-2">— {t.name}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4">
          <button onClick={prev} className="text-purple-600 text-2xl">&larr;</button>
        </div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4">
          <button onClick={next} className="text-purple-600 text-2xl">&rarr;</button>
        </div>
      </div>
    </section>
  );
}
