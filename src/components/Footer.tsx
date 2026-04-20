import Image from "next/image";
import { Star } from "lucide-react";

const columns = [
  {
    heading: "Features",
    links: ["Sintra X", "Brain AI", "Power-ups"],
  },
  {
    heading: "Resources",
    links: ["Blog", "Case studies", "Book a Demo"],
  },
  {
    heading: "About Us",
    links: ["Become an Affiliate", "Careers", "How we compare"],
  },
  {
    heading: "Support",
    links: ["Help center", "Contact", "Plans and Payments"],
  },
  {
    heading: "Legal",
    links: [
      "Privacy policy",
      "Terms and conditions",
      "Refund policy",
      "Money-Back Guarantee",
      "Fair use policy",
      "Other policies",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-[7%] py-20">

        {/* Main row */}
        <div className="flex flex-col lg:flex-row gap-16">

          {/* Left — logo + copyright */}
          <div className="flex-shrink-0 w-56">
            <a href="#" className="inline-block mb-6">
              <Image
                src="/logoBlue.svg"
                alt="Sintra"
                width={110}
                height={34}
                priority
              />
            </a>
            <p className="text-[14px] text-gray-400 leading-[1.7]">
              Copyright © 2026<br />
              PlayOS, Inc.<br />
              All rights reserved
            </p>
          </div>

          {/* Right — nav columns */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10">
            {columns.map((col) => (
              <div key={col.heading}>
                <h4 className="text-[14px] font-semibold text-gray-900 mb-5">
                  {col.heading}
                </h4>
                <ul className="space-y-3.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-[14px] text-gray-400 hover:text-gray-700 transition-colors leading-snug block"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Trustpilot */}
        <div className="mt-16">
          <div className="flex items-center gap-2 mb-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#00b67a">
              <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/>
            </svg>
            <span className="text-[15px] font-semibold text-gray-800">Trustpilot</span>
          </div>
          <div className="flex items-center gap-1 mb-2">
            {[1,2,3,4].map((i) => (
              <div key={i} className="w-9 h-9 bg-[#00b67a] flex items-center justify-center">
                <Star size={18} fill="white" className="text-white" />
              </div>
            ))}
            <div className="w-9 h-9 bg-gray-200 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[#00b67a]" style={{ width: "50%" }} />
              <Star size={18} fill="white" className="text-white relative z-10" />
            </div>
          </div>
          <p className="text-[13px] text-gray-500">
            TrustScore <strong className="text-gray-800">4.5</strong>
            {" | "}
            <a href="#" className="underline text-gray-800 font-medium">8,331 reviews</a>
          </p>
        </div>

      </div>
    </footer>
  );
}
