"use client"
import { motion } from "framer-motion";
import { Link } from "lucide-react";
import { useState } from "react";
import Image from "next/image"

interface bannerProps {
    Bg1: string | any
    Bg2: string | any
  }
export default function Banner({Bg1,Bg2}:bannerProps) {

    const [position, setPosition] = useState({ x: 0, y: 0 }); // Track mouse position
    const [hasAnimated, setHasAnimated] = useState(false);
    const handleMouseMove = (e: { clientX: any; clientY: any; currentTarget: any }) => {
        const { clientX, clientY, currentTarget } = e;
        const { width, height } = currentTarget.getBoundingClientRect();

        // Normalize movement between -5% to 5%
        const moveX = parseFloat(((clientX / width) * 2 - 1).toFixed(2));
        const moveY = parseFloat(((clientY / height) * 2 - 1).toFixed(2));

        setPosition({ x: moveX, y: moveY });
    };

    return (

        <div className="w-full relative overflow-hidden h-[500px] diagonal-clip hero-gradient" onMouseMove={handleMouseMove}>
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
    )
}

