import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

export default function ContactPage() {
  const images = ["/doc1.jpg", "/doc2.jpg", "/dod3.jpg"];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative font-sans bg-[#fdf6f3] text-[#1e345e] overflow-hidden">
      {/* HEADER */}
      <div className="relative z-30">
        <Header />
      </div>

      {/* HERO WITH SLIDER */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt="Contact background"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out ${index === current ? "opacity-100" : "opacity-0"
              }`}
          />
        ))}
        <div className="absolute inset-0 bg-[#1e345e]/70"></div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl  text-[#fdf6f3] mb-4">
            Get In <span className="text-[#d38a78]">Touch</span>
          </h1>
          <p className="max-w-2xl mx-auto text-[#fdf6f3]/90 leading-relaxed">
            We're here to listen, support, and collaborate. Reach out to us for
            inquiries, partnerships, or support.
          </p>
        </div>
      </section>

      {/* REVAMPED CONTACT SECTION */}
      <section className="relative py-32 px-6 md:px-16 lg:px-32 bg-gradient-to-br from-[#fdf6f3] via-[#fbeae3] to-[#e8eef7] overflow-hidden">
        {/* Floating geometric background accents */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#d38a78]/10 blur-[160px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#1e345e]/10 blur-[160px] rounded-full"></div>

        <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-start">
          {/* LEFT SIDE - Minimalist Contact Info */}
          <div className="relative space-y-10">
            <div>
              <h2 className="text-4xl md:text-5xl  mb-4 text-[#1e345e] leading-tight">
                Let's Build Something Meaningful
              </h2>
              <p className="text-[#53627c] max-w-md">
                Whether it’s an inquiry, partnership, or opportunity to
                collaborate — we’d love to connect and make an impact together.
              </p>
            </div>

            <div className="grid gap-8 text-[#1e345e]/90">
              <div className="group relative">
                <span className="absolute -left-5 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#d38a78] rounded-full"></span>
                <p className="text-sm uppercase tracking-wide text-[#53627c]">
                  Address
                </p>
                <p className="text-lg font-medium">
                  Mypa junction, Bosso,  Niger state.
                </p>
              </div>

              <div className="group relative">
                <span className="absolute -left-5 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#d38a78] rounded-full"></span>
                <p className="text-sm uppercase tracking-wide text-[#53627c]">
                  Email
                </p>
                <p className="text-lg font-medium">
                  contact@hopeinitiative.org
                </p>
              </div>

              <div className="group relative">
                <span className="absolute -left-5 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#d38a78] rounded-full"></span>
                <p className="text-sm uppercase tracking-wide text-[#53627c]">
                  Phone
                </p>
                <p className="text-lg font-medium">+234 809 123 4567</p>
              </div>
            </div>

            <div className="pt-4">
              <h4 className="uppercase text-sm tracking-widest text-[#53627c] mb-4">
                Follow Us
              </h4>
              <div className="flex space-x-6 text-[#d38a78] text-xl">
                <FaInstagram className="w-4 h-4 hover:text-[#bf7563]" />
                <FaX className="w-4 h-4 hover:text-[#bf7563]" />
                <FaFacebook className="w-4 h-4 hover:text-[#bf7563]" />
                <FaLinkedin className="w-4 h-4 hover:text-[#bf7563]" />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Floating Glass Form */}
          <div className="relative bg-white/20 backdrop-blur-3xl border border-white/40 rounded-2xl p-10 shadow-[0_8px_40px_rgba(0,0,0,0.1)]">
            {/* Decorative holographic streak */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-40 animate-shimmer"></div>

            <h3 className="text-3xl  mb-6 text-[#1e345e]">
              Send Us a Message
            </h3>
            <form className="space-y-6 relative z-10">
              <div>
                <label className="block text-sm font-medium mb-2 text-[#1e345e]">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full bg-white/70 backdrop-blur-md border border-[#d1d5db]/60 px-4 py-3 rounded-md focus:outline-none focus:border-[#d38a78] transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-[#1e345e]">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-white/70 backdrop-blur-md border border-[#d1d5db]/60 px-4 py-3 rounded-md focus:outline-none focus:border-[#d38a78] transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-[#1e345e]">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full bg-white/70 backdrop-blur-md border border-[#d1d5db]/60 px-4 py-3 rounded-md focus:outline-none focus:border-[#d38a78] transition"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-[#d38a78] text-white px-8 py-3 rounded-md font-medium hover:bg-[#bf7563] transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
