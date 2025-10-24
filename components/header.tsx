"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">SA</span>
          </div>
          <span className="font-bold text-lg text-foreground">ScoreAlt</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition">
            Features
          </a>
          <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition">
            How It Works
          </a>
          <a href="#benefits" className="text-sm text-muted-foreground hover:text-foreground transition">
            Benefits
          </a>
          <a href="#testimonials" className="text-sm text-muted-foreground hover:text-foreground transition">
            Testimonials
          </a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" size="sm">
            Sign In
          </Button>
          <Button size="sm" className="bg-primary hover:bg-primary/90">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-card">
          <div className="px-4 py-4 space-y-4">
            <a href="#features" className="block text-sm text-muted-foreground hover:text-foreground">
              Features
            </a>
            <a href="#how-it-works" className="block text-sm text-muted-foreground hover:text-foreground">
              How It Works
            </a>
            <a href="#benefits" className="block text-sm text-muted-foreground hover:text-foreground">
              Benefits
            </a>
            <a href="#testimonials" className="block text-sm text-muted-foreground hover:text-foreground">
              Testimonials
            </a>
            <div className="flex gap-2 pt-4">
              <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                Sign In
              </Button>
              <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
