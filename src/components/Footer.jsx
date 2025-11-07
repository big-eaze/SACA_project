import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#d38a78] to-[#bf7563] text-[#fdf6f3] pt-16">

      <div className="max-w-4xl mx-auto text-center px-6">
        <h3 className="text-2xl md:text-3xl  mb-3">
          Stay Informed. Stay Empowered.
        </h3>
        <p className="text-[#fbeae3] max-w-xl mx-auto mb-8">
          Join our community newsletter for awareness tips, events, and inspiring stories of hope.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <input
            type="email"
            placeholder="Enter your email..."
            className="w-full sm:w-[340px] px-5 py-3 rounded-sm outline-none border border-[#fdf6f3]/40 text-[#1e345e] placeholder:text-[#8b6f6a] focus:border-[#fdf6f3] transition"
          />
          <button className="bg-[#fdf6f3] text-[#bf7563] px-6 py-3 rounded-sm font-medium hover:bg-[#1e345e] hover:text-[#fdf6f3] transition w-full sm:w-auto">
            Subscribe
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto my-16 h-px bg-[#fdf6f3]/30"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6 pb-20">

        <div>
          <h4 className="text-2xl  mb-4 text-[#fffaf7]">
            Niger State agency for the control of Aids
          </h4>
          <p className="text-[#fbeae3] leading-relaxed">
            Raising awareness, spreading hope, and empowering communities to end HIV stigma
            through education, compassion, and support.
          </p>
        </div>
        <div>
          <h5 className="font-semibold mb-4 text-[#fffaf7]">Quick Links</h5>
          <ul className="space-y-3 text-[#fbeae3]">
            {["About", "Initiatives", "Resources", "Contact"].map((link, i) => (
              <li
                key={i}
                className="hover:text-[#fffaf7] transition cursor-pointer"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="font-semibold mb-4 text-[#fffaf7]">Get in Touch</h5>
          <p className="text-[#fbeae3]">Email: support@ngsaca.org</p>
          <p className="text-[#fbeae3] mt-2">Phone: +(234) 701 234 5678</p>

          <div className="flex items-center gap-4 mt-6">
            {[
              { icon: <FaFacebookF />, link: "#" },
              { icon: <FaTwitter />, link: "#" },
              { icon: <FaInstagram />, link: "#" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                className="w-9 h-9 flex items-center justify-center rounded-full border border-[#fdf6f3]/40 text-[#fdf6f3] hover:bg-[#fdf6f3] hover:text-[#bf7563] transition"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#1e345e] py-4 text-center text-sm text-[#fdf6f3]/90">
        © {new Date().getFullYear()} SACA | All Rights Reserved
      </div>
    </footer>
  );
}
