import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Trophy } from "lucide-react"

const values = [
  {
    title: "Customer First",
    description: "We put our customers at the heart of everything we do",
    icon: Users,
  },
  {
    title: "Innovation",
    description: "Constantly pushing boundaries in financial technology",
    icon: Target,
  },
  {
    title: "Excellence",
    description: "Committed to delivering the highest quality solutions",
    icon: Trophy,
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="hero-gradient text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">About AnyTech</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Leading the future of financial technology with innovative solutions
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Story</h2>
              <p className="text-gray-600">
                For over two decades, AnyTech has been at the forefront of financial technology innovation. We've helped
                numerous financial institutions modernize their systems and provide better services to their customers.
              </p>
              <Button>Learn More About Our Journey</Button>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Company office"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value) => (
              <Card key={value.title}>
                <CardContent className="pt-6">
                  <value.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

