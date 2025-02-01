"use client"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Icon from "../public/icon.svg"
import Bg1 from "../public/backgrounds/footerbg1.svg";
import Bg2 from "../public/backgrounds/footerbg2.svg";

export default function Footer() {
    const [hasAnimated, setHasAnimated] = useState(false);// State to track if the footer is in view

  const footerRef = useRef(null); // Reference for the footer

  const [position, setPosition] = useState({ x: 0, y: 0 }); // Track mouse position

  // Intersection Observer to detect when the footer comes into view
 useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );
    
    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  // Track mouse position
  const handleMouseMove = (e: { clientX: any; clientY: any; currentTarget: any }) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height } = currentTarget.getBoundingClientRect();

    // Normalize movement between -5% to 5%
    const moveX = parseFloat(((clientX / width) * 2 - 1).toFixed(2));
    const moveY = parseFloat(((clientY / height) * 2 - 1).toFixed(2));

    setPosition({ x: moveX, y: moveY });
  };



  return (
    <div className="w-full">
      {/* Top Section with gradient background and upper diagonal shape */}
      <div className="w-full relative overflow-hidden h-[500px] footer-clip " onMouseMove={handleMouseMove}>
        {/* Left to Right Animation */}
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: hasAnimated ? 0 : "100%" }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={Bg1}
            alt="Left Animated Background"
            layout="fill"
            objectFit="cover"
            className="opacity-60"
            style={{
              transform: `translate3d(${-position.x}%, ${-position.y}%, 0)`,
            }}
          />
        </motion.div>

        {/* Right to Left Animation */}
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: hasAnimated ? 0 : "-100%" }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={Bg2}
            alt="Right Animated Background"
            layout="fill"
            objectFit="cover"
            className="opacity-60"
            style={{
              transform: `translate3d(${position.x}%, ${-position.y}%, 0)`,
            }}
          />
        </motion.div>

        <div className="lg:max-w-[85vw] md:max-w-[95vw] max-w-[88vw] mx-auto mt-20 py-20 relative z-10">
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
      <footer ref={footerRef} className="bg-[#001529] text-white">
        <div className="lg:max-w-[90vw] md:max-w-[95vw] max-w-[88vw] mx-auto px-6 py-6">
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
