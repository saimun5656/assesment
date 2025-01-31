"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import Icon from "../public/icon.svg"
import IconAlt from "../public/iconAlt.svg"
const solutions = [
  {
    title: "Digital Banking",
    href: "/solutions/digital-banking",
    description: "Modern banking solutions for the digital age",
  },
  {
    title: "Payment Solutions",
    href: "/solutions/payments",
    description: "Integrated payment processing systems",
  },
  {
    title: "Risk Management",
    href: "/solutions/risk-management",
    description: "Advanced risk assessment and management tools",
  },
]

const services = [
  {
    title: "Consulting Services",
    href: "/services/consulting",
    description: "Expert guidance for your financial technology needs",
  },
  {
    title: "Implementation",
    href: "/services/implementation",
    description: "Seamless integration of our solutions",
  },
  {
    title: "Support & Maintenance",
    href: "/services/support",
    description: "24/7 technical support and system maintenance",
  },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      if (currentScrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const navbarClasses = `
    fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
    ${isVisible ? "translate-y-0" : "-translate-y-full"}
    ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}
  `

  const textColorClass = isScrolled ? "text-primary" : "text-white"
  const buttonColorClass = isScrolled
    ? "bg-primary text-white hover:bg-primary/90"
    : "bg-white text-primary hover:bg-white/90"

  return (
    <header className={navbarClasses}>
      <nav className=" mx-auto lg:max-w-[85vw] md:max-w-[95vw]">
        <div className="flex items-center justify-between h-20">
          <div>
            <Link href="/" className={`font-bold text-2xl ${textColorClass}`}>
            <Image
                src={isScrolled ? IconAlt : Icon}
                alt="ANYTECH"
                width={140}
                height={30}
                className=""
              />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-6">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className={`bg-transparent ${textColorClass}`}>
                      Solutions
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 bg-white shadow-md">
                        {solutions.map((solution) => (
                          <li key={solution.title}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={solution.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 hover:text-primary focus:bg-slate-100 focus:text-primary"
                              >
                                <div className="text-sm font-medium leading-none">{solution.title}</div>
                                <p className="line-clamp-2 text-sm leading-snug text-slate-600">
                                  {solution.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <Link href="/service">
                <Button variant="link" className={textColorClass}>
                  Service
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="link" className={textColorClass}>
                  About Us
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className={textColorClass}>
              EN
            </Button>
            <Link href="/contact">
              <Button className={`hidden md:inline-flex ${buttonColorClass}`}>Contact Us</Button>
            </Link>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" className={`p-0 ${textColorClass}`}>
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="w-full p-0 bg-gradient-to-br from-[#0061ff] to-[#00a6ff]">
                <div className="flex flex-col h-[calc(100vh-5rem)] p-6 mt-20">
                  <div className="flex flex-col gap-6">
                    <Collapsible>
                      <CollapsibleTrigger className="flex items-center justify-between w-full text-white text-2xl font-normal">
                        <span>Solutions</span>
                        <ChevronDown className="h-6 w-6" />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mt-4 space-y-4">
                        {solutions.map((solution) => (
                          <Link
                            key={solution.title}
                            href={solution.href}
                            className="block text-white/80 text-lg pl-4 hover:text-white transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {solution.title}
                          </Link>
                        ))}
                      </CollapsibleContent>
                    </Collapsible>

                    <Link href="/service" className="text-white text-2xl font-normal" onClick={() => setIsOpen(false)}>
                      Services
                    </Link>
                    <Link href="/about" className="text-white text-2xl font-normal" onClick={() => setIsOpen(false)}>
                      About Us
                    </Link>
                  </div>
                  <div className="mt-auto">
                    <div className="flex items-center gap-2 text-white text-xl mb-8">
                      <span>ENGLISH</span>
                    </div>
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      <Button className="w-full bg-white/10 text-white border border-white/20 hover:bg-white/20">
                        Contact Us
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  )
}

