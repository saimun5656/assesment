import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AnyTech - Future of Finance",
  description: "Reimagine financial services with AnyTech's open platform",
  icons:"https://cdn.sanity.io/images/6jywt20u/production/1054f5a62fb7870110b5b01583fb2bb300d3a948-75x76.png"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="font-montserrat">
        <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
