"use client"

import { useState } from "react"
import Link from "next/link"
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

  return (
    <header className="md:relative fixed top-0 left-0 right-0 bg-transparent lg:max-w-[90vw] md:max-w-[95vw] mx-auto">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 ">
          <div>
          <Link href="/" className="text-white font-bold text-2xl">
              ANYTECH
            </Link>
          </div>
          <div className="flex items-center gap-4">
           
            <div className="hidden md:flex items-center gap-6">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-white bg-transparent">Solutions</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 backdrop-blur-md bg-white/10 border border-white/20">
                        {solutions.map((solution) => (
                          <li key={solution.title}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={solution.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/20 hover:text-white focus:bg-white/20 focus:text-white"
                              >
                                <div className="text-sm font-medium leading-none text-white">{solution.title}</div>
                                <p className="line-clamp-2 text-sm leading-snug text-white/70">
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
                <Button variant="link" className="text-white">
                  Service
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="link" className="text-white">
                  About Us
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-white">
              EN
            </Button>
            <Link href="/contact">
              <Button className="hidden md:inline-flex bg-white text-primary hover:bg-white/90">Contact Us</Button>
            </Link>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" className="text-white p-0">
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

                    
                    <Link href="/about" className="text-white text-2xl font-normal" onClick={() => setIsOpen(false)}>
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

