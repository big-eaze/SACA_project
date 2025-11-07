import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ProgramsPage() {
  const programs = [
    {
      title: "Community Outreach",
      image: "/community-outreach.jpg",
      description:
        "Taking awareness directly to communities through health talks, testing drives, and open discussions to dispel myths and promote empathy.",
    },
    {
      title: "Youth Education",
      image: "/youth-education.jpg",
      description:
        "Engaging young people through workshops and school programs that teach prevention, responsibility, and compassion.",
    },
    {
      title: "Health Support & Counseling",
      image: "/health-support.jpg",
      description:
        "Offering access to trained counselors and medical experts who guide individuals through prevention, testing, and care.",
    },
    {
      title: "Partnership & Advocacy",
      image: "/partnership.jpg",
      description:
        "Collaborating with organizations, government bodies, and activists to shape public perception and health policies on HIV.",
    },
  ];


  const images = ["/doc2.jpg", "/doc1.jpg", "/dod3.jpg"];
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

      {/* HERO */}
      <section className="relative min-h-[80vh] flex items-center justify-center">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt="Contact background"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out ${index === current ? "opacity-100" : "opacity-0"
              }`}
          />
        ))}
        <div className="absolute inset-0 bg-[#1e345e]/70" />

        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl  text-[#fdf6f3] mb-4">
            Our <span className="text-[#d38a78]">Programs</span>
          </h1>
          <p className="max-w-2xl mx-auto text-[#fdf6f3]/90 leading-relaxed">
            Structured initiatives designed to educate, support, and empower individuals and
            communities in the fight against HIV and AIDS.
          </p>
        </div>

      </section>

      {/* PROGRAMS GRID */}
      <section className="relative z-10 py-24 px-8 md:px-16 lg:px-32">
        <h2 className="text-3xl md:text-4xl  text-center mb-16">
          Core Areas of <span className="text-[#d38a78]">Focus</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-16 relative">
          {programs.map((prog, i) => (
            <div
              key={i}
              className={`relative bg-gradient-to-br from-[#ffffff] to-[#f9f2ef] rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 ${i % 2 === 0 ? "md:translate-y-8" : "md:-translate-y-8"
                }`}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={prog.image}
                  alt={prog.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e345e]/70 to-transparent"></div>
              </div>

              {/* Text */}
              <div className="p-8">
                <h3 className="text-2xl  text-[#1e345e] mb-3">
                  {prog.title}
                </h3>
                <p className="text-[#53627c] leading-relaxed">{prog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PARTNERSHIPS / ADVOCACY HIGHLIGHT */}
      <section className="relative bg-[#1e345e] text-[#fdf6f3] py-24 px-8 md:px-16 lg:px-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e345e]/90 to-[#bf7563]/40 mix-blend-overlay" />
        <div className="relative z-10 grid md:grid-cols-2 items-center gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl  mb-4">
              Partnerships & Global Advocacy
            </h2>
            <p className="text-[#fbeae3] leading-relaxed mb-6">
              We believe in the power of collaboration. By working hand in hand with local
              organizations, healthcare providers, and global partners, we amplify impact,
              share knowledge, and strengthen access to essential HIV care and education.
            </p>
            <button className="bg-[#fdf6f3] text-[#bf7563] px-6 py-3 rounded-sm font-medium hover:bg-[#d38a78] hover:text-white transition">
              Learn More
            </button>
          </div>
          <div className="relative">
            <img
              src="/partnership.jpg"
              alt="Partnerships and advocacy"
              className="rounded-3xl shadow-2xl object-cover w-full"
            />
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-[#d38a78]/30 blur-3xl rounded-full" />
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative bg-gradient-to-br from-[#fdf6f3] via-[#f8ece8] to-[#e6eff7] text-[#1e345e] py-20 text-center px-8 overflow-hidden">
        {/* Decorative Blue Overlay for Depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1e345e]/10 via-transparent to-transparent"></div>

        {/* Main Content */}
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl  mb-4">
            Empower Change Through Our Programs
          </h2>
          <p className="max-w-2xl mx-auto text-[#53627c] mb-8 leading-relaxed">
            Join hands with us to bring awareness, provide care, and inspire hope for everyone
            affected by HIV.
          </p>
          <button className="bg-[#d38a78] text-white px-8 py-3 rounded-sm font-medium hover:bg-[#bf7563] transition">
            Get Involved
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#bf7563]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-[#1e345e]/10 rounded-full blur-3xl"></div>
      </section>

      <Footer />
    </div>
  );
}
