import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const blogPosts = [
  {
    title: "Breaking HIV Stigma in Local Communities",
    snippet:
      "Discover how grassroots initiatives are transforming the conversation around HIV and creating supportive environments for individuals.",
    image: "/health-support.jpg",
    date: "Nov 1, 2025",
  },
  {
    title: "Innovations in HIV Prevention",
    snippet:
      "Explore the latest medical advancements and educational strategies helping to prevent HIV transmission worldwide.",
    image: "/community2.jpg",
    date: "Oct 25, 2025",
  },
  {
    title: "Empowering Youth Advocates",
    snippet:
      "Learn how young leaders are shaping a future free of stigma through awareness campaigns and digital outreach.",
    image: "/hiv-awareness.png",
    date: "Oct 18, 2025",
  },
];

const categories = ["All", "Awareness", "Prevention", "Youth", "Research"];

export default function BlogPage() {
  const [current, setCurrent] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const heroImages = ["/doc1.jpg", "/doc2.jpg", "/dod3.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <>
      <div className="font-sans bg-[#fdf6f3] text-[#1e345e] overflow-hidden">
        <Header />

        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          {heroImages.map((src, i) => (
            <img
              key={i}
              src={src}
              alt="Blog Hero"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out ${i === current ? "opacity-100" : "opacity-0"
                }`}
            />
          ))}

          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1c44]/90 via-[#132b63]/70 to-transparent z-10" />
          <div className="absolute top-0 left-0 w-full h-full animate-pulse-slow">
            <div className="absolute w-40 h-40 bg-[#d38a78]/20 blur-3xl rounded-full top-10 left-10"></div>
            <div className="absolute w-48 h-48 bg-[#d38a78]/15 blur-3xl rounded-full bottom-10 right-10"></div>
          </div>

          <div className="relative z-20 text-center px-6">
            <h1 className="text-4xl md:text-6xl text-white font-bold drop-shadow-lg mb-4">
              <span className="text-[#d38a78] font-light block">NGSACA Blog</span>
              Stories & Insights
            </h1>
            <p className="text-[#fdf6f3]/90 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              Explore articles, stories, and innovations driving awareness, education, and stigma-free conversations about HIV worldwide.
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 px-6 md:px-16 lg:px-32 flex flex-wrap justify-center gap-4">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === cat
                  ? "bg-gradient-to-r from-[#d38a78] to-[#bf7563] text-white shadow-lg"
                  : "bg-white/10 text-[#1e345e] border border-white/20 hover:bg-[#d38a78]/20"
                }`}
            >
              {cat}
            </button>
          ))}
        </section>

        {/* Blog Cards Section */}
        <section className="relative z-10 py-16 px-6 md:px-16 lg:px-32">
          <div className="grid md:grid-cols-3 gap-12">
            {blogPosts
              .filter((post) =>
                selectedCategory === "All" ? true : post.tags?.includes(selectedCategory)
              )
              .map((post, i) => (
                <div
                  key={i}
                  className="relative bg-white/10 backdrop-blur-xl p-6 rounded-3xl shadow-lg border border-white/20 hover:shadow-[0_15px_60px_rgba(0,0,0,0.5)] transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 group overflow-hidden"
                >
                  <div className="overflow-hidden rounded-2xl mb-4">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-[#d38a78] transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-black leading-relaxed mb-4 text-sm">{post.snippet}</p>
                  <span className="text-black text-xs">{post.date}</span>

                  {/* Accent Glow */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#d38a78]/20 blur-3xl rounded-full opacity-40 animate-pulse"></div>
                  <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-[#d38a78]/15 blur-3xl rounded-full opacity-30 animate-pulse"></div>
                </div>
              ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="relative bg-[#1e345e] text-[#fdf6f3] py-20 px-8 md:px-16 lg:px-32 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1e345e]/80 to-[#bf7563]/40 mix-blend-overlay"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Want to Contribute?
            </h2>
            <p className="max-w-2xl mx-auto mb-6">
              Share your story, insights, or research to help spread awareness and education about HIV prevention and care.
            </p>
            <button className="bg-gradient-to-r from-[#d38a78] to-[#bf7563] text-white px-8 py-3 rounded-full font-medium hover:scale-105 transition-all duration-300 shadow-lg">
              Submit Your Article
            </button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
