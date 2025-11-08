import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function HomePage() {
  const heroImages = ["/doc1.jpg", "/doc2.jpg", "/dod3.jpg"];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#f5f7fa] font-sans overflow-hidden">
      <Header />


      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
        {/* Background Image Slider */}
        {heroImages.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="Doctor promoting HIV awareness"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out ${i === current ? "opacity-100" : "opacity-0"
              }`}
          />
        ))}

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1c44]/90 via-[#132b63]/70 to-transparent" />
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#d38a78]/40 blur-3xl rounded-full opacity-40"></div>

        {/* Hero Content Card */}
        <div className="relative z-20 w-[90%] sm:w-[85%] md:w-auto max-w-4xl px-6 sm:px-8 md:px-12 py-10 sm:py-12 md:py-16 bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_60px_rgba(0,0,0,0.3)] rounded-[2rem] overflow-hidden">

          {/* Accent Glow */}
          <div className="absolute top-0 left-0 w-[4px] sm:w-[6px] h-full bg-gradient-to-b from-[#d38a78] via-[#e1a493] to-transparent rounded-full"></div>

          {/* Subtle Shimmer */}
          <div className="absolute -top-10 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-[#d38a78]/20 blur-3xl rounded-full opacity-50 animate-pulse"></div>

          {/* Inner Text Content */}
          <div className="relative z-10 text-center md:text-left">
            <p className="text-[10px] sm:text-xs md:text-sm font-semibold text-[#fdf6f3]/80 tracking-[0.25em] uppercase mb-3 sm:mb-4">
              NGSACA
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-6xl text-white leading-tight mb-5 sm:mb-6">
              <span className="block text-[#d38a78] font-light mb-1 sm:mb-2">
                Empower. Educate. Erase Stigma.
              </span>
              Together, we build healthier futures.
            </h1>

            <p className="text-[#fdf6f3]/80 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 max-w-md mx-auto md:mx-0">
              A global mission to spread awareness, provide compassionate education, and
              promote HIV prevention through human connection and medical advancement.
            </p>

            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 sm:gap-4">
              <button className="bg-gradient-to-r from-[#d38a78] to-[#bf7563] text-white px-6 sm:px-8 py-3 font-medium rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
                Learn More
              </button>
              <button className="border border-[#fdf6f3]/40 text-[#fdf6f3] px-6 sm:px-8 py-3 rounded-full hover:bg-[#fdf6f3]/10 transition-all">
                Get Involved
              </button>
            </div>
          </div>

          {/* Overlay Shimmer Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-40 mix-blend-overlay"></div>
        </div>

        {/* Bottom Decorative Curve */}
        <div className="absolute bottom-[-60px] left-1/2 -translate-x-1/2 bg-gradient-to-br from-[#f5f7fa] via-[#eef3f8] to-[#dbe3f0] w-[95%] sm:w-[85%] h-16 sm:h-24 rounded-t-[2rem] sm:rounded-t-[3rem]" />
      </section>



      <section className="relative bg-gradient-to-br from-[#f5f7fa] via-[#eef3f8] to-[#dbe3f0] overflow-hidden">

        <div className="absolute top-0 left-0 w-80 h-80 bg-[#d38a78]/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1e345e]/10 blur-3xl rounded-full"></div>

        <div className="relative z-10 py-28 px-6 md:px-16 text-center">
          <div className="max-w-5xl mx-auto space-y-5">
            <p className="text-[#1e345e] uppercase tracking-[0.25em] text-sm font-semibold">
              Our Mission
            </p>
            <h2 className="text-4xl md:text-5xl  text-[#1e345e] leading-snug">
              Empowering communities through <br /> awareness and compassionate care.
            </h2>
            <p className="text-[#53627c] max-w-2xl mx-auto">
              We’re building bridges between medical knowledge and emotional
              support — ensuring everyone has access to trustworthy information,
              testing, and care with dignity.
            </p>
          </div>
        </div>


        <div className="relative z-10 min-h-[90vh] flex flex-col md:flex-row items-center justify-between overflow-hidden px-6 md:px-16 pb-28">

          <div className="relative md:w-1/2 h-[60vh] md:h-[80vh]">
            <img
              src="/hiv-awareness.png"
              alt="HIV awareness education"
              className="w-full h-full object-cover object-center rounded-[2rem]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f2252]/80 via-[#0f2252]/40 to-transparent rounded-[2rem]"></div>
            <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[350px] h-[350px] border-[30px] border-[#d38a78]/20 rounded-full blur-2xl"></div>
          </div>


          <div className="relative md:w-1/2 flex items-center justify-center p-10 md:p-16">
            <div className="absolute top-10 right-16 w-56 h-56 bg-[#d38a78]/30 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 left-10 w-72 h-72 bg-[#1e345e]/20 blur-3xl rounded-full"></div>

            <div className="relative z-10 bg-white/60 backdrop-blur-lg border border-white/30 shadow-[0_8px_60px_rgba(30,52,94,0.2)] rounded-[2rem] p-10 md:p-14 md:-rotate-2 hover:rotate-0 transition-all duration-700">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-[#fefefe]/50 rounded-[2rem]"></div>

              <h2 className="text-4xl md:text-5xl  text-[#1e345e] leading-snug mb-5 relative">
                <span className="block text-[#d38a78] font-light">Education that Empowers.</span>
                Knowledge is the first step to prevention.
              </h2>

              <p className="text-[#46506b] leading-relaxed relative mb-8">
                Our education programs combine medical science and human compassion —
                giving communities the tools to understand, protect, and advocate. Through
                immersive workshops, youth outreach, and visual learning, we reshape
                perception and save lives.
              </p>

              <div className="flex gap-4 relative">
                <button className="bg-gradient-to-r from-[#1e345e] to-[#2b4a86] text-white px-8 py-3 rounded-full shadow-md hover:scale-105 transition-transform duration-300">
                  Explore Programs
                </button>
                <button className="border border-[#d38a78] text-[#d38a78] px-8 py-3 rounded-full hover:bg-[#d38a78] hover:text-white transition-all duration-300">
                  Get Involved
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="relative bg-gradient-to-tr from-[#101c3c] to-[#1a2f61] py-28 px-6 md:px-16 overflow-hidden text-white">
        <div className="absolute top-10 left-10 w-96 h-96 bg-[#d38a78]/20 blur-3xl rounded-full"></div>

        <div className="relative z-10 text-center mb-20">
          <h2 className="text-4xl  mb-4">
            Building Healthier Communities
          </h2>
          <p className="text-[#cdd4e6] max-w-3xl mx-auto">
            Our outreach programs bring hope and support to every doorstep —
            inspiring care, education, and acceptance through community action.
          </p>
        </div>

        <div className="relative z-10 grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              icon: "🤝",
              title: "Community Outreach",
              desc: "Collaborating with NGOs and local leaders to deliver awareness campaigns and free medical checkups.",
            },
            {
              icon: "🩸",
              title: "Free Testing",
              desc: "Encouraging early detection with confidential, judgment-free, and accessible testing programs.",
            },
            {
              icon: "💬",
              title: "Counseling",
              desc: "Providing emotional and mental health support for individuals and families affected by HIV.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="relative bg-white/10 rounded-3xl p-10 text-center backdrop-blur-lg border border-white/20 shadow-md hover:-translate-y-2 hover:shadow-2xl transition-all"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl  mb-3">{item.title}</h3>
              <p className="text-[#cdd4e6] text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative bg-[#f5f7fa] py-28 px-6 md:px-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#d38a78]/10 blur-3xl rounded-full"></div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <p className="text-[#1e345e] uppercase tracking-[0.2em] text-sm font-semibold">
              Our Impact
            </p>
            <h2 className="text-4xl md:text-5xl  text-[#1e345e] mt-4 mb-4">
              Together, we’re changing lives.
            </h2>
            <p className="text-[#53627c] leading-relaxed">
              Each campaign, each story, each life touched — that’s the power of
              awareness. With collective effort, we’re transforming conversations
              around HIV into compassion-driven action.
            </p>
          </div>

          <div className="grid grid-cols-2 rounded-[2rem] overflow-hidden shadow-2xl">
            <div className="bg-gradient-to-br from-[#d38a78] to-[#bf7563] text-white flex flex-col justify-center items-center p-10">
              <h3 className="text-4xl font-semibold">15k+</h3>
              <p className="mt-2 text-sm uppercase tracking-widest">
                People educated
              </p>
            </div>
            <div className="bg-[#1e345e] text-white flex flex-col justify-center items-center p-10">
              <h3 className="text-4xl font-semibold">3k+</h3>
              <p className="mt-2 text-sm uppercase tracking-widest">
                Tests conducted
              </p>
            </div>
            <div className="col-span-2">
              <img
                src="/community-support.png"
                alt="Community HIV awareness program"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-[#f5f7fa] py-32 px-6 md:px-20 overflow-hidden">

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#d38a78]/20 blur-[180px]"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#1e345e]/20 blur-[160px]"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-5xl  text-[#1e345e] mb-4">
            Voices of Change
          </h2>
          <p className="text-[#53627c] max-w-2xl mx-auto">
            Real stories. Real impact. Hear from those whose journeys have been
            transformed through awareness, compassion, and hope.
          </p>
        </div>


        <div className="relative z-10 flex flex-col md:flex-row items-stretch justify-center gap-10 md:gap-6">

          <div className="relative bg-white shadow-xl p-8 rounded-3xl w-full md:w-[320px] z-20 transform md:-rotate-1 hover:rotate-0 hover:scale-[1.03] transition-all duration-500">
            <img
              src="/aisha.jpg"
              alt="Aisha K."
              className="w-16 h-16 rounded-full border-4 border-[#d38a78] mb-4 object-cover"
            />
            <p className="text-[#1e345e] italic mb-3 leading-relaxed">
              “Learning about HIV changed my entire perspective. Knowledge truly saves lives.”
            </p>
            <p className="text-[#d38a78] font-medium">Grace A.</p>
          </div>

          <div className="relative bg-[#1e345e] text-white shadow-2xl p-10 rounded-3xl w-full md:w-[360px] z-30 transform hover:scale-105 transition-transform duration-500">
            <img
              src="/man1.jpg"
              alt="Michael O."
              className="w-20 h-20 rounded-full border-4 border-[#d38a78] mb-4 object-cover"
            />
            <p className="italic mb-3 text-[#fdf6f3] leading-relaxed">
              “Thanks to the program’s outreach, I found strength and support I didn’t know existed.”
            </p>
            <p className="text-[#d38a78] font-semibold">Michael O.</p>

            <div className="absolute -top-6 -right-6 w-16 h-16 bg-[#d38a78]/40 rounded-full blur-xl"></div>
          </div>


          <div className="relative bg-white shadow-xl p-8 rounded-3xl w-full md:w-[320px] z-20 transform md:rotate-1 hover:rotate-0 hover:scale-[1.03] transition-all duration-500">
            <img
              src="/man2.jpg"
              alt="Peter D."
              className="w-16 h-16 rounded-full border-4 border-[#1e345e] mb-4 object-cover"
            />
            <p className="text-[#1e345e] italic mb-3 leading-relaxed">
              “Breaking the stigma starts with open conversations — and this initiative gave us a voice.”
            </p>
            <p className="text-[#d38a78] font-medium">Aisha K.</p>
          </div>
        </div>


        <svg
          className="absolute bottom-0 left-0 w-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#1e345e"
            fillOpacity="1"
            d="M0,224L80,213.3C160,203,320,181,480,176C640,171,800,181,960,176C1120,171,1280,149,1360,138.7L1440,128V320H1360C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320H0Z"
          ></path>
        </svg>
      </section>



      <section className="relative bg-[#0b122a] text-white py-32 px-6 md:px-20 overflow-hidden">

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl  mb-6 leading-tight">
            Empowering <span className="text-[#d38a78]">Awareness</span> Through Knowledge
          </h2>
          <p className="text-[#cdd4e6] max-w-3xl mx-auto leading-relaxed">
            Every conversation begins with understanding. Through our ongoing educational
            programs, outreach campaigns, and partnerships, we’re reshaping how communities
            perceive and respond to HIV — with compassion, clarity, and courage.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
