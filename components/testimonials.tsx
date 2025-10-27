import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Chioma Okafor",
    role: "CEO, Lagos Microfinance Bank",
    content:
      "ScoreAlt transformed how we assess creditworthiness. We've expanded our portfolio by 300% while reducing defaults.",
    rating: 5,
  },
  {
    name: "Tunde Adeyemi",
    role: "Lending Manager, Kano Credit Union",
    content:
      "The AI insights are incredibly accurate. We're now confident lending to businesses we previously couldn't reach.",
    rating: 5,
  },
  {
    name: "Amara Nwosu",
    role: "Business Owner, Lagos",
    content:
      "Finally got access to credit without the traditional hassle. ScoreAlt made the process transparent and fair.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Trusted by Lenders Across Nigeria
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how ScoreAlt is transforming lending decisions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className={`p-6 bg-gradient-to-br from-primary to-accent border-primary/20 hover:shadow-lg hover:transform hover:-translate-y-1 transition-all duration-300 animate-slide-in-up`} style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className={`w-4 h-4 text-primary-foreground animate-star-fill`} style={{ animationDelay: `${index * 0.2 + i * 0.1}s` }} />
                ))}
              </div>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">{testimonial.content}</p>
              <div>
                <p className="font-semibold text-primary-foreground">{testimonial.name}</p>
                <p className="text-sm text-primary-foreground/70">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
