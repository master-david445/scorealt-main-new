import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Submit Application",
    description: "Applicants provide basic business information and alternative data sources.",
  },
  {
    number: "02",
    title: "AI Analysis",
    description: "Our AI models analyze multiple data points to assess creditworthiness.",
  },
  {
    number: "03",
    title: "Get Score",
    description: "Receive a comprehensive credit score with detailed insights and recommendations.",
  },
  {
    number: "04",
    title: "Make Decision",
    description: "Use data-driven insights to make faster, more confident lending decisions.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            How ScoreAlt Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A simple, transparent process that delivers results in minutes.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className={`p-6 h-full bg-gradient-to-br from-primary to-accent border-primary/20 hover:border-primary/50 hover:transform hover:-translate-y-2 transition-all duration-300 animate-slide-in-left`} style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="text-4xl font-bold text-primary-foreground/60 mb-4">{step.number}</div>
                <h3 className="text-lg font-semibold text-primary-foreground mb-2">{step.title}</h3>
                <p className="text-primary-foreground/80 text-sm leading-relaxed">{step.description}</p>
              </Card>

              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <ArrowRight className="text-primary/30 w-6 h-6 animate-pulse" style={{ animationDelay: `${index * 0.2 + 0.5}s` }} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
