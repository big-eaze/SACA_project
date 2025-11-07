import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CTA from "../components/CTA";

export default function ResourcesPage() {
  const resources = [
    {
      title: "Understanding HIV Prevention",
      category: "Educational Guide",
      description:
        "Comprehensive overview of prevention methods, PrEP usage, and safe practices for individuals and partners.",
      link: "#",
    },
    {
      title: "2025 Global HIV Awareness Report",
      category: "Research & Reports",
      description:
        "An annual summary of the global fight against HIV, including data trends, breakthroughs, and challenges.",
      link: "#",
    },
    {
      title: "Living with Hope: Real Stories",
      category: "Community Stories",
      description:
        "Powerful testimonies from individuals who overcame stigma, built resilience, and now inspire others.",
      link: "#",
    },
    {
      title: "Find a Testing Center Near You",
      category: "Health Access",
      description:
        "Locate verified clinics, testing centers, and health outreach programs across various regions.",
      link: "#",
    },
  ];

  const categories = [
    {
      title: "Educational Guides",
      icon: "📘",
      color: "from-[#fdf6f3] to-[#fbeae3]",
    },
    {
      title: "Research & Reports",
      icon: "📊",
      color: "from-[#eaf1fb] to-[#dbe5f1]",
    },
    {
      title: "Community Stories",
      icon: "💬",
      color: "from-[#fdeceb] to-[#f9d5ce]",
    },
    {
      title: "Testing & Support",
      icon: "🏥",
      color: "from-[#f2f6ff] to-[#e8eef7]",
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
      <Header />
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
            Explore <span className="text-[#d38a78]">Resources</span>
          </h1>
          <p className="max-w-2xl mx-auto text-[#fdf6f3]/90 leading-relaxed">
            Discover verified information, stories, and tools that empower individuals and
            communities in the journey to end HIV stigma and promote awareness.
          </p>
        </div>

      </section>

      <section className="relative z-10 py-24 px-8 md:px-16 lg:px-32 text-center overflow-hidden">
        <h2 className="text-3xl md:text-4xl  mb-20 tracking-wide">
          Explore Our <span className="text-[#d38a78]">Categories</span>
        </h2>

        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {categories.map((cat, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden p-[2px] rounded-none bg-gradient-to-br ${cat.color} transition-all duration-500 hover:scale-105`}
            >
  
              <div className="relative bg-[#fdf6f3]/80 backdrop-blur-xl text-left h-full flex flex-col justify-between p-8 transition-all duration-500 group-hover:bg-[#ffffff]/90 group-hover:backdrop-blur-2xl">
       
                <div className="absolute top-0 right-0 w-0 h-0 border-l-[60px] border-b-[60px] border-l-transparent border-b-[#d38a78]/20"></div>

                <div className="z-10 relative">
                  <div className="text-5xl mb-6 text-[#d38a78]">{cat.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-[#1e345e]">
                    {cat.title}
                  </h3>
                  <p className="text-[#53627c] text-sm leading-relaxed">
                    Dive into insightful articles, stories, and expert perspectives
                    within this category.
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#d38a78] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>


        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#fbeae3]/40 via-transparent to-[#e8eef7]/50"></div>
        <div className="absolute top-20 -left-32 w-64 h-64 bg-[#d38a78]/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 -right-32 w-64 h-64 bg-[#1e345e]/10 blur-3xl rounded-full"></div>
      </section>

      <section className="relative z-10 py-24 px-8 md:px-16 lg:px-32 bg-[#eaf1fb]/40">
        <h2 className="text-3xl md:text-4xl  text-center mb-16">
          Featured <span className="text-[#d38a78]">Resources</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {resources.map((res, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <h4 className="text-[#d38a78] font-semibold text-sm uppercase mb-2">
                {res.category}
              </h4>
              <h3 className="text-xl  mb-3">{res.title}</h3>
              <p className="text-[#53627c] text-sm leading-relaxed mb-4">
                {res.description}
              </p>
              <a
                href={res.link}
                className="text-[#1e345e] font-medium hover:text-[#d38a78] transition"
              >
                Read More →
              </a>
            </div>
          ))}
        </div>
      </section>

      <CTA />

      <Footer />
    </div>
  );
}
