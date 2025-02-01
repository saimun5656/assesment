"use client"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"

const bankLogos = [
  {
    name: "Bank of Chengde",
    src: "https://cdn.sanity.io/images/6jywt20u/production/67ef6d224529c5521d5d38b4ac18521f589865d9-603x414.png?w=320&fm=webp",
  },
  {
    name: "Bank of China",
    src: "https://cdn.sanity.io/images/6jywt20u/production/9c57a834d791df3ba5062693e0cf60cc879f46da-2560x768.png?w=320&fm=webp",
  },
  {
    name: "Bank of Shanghai",
    src: "https://cdn.sanity.io/images/6jywt20u/production/8f6dbd7e59875cb02e47e9887935c668191af0f1-778x258.png?w=320&fm=webp",
  },
  {
    name: "CGB",
    src: "https://cdn.sanity.io/images/6jywt20u/production/c86c67596c1893c78c783bcc323531a7ea723c20-1000x182.png?w=320&fm=webp",
  },
  {
    name: "China CITIC Bank",
    src: "https://cdn.sanity.io/images/6jywt20u/production/3ce67f3ece1c1b696d9d6e75f665c31ac155b679-960x540.png?w=320&fm=webp",
  },
  {
    name: "OneBank",
    src: "https://cdn.sanity.io/images/6jywt20u/production/5f4683ef95594b29414088c82c00dddb4c61338b-862x289.png?w=320&fm=webp",
  },
  {
    name: "Ping An Bank",
    src: "https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=320&fm=webp",
  },
  {
    name: "Postal Savings Bank",
    src: "https://cdn.sanity.io/images/6jywt20u/production/b01bae36b9db80dc1f9af2bf3e931bc08267827b-855x292.png?w=320&fm=webp",
  },
  {
    name: "Sea Bank",
    src: "https://cdn.sanity.io/images/6jywt20u/production/d2877eb14e7b59f820bcb49d69363c49e134ee81-1626x250.png?w=320&fm=webp",
  },
  {
    name: "Shandong City Bank",
    src: "https://cdn.sanity.io/images/6jywt20u/production/9764422d5b731f38edd216852c7c77e650647975-500x330.png?w=320&fm=webp",
  },
  {
    name: "VipFuben Bank",
    src: "https://cdn.sanity.io/images/6jywt20u/production/d96d229024fe964c6cc68d62beb75b126b08d3b5-318x61.svg?w=318&fm=webp",
  },
  {
    name: "Xiamen International Bank",
    src: "https://cdn.sanity.io/images/6jywt20u/production/ab9f4a4a11a33031761167b640dda78d89009f1e-724x137.png?w=320&fm=webp",
  },
  {
    name: "XW Bank",
    src: "https://cdn.sanity.io/images/6jywt20u/production/8d2528e19c38722cc52dda4d8b6976775c18db29-800x527.png?w=320&fm=webp",
  },
  {
    name: "SPD Bank",
    src: "https://cdn.sanity.io/images/6jywt20u/production/ba16ca6efbbe78a1e56ff61bd8befc0f0f93e18a-1200x337.png?w=320&fm=webp",
  },
  {
    name: "Card Centre",
    src: "https://cdn.sanity.io/images/6jywt20u/production/5f4683ef95594b29414088c82c00dddb4c61338b-862x289.png?w=320&fm=webp",
  },
]

export default function Partners() {
  return (
    <div className="w-full mx-auto py-20">
      <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto p-4">
        {bankLogos.map((logo, index) => (
          <div key={index} className="p-4 flex items-center justify-center">
            <Image
              src={logo.src || "/placeholder.svg"}
              alt={logo.name}
              width={200}
              height={100}
              className="w-full h-auto object-contain"
            />
          </div>
        ))}
      </div>

      <div className="md:hidden w-full">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {bankLogos.map((logo, index) => (
              <CarouselItem key={index} className="pl-4 basis-1/3">
                <div className="aspect-[2/1] relative">
                  <Image src={logo.src || "/placeholder.svg"} alt={logo.name} fill className="object-contain" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  )
}

