import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

const benefits = [
  {
    category: "For Lenders",
    items: [
      "Reduce default rates by up to 40%",
      "Process loans 10x faster",
      "Access untapped market segments",
      "Lower operational costs",
      "Real-time risk monitoring",
    ],
  },
  {
    category: "For Borrowers",
    items: [
      "Get credit without traditional history",
      "Faster approval process",
      "Fair and transparent scoring",
      "Build credit profile",
      "Access to growth capital",
    ],
  },
]

export function Benefits() {
  return (
    <section id="benefits" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Benefits for Everyone
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ScoreAlt creates value for both lenders and borrowers in the financial ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-8 border-border/50">
              <h3 className="text-2xl font-bold text-foreground mb-6">{benefit.category}</h3>
              <ul className="space-y-4">
                {benefit.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
