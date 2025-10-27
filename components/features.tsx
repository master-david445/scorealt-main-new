"use client";

import { useState, useEffect } from "react";
import { Brain, Zap, Shield, TrendingUp, Clock, Globe } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description: "Advanced machine learning models analyze alternative data sources to assess creditworthiness accurately.",
    angle: 0,
    delay: 0,
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Get credit decisions in minutes, not days. Real-time processing for immediate lending decisions.",
    angle: 60,
    delay: 0.2,
  },
  {
    icon: Shield,
    title: "Secure & Compliant",
    description: "Enterprise-grade security with full compliance to Nigerian financial regulations and data protection laws.",
    angle: 120,
    delay: 0.4,
  },
  {
    icon: TrendingUp,
    title: "Expand Your Market",
    description: "Reach underserved SMEs and informal businesses with confidence using data-driven insights.",
    angle: 180,
    delay: 0.6,
  },
  {
    icon: Clock,
    title: "Reduce Risk",
    description: "Lower default rates with predictive analytics and continuous credit monitoring.",
    angle: 240,
    delay: 0.8,
  },
  {
    icon: Globe,
    title: "Financial Inclusion",
    description: "Enable credit access for businesses previously excluded from traditional lending systems.",
    angle: 300,
    delay: 1.0,
  },
];

export function Features() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [radius, setRadius] = useState(180);

  useEffect(() => {
    const updateRadius = () => {
      if (typeof window !== 'undefined') {
        setRadius(window.innerWidth < 768 ? 140 : window.innerWidth < 1024 ? 180 : 220);
      }
    };

    updateRadius();
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  return (
    <section id="features" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 section-blend-top relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Powerful Features for Modern Lenders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to make smarter lending decisions and expand your market reach.
          </p>
        </div>

        {/* Mind Map Container */}
        <div className="relative h-96 md:h-[500px] lg:h-[600px] flex items-center justify-center">
          {/* Central AI Brain */}
          <div className="relative z-10">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-2xl animate-pulse hover:shadow-primary/50 transition-shadow duration-300">
              <Brain className="w-12 h-12 md:w-16 md:h-16 text-primary-foreground" />
            </div>
            {/* Pulsing rings around center */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping"></div>
            <div className="absolute inset-2 rounded-full border border-accent/20 animate-ping" style={{ animationDelay: '0.5s' }}></div>
          </div>

          {/* Feature Nodes */}
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const x = Math.cos((feature.angle * Math.PI) / 180) * radius;
            const y = Math.sin((feature.angle * Math.PI) / 180) * radius;

            return (
              <div key={index} className="absolute">
                {/* Connecting Line */}
                <svg
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                  width={Math.abs(x) + 60}
                  height={Math.abs(y) + 60}
                  style={{
                    transform: `translate(${x > 0 ? 0 : x}px, ${y > 0 ? 0 : y}px)`,
                  }}
                >
                  <line
                    x1={x > 0 ? 30 : Math.abs(x) + 30}
                    y1={y > 0 ? 30 : Math.abs(y) + 30}
                    x2={x > 0 ? Math.abs(x) + 30 : 30}
                    y2={y > 0 ? Math.abs(y) + 30 : 30}
                    stroke={hoveredIndex === index ? "hsl(var(--primary))" : "hsl(var(--border))"}
                    strokeWidth="2"
                    className={`transition-all duration-300 ${hoveredIndex === index ? 'animate-pulse' : ''}`}
                    style={{
                      filter: hoveredIndex === index ? 'drop-shadow(0 0 8px hsl(var(--primary)))' : 'none',
                    }}
                  />
                </svg>

                {/* Feature Node */}
                <div
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 cursor-pointer group animate-fade-in-up`}
                  style={{
                    left: `${x}px`,
                    top: `${y}px`,
                    animationDelay: `${feature.delay}s`,
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div
                    className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl ${
                      hoveredIndex === index
                        ? 'border-2 border-primary/50'
                        : 'border-2 border-primary/20'
                    }`}
                  >
                    <Icon
                      className={`w-6 h-6 md:w-8 md:h-8 text-primary-foreground transition-colors duration-300`}
                    />
                  </div>

                  {/* Tooltip */}
                  <div
                    className={`absolute z-20 bg-gradient-to-br from-primary to-accent border border-primary/20 rounded-lg p-4 shadow-xl max-w-xs transition-all duration-300 ${
                      hoveredIndex === index
                        ? 'opacity-100 scale-100 pointer-events-auto'
                        : 'opacity-0 scale-95 pointer-events-none'
                    }`}
                    style={{
                      left: x > 0 ? '120%' : '-120%',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      marginLeft: x > 0 ? '1rem' : '-1rem',
                    }}
                  >
                    <h3 className="text-lg font-semibold text-primary-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-primary-foreground/80 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
