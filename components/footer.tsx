import { Mail, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary to-accent border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center hover:rotate-12 transition-transform duration-300">
                <span className="text-primary-foreground font-bold text-sm">SA</span>
              </div>
              <span className="font-bold text-lg text-primary-foreground">ScoreAlt</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              AI-powered credit scoring for financial inclusion in Nigeria.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="font-semibold text-primary-foreground">Product</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  API Docs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Security
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-primary-foreground">Company</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold text-primary-foreground">Legal</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Compliance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/80">© 2025 ScoreAlt. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground hover:scale-110 transition-all duration-300">
              <Mail size={18} />
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground hover:scale-110 transition-all duration-300">
              <Linkedin size={18} />
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground hover:scale-110 transition-all duration-300">
              <Twitter size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
