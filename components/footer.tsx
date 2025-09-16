import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-border/30">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-card/20 to-transparent"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col items-center space-y-8">
          {/* Social links */}
          <div className="flex space-x-6">
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Mail, href: "mailto:info@karacode.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="group p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                aria-label={label}
              >
                <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-muted-foreground text-sm">© 2025 Karacode. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
