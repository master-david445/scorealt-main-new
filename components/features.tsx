import { Card } from "@/components/ui/card"
import { Brain, Zap, Shield, TrendingUp, Clock, Globe } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description:
      "Advanced machine learning models analyze alternative data sources to assess creditworthiness accurately.",
    color: "text-primary",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Get credit decisions in minutes, not days. Real-time processing for immediate lending decisions.",
    color: "text-accent",
  },
  {
    icon: Shield,
    title: "Secure & Compliant",
    description:
      "Enterprise-grade security with full compliance to Nigerian financial regulations and data protection laws.",
    color: "text-secondary",
  },
  {
    icon: TrendingUp,
    title: "Expand Your Market",
    description: "Reach underserved SMEs and informal businesses with confidence using data-driven insights.",
    color: "text-primary",
  },
  {
    icon: Clock,
    title: "Reduce Risk",
    description: "Lower default rates with predictive analytics and continuous credit monitoring.",
    color: "text-accent",
  },
  {
    icon: Globe,
    title: "Financial Inclusion",
    description: "Enable credit access for businesses previously excluded from traditional lending systems.",
    color: "text-secondary",
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Powerful Features for Modern Lenders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to make smarter lending decisions and expand your market reach.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow border-border/50 hover:border-primary/30"
              >
                <div className={`w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4`}>
                  <Icon className={`${feature.color} w-6 h-6`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
