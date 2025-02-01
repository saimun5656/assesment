"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Cloud, Database, Zap } from "lucide-react"
import Counter from "@/components/counter"
import Carrosel from "@/components/carrosel"
import bg2 from "../public/backgrounds/WaveLinesDesktop2.svg"
import bg3 from "../public/backgrounds/WaveLinesDesktop3.svg"
import bg4 from "../public/backgrounds/section2.svg"
import cardbg from "../public/cardbackground.svg"
import cardforbg from "../public/cardforeground.png"
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";
import { use, useState } from "react"
import Partners from "@/components/partners"


const features = [
  {
    title: "Full-suite solutions",
    description:
      "Experience the ease of integration with our comprehensive banking and payment solutions with our computational tools of analytics.",
    icon: Zap,
  },
  {
    title: "Simplify the complex",
    description:
      "Simplify complex processes and streamline operations by leveraging the power of AI, Blockchain, Cloud Computing, and Big Data.",
    icon: Cloud,
  },
  {
    title: "Cutting-edge tech",
    description: "We continually pioneer cutting-edge specialized fintech solutions for our customers' success.",
    icon: Database,
  },
]

const stats = [
  { value: ">20", label: "Years of experience" },
  { value: "40+", label: "Financial institutions" },
  { value: ">200m", label: "Customers daily" },
]

export default function Home() {

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: { clientX: any; clientY: any; currentTarget: any }) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height } = currentTarget.getBoundingClientRect();

    // Normalize movement between -5% to 5%
    const moveX = parseFloat(((clientX / width) * 1 - 1).toFixed(2));
    const moveY = parseFloat(((clientY / height) * 1 - 1).toFixed(2));

    setPosition({ x: moveX, y: moveY });
  };

  const containerRef = useRef(null); // Reference for scrolling container
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

  // Mapping scroll progress (0 → 1) to translateY (-3% to 3%)
  const translateY = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);


  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="hero-gradient -translate-y-20 diagonal-clip min-h-screen flex items-center overflow-hidden  lg:h-[max(620px,_calc(92vh-49px))] h-auto relative w-full text-white lg:bg-clip-hero-container pt-[30%] md:pt-[20%] lg:pt-0 max-lg:pb-[15%]" onMouseMove={handleMouseMove}>



        <div className="absolute z-30  top-10 inset-0 transition-transform duration-500 ease-out" style={{
          transform: `translate3d(${-position.x}%, ${-position.y}%, 0)`,
        }}>

          <Image src={bg2} alt={""} className="scale-150 object-cover bgleftToRight-slide" />
        </div>

        <div className="absolute z-30 top-0 inset-0 transition-transform duration-500 ease-out  " style={{
          transform: `translate3d(${position.x}%, ${position.y}%, 0)`,
        }}>

          <Image src={bg3} alt={""} className="scale-150 object-cover bgRightToLeft-slide" />
        </div>

        {/* //text div */}

        <div className="lg:max-w-[85vw] md:max-w-[95vw] max-w-[88vw] mx-auto relative z-40 w-full h-full md:flex md:items-center md:justify-center">
          <div className="h-fit lg:flex-[65] xl:flex-[75]">
            <div className="text-white space-y-8 max-w-xl">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">Embrace the future of finance</h1>
              <p className="text-lg opacity-90">
                Reimagine financial services with AnyTech's open platform, distributed banking solution that powers
                transformation
              </p>
              <p>
                <Link href="/contact">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-white w-full md:w-auto">
                    Reach Out to Us
                  </Button>
                </Link>
              </p>

            </div>
          </div>
          <div className="lg:flex-[35] xl:flex-[25] lg:block hidden"></div>
        </div>

        {/* //image div */}
        <div className="hidden lg:block absolute top-0 xl:left-[35%] xl:w-[65%] left-1/2 lg:w-[56%] h-full diagonal-white pointer-events-none svelte-1lc7tvy">
          <div className="absolute inset-0 bg-white -right-32 ovject-cover animate-slide">
            <Image
              src="https://cdn.sanity.io/images/6jywt20u/production/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304.jpg?w=2560&auto=format"
              alt="Financial professional using mobile device"
              fill
              className="object-cover object-center h-full w-full scale-150"
              priority
            />
          </div>
          <div className="gradient-overlay svelte-1lc7tvy"></div>
        </div>
      </div>
     <div className="block md:hidden h-full w-full object-cover  -translate-y-52" style={{ clipPath: "polygon(0 15%, 100% 0, 100% 85%, 0% 100%)" }}>
      <Image src="https://cdn.sanity.io/images/6jywt20u/production/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304.jpg?w=2560&auto=format" height={550} width={750}  alt="" className="object-cover"/>
     </div>
      {/*Section 2 Customer Delight  */}
      <section className="" ref={containerRef}>

        <div className="lg:max-w-[85vw] md:max-w-[90vw] max-w-[80vw]   mx-auto ">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-primary font-semibold tracking-wide">POWERING THE FUTURE OF FINANCE</h2>
              <h3 className="text-4xl font-bold">Uncovering new ways to delight customers</h3>

              <div className="md:hidden block relative h-[620px] ">

              {/* BG image */}
              <motion.div className="absolute top-5 left-5 h-full  w-full object-cover z-0 duration-[2000ms] transition-transform ease-out" style={{ translateY }}
                transition={{
                  duration: 5 // Optional: You can control the duration as well
                }}>
                <Image src={cardbg} alt=""></Image>
              </motion.div>
              <div className="absolute bottom-[-60%] left-5 h-full w-ful object-cover z-30 scale-110">
                <Image
                  src={cardforbg}
                  alt=""
                />
              </div>


              <div className="absolute flex flex-col items-center justify-center h-full w-full z-20">

                <div className="relative">
                  {/* floating icons */}
                  <div className=" w-20 h-20 absolute top-40 -left-10 z-30 rounded-full floating">
                    <Image fill src="https://cdn.sanity.io/images/6jywt20u/production/f034c835798f95c1ce84f9c34ba48682b6383d06-89x88.svg?w=89&auto=format" alt="" />
                  </div>
                  <Image
                    src="https://cdn.sanity.io/images/6jywt20u/production/5ca8af1a922b106b962c34781483bc8e6e066688-1124x1364.png?w=1124&auto=format"
                    alt="Customer service illustration"
                    width={400}
                    height={600}
                    style={{ boxShadow: '0px 23px 30px 0px #16437763' }}
                  />
                </div>


              </div>

            </div>

              <p className="text-gray-600">
                AnyTech is revolutionizing financial technology by introducing innovative solutions that drive
                exceptional payment processing capabilities, enhancing your business efficiency.
              </p>
            </div>

            <div className="hidden md:block relative h-[620px] ">

              {/* BG image */}
              <motion.div className="absolute top-5 left-5 h-full  w-full object-cover z-0 duration-[2000ms] transition-transform ease-out" style={{ translateY }}
                transition={{
                  duration: 5 // Optional: You can control the duration as well
                }}>
                <Image src={cardbg} alt=""></Image>
              </motion.div>
              <div className="absolute bottom-[-60%] left-5 h-full w-ful object-cover z-30 scale-110">
                <Image
                  src={cardforbg}
                  alt=""
                />
              </div>


              <div className="absolute flex flex-col items-center justify-center h-full w-full z-20">

                <div className="relative">
                  {/* floating icons */}
                  <div className=" w-20 h-20 absolute top-40 -left-10 z-30 rounded-full floating">
                    <Image fill src="https://cdn.sanity.io/images/6jywt20u/production/f034c835798f95c1ce84f9c34ba48682b6383d06-89x88.svg?w=89&auto=format" alt="" />
                  </div>
                  <Image
                    src="https://cdn.sanity.io/images/6jywt20u/production/5ca8af1a922b106b962c34781483bc8e6e066688-1124x1364.png?w=1124&auto=format"
                    alt="Customer service illustration"
                    width={400}
                    height={600}
                    style={{ boxShadow: '0px 23px 30px 0px #16437763' }}
                  />
                </div>


              </div>

            </div>
          </div>
        </div>

        <div className="max-h-[240px] md:my-sm my-lg w-full min-h-[80px]">
          <Image src={bg4} alt="" ></Image>
        </div>
      </section>

      {/*Section 3 Innovation  */}


      {/* Carrosel Section */}
      <section>
        <Carrosel></Carrosel>
        <div className="max-h-[240px] md:my-sm my-lg w-full min-h-[80px]">
          <Image src={bg4} alt="" ></Image>
        </div>
      </section>


      {/* Stats Section */}

      <section className="py-20">
        <div className="lg:max-w-[70vw] md:max-w-[75vw] max-w-[65vw]  mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="md:grid md:grid-cols-3 flex flex-col gap-8">
              <div className="text-center flex md:flex-col md:items-center md:justify-center  gap-10 md:border-0 border-b-2 border-dashed border-blue-300 justify-between pb-4">
                <Counter end={20} prefix=">" />
                <div className="text-gray-600 md:text-2xl text-lg font-bold md:font-normal">Years of experience</div>
              </div>
              <div className="text-center flex md:flex-col md:items-center md:justify-center  gap-10 md:border-0 border-b-2 border-dashed border-blue-300 justify-between pb-4">
                <Counter end={40} prefix="" suffix="+" />
                <div className="text-gray-600 md:text-2xl text-lg font-bold md:font-normal">Financial institutions</div>
              </div>
              <div className="text-center flex md:flex-col md:items-center md:justify-center gap-10 md:border-0 border-b-2 border-dashed border-blue-300 justify-between pb-4">
                <Counter end={200} prefix=">" suffix="m" />
                <div className="text-gray-600 md:text-2xl text-lg font-bold md:font-normal">Customers daily</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* bank partner sections */}

      <Partners></Partners>

      {/* CTA Section */}

    </main>
  )
}

