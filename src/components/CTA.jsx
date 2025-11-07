export default function CTA() {
  return (
    <section className="relative bg-gradient-to-br from-[#fdf6f3] via-[#fbeae3] to-[#e8eef7] py-24 text-center px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-[#1e345e]/10 to-transparent"></div>
      <div className="absolute top-[-60px] left-[-80px] w-[400px] h-[400px] bg-[#d38a78]/20 blur-[140px]"></div>
      <div className="absolute bottom-[-60px] right-[-80px] w-[380px] h-[380px] bg-[#1e345e]/20 blur-[160px]"></div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl  text-[#1e345e] mb-6 leading-tight">
          Together, We Build Healthier Communities
        </h2>
        <p className="text-[#53627c] mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
          Every effort counts. Join hands in spreading awareness, supporting those affected,
          and shaping a future free of stigma and misinformation.
        </p>
        <button className="bg-[#d38a78] text-white px-8 py-3 rounded-sm font-medium hover:bg-[#bf7563] transition-all duration-300 shadow-md hover:shadow-lg">
          Join the Movement
        </button>
      </div>
    </section>
  );
}
