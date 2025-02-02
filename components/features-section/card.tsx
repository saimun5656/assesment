import { Card, CardContent } from "@/components/ui/card"
import { Code2, Lightbulb, Cpu } from "lucide-react"

interface FeatureCardProps {
  title: string
  description: string
  icon: "code" | "lightbulb" | "cpu"
  className?: string
}

export function FeatureCard({ title, description, icon, className = "" }: FeatureCardProps) {
  const icons = {
    code: Code2,
    lightbulb: Lightbulb,
    cpu: Cpu,
  }

  const IconComponent = icons[icon]
  const iconColors = {
    code: "bg-blue-50 text-blue-900",
    lightbulb: "bg-cyan-50 text-cyan-900",
    cpu: "bg-orange-50 text-orange-900",
  }

  return (
    <Card className={`bg-[#F8FCFF] border-none ${className} h-full`}>
      <CardContent className="pt-6">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 ${iconColors[icon]}`}>
          <IconComponent className="w-6 h-6" />
        </div>
        <h3 className="text-2xl font-semibold text-navy-900 mb-4">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  )
}

