import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

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
];

export function Benefits() {
  return (
    <section
      id="benefits"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 z-10 section-blend-bottom"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Benefits for Everyone
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ScoreAlt creates value for both lenders and borrowers in
            the financial ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className={`p-8 bg-gradient-to-br from-primary to-accent border-primary/20 hover:border-primary/30 transition-all duration-300 animate-fade-in-up`} style={{ animationDelay: `${index * 0.3}s` }}>
              <h3 className="text-2xl font-bold text-primary-foreground mb-6">
                {benefit.category}
              </h3>
              <ul className="space-y-4">
                {benefit.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className={`w-5 h-5 text-primary-foreground flex-shrink-0 mt-0.5 animate-checkmark-draw`} style={{ animationDelay: `${index * 0.3 + itemIndex * 0.1 + 0.5}s` }} />
                    <span className="text-primary-foreground/80">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
