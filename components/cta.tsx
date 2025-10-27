import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-accent/10 border-y border-border animate-scale-in">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Ready to Transform Your Lending?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of lenders using ScoreAlt to make smarter, faster lending decisions and reach new markets.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground animate-pulse hover:animate-none">
            Join the Waitlist
            <ArrowRight className="ml-2 transition-transform duration-300 hover:translate-x-1" size={18} />
          </Button>
        </div>

        <p className="text-sm text-muted-foreground">No credit card required. Get started in minutes.</p>
      </div>
    </section>
  )
}
