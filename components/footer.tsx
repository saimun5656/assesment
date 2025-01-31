import Link from "next/link"
import Image from "next/image"
import Icon from "../public/icon.svg"
export default function Footer() {
  return (
    <div className="w-full">
      {/* Top Section with gradient background and upper diagonal shape */}
      <div className="w-full relative overflow-hidden h-[500px] footer-clip ">
        
        {/* <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(-45deg, transparent 25%, rgba(255,255,255,0.1) 50%, transparent 75%)",
            backgroundSize: "200% 200%",
            animation: "gradient 15s ease infinite",
          }}
        /> */}
        <div className="lg:max-w-[85vw] md:max-w-[95vw] mx-auto mt-20 py-20 relative z-10">
          <h1 className="text-white text-2xl md:text-5xl font-bold mb-4">Legacy no longer</h1>
          <p className="text-white text-xl md:text-2xl mb-8">
            Talk to us to find out how we can transform your organisation for the future.
          </p>
          <Link
            href="#"
            className="inline-block bg-[#ff7563] hover:bg-[#ff8573] text-white px-8 py-3 rounded-md text-lg transition-colors"
          >
            Contact Us →
          </Link>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-[#001529] text-white">
        <div className="lg:max-w-[90vw] md:max-w-[95vw] mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            {/* Logo */}
            <div className="mb-4 md:mb-0">
              <Image
                src={Icon}
                alt="ANYTECH"
                width={120}
                height={30}
                className="brightness-0 invert"
              />
            </div>

            {/* Navigation */}
            <nav>
              <ul className="flex flex-wrap gap-6 text-[#4ECDC4] text-sm">
                <li>
                  <Link href="#" className="hover:text-[#5ddbdb] transition-colors">
                    Our Solutions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#5ddbdb] transition-colors">
                    AnyCaaS
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#5ddbdb] transition-colors">
                    AnyBaaS
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#5ddbdb] transition-colors">
                    AnyPaaS
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center text-xs">
            <p className="text-[#4A5568] mb-2 md:mb-0">©2023 All rights reserved. Any Technology Pte Ltd.</p>
            <Link href="#" className="text-[#4ECDC4] hover:text-[#5ddbdb] transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

