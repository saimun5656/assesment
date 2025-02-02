import Banner from "@/components/banner"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import bg1 from "../../public/backgrounds/WaveLinesDesktop2.svg"
const services = [
  {
    title: "Digital Transformation",
    features: ["Legacy System Modernization", "Cloud Migration", "API Integration", "Digital Banking Solutions"],
  },
  {
    title: "Financial Solutions",
    features: ["Payment Processing", "Risk Management", "Fraud Detection", "Regulatory Compliance"],
  },
  {
    title: "Consulting Services",
    features: ["Technology Strategy", "Process Optimization", "Security Assessment", "Performance Analysis"],
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">

      <Banner Bg1={bg1} Bg2={bg1}></Banner>

      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <Card key={service.title}>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <CheckCircle className="text-primary h-5 w-5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6">Learn More</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

