"use client";

import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

export function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative overflow-hidden py-20 md:py-32 px-4 sm:px-6 lg:px-8 animate-fade-in-up">
      {/* Parallax Background Images */}
      <div className="absolute inset-0 -z-20">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 parallax-layer"
          style={{
            backgroundImage: "url('/placeholder.jpg')",
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15 parallax-layer"
          style={{
            backgroundImage: "url('/placeholder.svg')",
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10 parallax-layer"
          style={{
            backgroundImage: "url('/placeholder-logo.png')",
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        />
      </div>

      {/* Background gradient elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
              <Zap size={16} className="text-accent" />
              <TypeAnimation
                sequence={[
                  "AI-Powered Credit Intelligence",
                  2000,
                  "Alternative Credit Scoring for SMEs",
                  2000,
                  "Empowering Lenders with Smart Data",
                  2000,
                  "Assessing Creditworthiness Beyond History",
                  2000,
                  "Driving Financial Inclusion Through AI",
                  2000,
                  "Smarter Lending Decisions. Faster.",
                  2000,
                ]}
                wrapper="span"
                speed={35}
                style={{ display: "inline-block" }}
                className="text-sm font-medium text-accent-foreground"
                repeat={Infinity}
              />
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Unlock Credit for{" "}
                <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                  Everyone
                </span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                ScoreAlt uses advanced AI to assess creditworthiness
                for SMEs and informal businesses in Nigeria who lack
                traditional credit history. Enable faster, data-driven
                lending decisions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Join Waitlist
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
              <div>
                <div className="text-2xl font-bold text-primary">
                  500+
                </div>
                <p className="text-sm text-muted-foreground">
                  Lenders Trusted
                </p>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">
                  ₦2.5B+
                </div>
                <p className="text-sm text-muted-foreground">
                  Loans Processed
                </p>
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary">
                  98%
                </div>
                <p className="text-sm text-muted-foreground">
                  Accuracy Rate
                </p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-96 md:h-full min-h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl border border-primary/20 overflow-hidden">
              {/* AI Visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 h-64">
                  {/* Outer ring */}
                  <div
                    className="absolute inset-0 rounded-full border-2 border-primary/30 animate-spin"
                    style={{ animationDuration: "20s" }}
                  ></div>

                  {/* Middle ring */}
                  <div
                    className="absolute inset-8 rounded-full border-2 border-accent/30 animate-spin"
                    style={{
                      animationDuration: "15s",
                      animationDirection: "reverse",
                    }}
                  ></div>

                  {/* Inner circle */}
                  <div className="absolute inset-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-2xl hover:shadow-primary/50 transition-shadow duration-300">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-foreground hover:text-primary-foreground/90 transition-colors duration-300">
                        AI
                      </div>
                      <div className="text-xs text-primary-foreground/80">
                        Scoring
                      </div>
                    </div>
                  </div>

                  {/* Floating data points */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 w-12 h-12 bg-accent/20 rounded-lg border border-accent/40 flex items-center justify-center animate-float">
                    <span className="text-xs font-bold text-accent">
                      📊
                    </span>
                  </div>
                  <div
                    className="absolute bottom-0 right-0 translate-x-8 translate-y-8 w-12 h-12 bg-primary/20 rounded-lg border border-primary/40 flex items-center justify-center animate-float"
                    style={{ animationDelay: "2s" }}
                  >
                    <span className="text-xs font-bold text-primary">
                      🔐
                    </span>
                  </div>
                  <div
                    className="absolute bottom-0 left-0 -translate-x-8 translate-y-8 w-12 h-12 bg-secondary/20 rounded-lg border border-secondary/40 flex items-center justify-center animate-float"
                    style={{ animationDelay: "4s" }}
                  >
                    <span className="text-xs font-bold text-secondary">
                      ⚡
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
