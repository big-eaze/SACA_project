import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AboutPage() {


  const images = ["/doc1.jpg", "/doc2.jpg", "/dod3.jpg"];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <div className="font-sans bg-[#fdf6f3] text-[#1e345e] overflow-hidden">

        <div className="relative z-[50]">
          <Header />
        </div>

  
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

     
          <div className="absolute inset-0 bg-[#1e345e]/70 z-[1]" />

  
          <div className="relative z-[2] text-center px-6">
            <h1 className="text-4xl md:text-6xl  text-[#fdf6f3] mb-4 drop-shadow-lg">
              About <span className="text-[#d38a78]">H+ AIDs</span>
            </h1>
            <p className="max-w-2xl mx-auto text-[#fdf6f3]/90 leading-relaxed drop-shadow-md">
              Raising awareness, spreading hope, and empowering communities to end HIV stigma through compassion and education.
            </p>
          </div>

        </section>




        <section className="relative z-10 py-24 px-8 md:px-16 lg:px-32">
          <div className="grid md:grid-cols-2 items-center gap-12">
            <div className="relative">
              <img
                src="/community1.jpg"
                alt="Community outreach"
                className="rounded-lg shadow-lg w-full object-cover"
              />
 
              <div className="absolute -top-8 -left-8 w-40 h-40 bg-[#d38a78]/20 rounded-full blur-3xl" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl  mb-6">
                Our Journey of Awareness
              </h2>
              <p className="text-[#53627c] leading-relaxed mb-4">
                Founded by <span className="font-semibold text-[#d38a78]">Dr.Umar Ishaq Garba</span>, this movement began with a vision to transform how we see and talk about HIV. What started as a small community outreach project has now evolved into a nationwide platform for education, advocacy, and support.
              </p>
              <p className="text-[#53627c] leading-relaxed">
                Through strategic partnerships, outreach programs, and public education campaigns, we’ve reached thousands, empowering individuals to make informed choices and lead stigma-free lives.
              </p>
            </div>
          </div>
        </section>


        <section className="relative bg-[#1e345e] text-[#fdf6f3] py-24 px-8 md:px-16 lg:px-32 overflow-hidden">
        
          <div className="absolute inset-0 bg-gradient-to-br from-[#1e345e]/80 to-[#bf7563]/40 mix-blend-overlay" />

          <div className="relative z-10 grid md:grid-cols-2 gap-10">
            <div className="bg-white/10 backdrop-blur-xl p-10 rounded-3xl shadow-lg border border-white/20">
              <h3 className="text-2xl  mb-3 text-[#fdf6f3]">
                Our Mission
              </h3>
              <p className="text-[#fbeae3] leading-relaxed">
                To foster empathy, reduce stigma, and promote accessible HIV education by empowering local leaders, healthcare professionals, and young advocates to be voices of change.
              </p>
            </div>

            <div className="bg-[#fdf6f3]/10 backdrop-blur-xl p-10 rounded-3xl shadow-lg border border-white/20 translate-y-8 md:translate-y-0 md:-translate-x-8">
              <h3 className="text-2xl  mb-3 text-[#fdf6f3]">
                Our Vision
              </h3>
              <p className="text-[#fbeae3] leading-relaxed">
                A world where HIV is not a sentence but a chapter — where everyone receives compassion, awareness, and access to care without discrimination or fear.
              </p>
            </div>
          </div>
        </section>

    
        <section className="py-24 px-8 md:px-16 lg:px-32 text-center bg-[#fdf6f3]">
          <h2 className="text-3xl md:text-4xl  mb-12">
            Our <span className="text-[#d38a78]">Impact</span> in Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { number: "15K+", label: "Lives Reached" },
              { number: "500+", label: "Workshops Conducted" },
              { number: "80+", label: "Communities Partnered" },
              { number: "100%", label: "Commitment to Change" },
            ].map((item, i) => (
              <div key={i}>
                <h3 className="text-4xl font-bold text-[#1e345e] mb-2">
                  {item.number}
                </h3>
                <p className="text-[#53627c]">{item.label}</p>
              </div>
            ))}
          </div>
        </section>


        <section className="relative bg-gradient-to-br from-[#fdf6f3] via-[#f8ece8] to-[#e6eff7] text-[#1e345e] py-20 text-center px-8">
          <h2 className="text-3xl md:text-4xl  mb-4">
            Be Part of the Change
          </h2>
          <p className="max-w-2xl mx-auto text-[#53627c] mb-8">
            Join our community today — together, we can raise awareness and build a future free of stigma.
          </p>
          <button className="bg-[#d38a78] text-white px-8 py-3 rounded-sm font-medium hover:bg-[#bf7563] transition-all duration-300 shadow-md hover:shadow-lg">
            Get Involved
          </button>
        </section>
        <Footer />
      </div>
    </>

  );
}
