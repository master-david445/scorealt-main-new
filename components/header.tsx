"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="max-w-4xl rounded-2xl mx-auto sticky top-4 z-20 border-b backdrop-blur-md bg-background/95 border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between z-50">
        <div className="flex items-center z-50 gap-2">
          <div className="w-8 h-8 bg-linear-to-br from-primary to-accent rounded-lg flex items-center justify-center hover:rotate-12 transition-transform duration-300">
            <span className="text-primary-foreground font-bold text-sm">
              SA
            </span>
          </div>
          <span className="font-bold text-lg text-foreground">
            ScoreAlt
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center font-semibold text-foreground gap-8">
          <Link
            href="#features"
            className="text-sm hover:text-accent transition-colors duration-200"
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="text-sm hover:text-accent transition-colors duration-200"
          >
            How It Works
          </Link>
          <Link
            href="#benefits"
            className="text-sm hover:text-accent transition-colors duration-200"
          >
            Benefits
          </Link>
          <Link
            href="#testimonials"
            className="text-sm hover:text-accent transition-colors duration-200"
          >
            Testimonials
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button
            size="sm"
            className="bg-primary hover:bg-primary/90"
          >
            Join Waitlist
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-card animate-slide-down">
          <div className="px-4 py-4 space-y-4">
            <Link
              href="#features"
              className="block text-sm text-muted-foreground hover:text-accent transition-colors duration-200"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="block text-sm text-muted-foreground hover:text-accent transition-colors duration-200"
            >
              How It Works
            </Link>
            <Link
              href="#benefits"
              className="block text-sm text-muted-foreground hover:text-accent transition-colors duration-200"
            >
              Benefits
            </Link>
            <Link
              href="#testimonials"
              className="block text-sm text-muted-foreground hover:text-accent transition-colors duration-200"
            >
              Testimonials
            </Link>
            <div className="flex gap-2 pt-4">
              <Button
                size="sm"
                className="flex-1 bg-primary hover:bg-primary/90"
              >
                Join Waitlist
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
