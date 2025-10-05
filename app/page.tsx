"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Github, Linkedin, Mail, Code2, Rocket, Zap, Terminal, ExternalLink } from "lucide-react"

export default function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const skills = [
    { name: "Python", icon: "🐍", color: "bg-primary" },
    { name: "JavaScript", icon: "⚡", color: "bg-secondary" },
    { name: "React.js", icon: "⚛️", color: "bg-accent" },
    { name: "Django", icon: "🎸", color: "bg-primary" },
  ]

  const projects = [
    {
      title: "CurateMate",
      description: "AI-powered content curation platform that helps users discover and organize relevant content",
      tech: ["React", "Python", "Django"],
      link: "https://github.com/curatemate",
      color: "bg-primary",
    },
    {
      title: "SaaS Dashboard",
      description: "Full-stack analytics dashboard with real-time data visualization and user management",
      tech: ["React", "Django", "PostgreSQL"],
      link: "#",
      color: "bg-secondary",
    },
    {
      title: "E-Commerce Platform",
      description: "Scalable online marketplace with payment integration and inventory management",
      tech: ["Next.js", "Python", "Stripe"],
      link: "#",
      color: "bg-accent",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Cursor follower */}
      <div
        className="fixed w-8 h-8 border-4 border-primary pointer-events-none z-50 mix-blend-difference transition-transform duration-100"
        style={{
          left: `${mousePosition.x - 16}px`,
          top: `${mousePosition.y - 16}px`,
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-background border-b-4 border-foreground">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-bold font-mono hover-glitch cursor-pointer">
              {"<KS_SABAREESH/>"}
            </h1>
            <div className="flex gap-2 md:gap-4">
              <Button
                variant="outline"
                size="sm"
                className="border-4 border-foreground brutalist-shadow-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all bg-secondary text-secondary-foreground font-bold"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                WORK
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-4 border-foreground brutalist-shadow-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all bg-primary text-primary-foreground font-bold"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                CONTACT
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-24 pb-12">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-accent text-accent-foreground px-4 py-2 border-4 border-foreground brutalist-shadow-sm rotate-[-2deg]">
                <p className="font-mono font-bold text-sm">FULL-STACK DEVELOPER</p>
              </div>

              <h2 className="text-5xl md:text-7xl font-bold leading-tight text-balance">
                Building the{" "}
                <span className="bg-primary text-primary-foreground px-2 inline-block border-4 border-foreground rotate-[1deg]">
                  FUTURE
                </span>{" "}
                of Web
              </h2>

              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-pretty">
                I'm <span className="font-bold text-foreground">Sabareesh Murugan</span>, a passionate SaaS & web
                developer with 2 years of experience crafting scalable applications. I transform complex problems into
                elegant, user-friendly solutions using cutting-edge technologies.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  size="lg"
                  className="border-4 border-foreground brutalist-shadow hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all bg-primary text-primary-foreground font-bold text-lg px-8"
                  onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <Rocket className="mr-2 h-5 w-5" />
                  VIEW PROJECTS
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-4 border-foreground brutalist-shadow hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all bg-secondary text-secondary-foreground font-bold text-lg px-8"
                  asChild
                >
                  <a href="https://github.com/curatemate" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-5 w-5" />
                    GITHUB
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative">
              <Card className="border-4 border-foreground brutalist-shadow-lg bg-card p-8 rotate-[2deg] hover:rotate-[0deg] transition-transform duration-300">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Terminal className="h-8 w-8 text-primary" />
                    <h3 className="text-2xl font-bold font-mono">TECH_STACK</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {skills.map((skill, index) => (
                      <div
                        key={skill.name}
                        className={`${skill.color} text-foreground p-4 border-4 border-foreground brutalist-shadow-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer animate-float`}
                        style={{ animationDelay: `${index * 0.2}s` }}
                      >
                        <div className="text-3xl mb-2">{skill.icon}</div>
                        <p className="font-bold font-mono">{skill.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-muted border-y-4 border-foreground">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 inline-block bg-secondary text-secondary-foreground px-4 py-2 border-4 border-foreground brutalist-shadow rotate-[-1deg]">
              WHO AM I?
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className="border-4 border-foreground brutalist-shadow bg-primary text-primary-foreground p-6 hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all">
                <Code2 className="h-12 w-12 mb-4" />
                <h3 className="text-xl font-bold mb-2 font-mono">CODE CRAFTSMAN</h3>
                <p className="leading-relaxed">
                  I write clean, maintainable code that scales. Every line serves a purpose, every function tells a
                  story.
                </p>
              </Card>
              <Card className="border-4 border-foreground brutalist-shadow bg-accent text-accent-foreground p-6 hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all">
                <Zap className="h-12 w-12 mb-4" />
                <h3 className="text-xl font-bold mb-2 font-mono">PROBLEM SOLVER</h3>
                <p className="leading-relaxed">
                  Complex challenges excite me. I break down problems into elegant solutions that users love.
                </p>
              </Card>
              <Card className="border-4 border-foreground brutalist-shadow bg-secondary text-secondary-foreground p-6 hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all">
                <Rocket className="h-12 w-12 mb-4" />
                <h3 className="text-xl font-bold mb-2 font-mono">FAST LEARNER</h3>
                <p className="leading-relaxed">
                  Technology evolves rapidly, and so do I. Always exploring new frameworks and best practices.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-12 inline-block bg-primary text-primary-foreground px-4 py-2 border-4 border-foreground brutalist-shadow rotate-[1deg]">
            FEATURED WORK
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="border-4 border-foreground brutalist-shadow-lg bg-card hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all group cursor-pointer"
              >
                <div
                  className={`${project.color} h-48 border-b-4 border-foreground flex items-center justify-center text-6xl font-bold text-foreground`}
                >
                  {index + 1}
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold font-mono">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-muted text-foreground px-3 py-1 border-2 border-foreground font-mono text-sm font-bold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-4 border-foreground brutalist-shadow-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all bg-background font-bold"
                    asChild
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      VIEW PROJECT <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-muted border-t-4 border-foreground">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 inline-block bg-accent text-accent-foreground px-4 py-2 border-4 border-foreground brutalist-shadow rotate-[-1deg]">
            LET'S CONNECT
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 mt-8 leading-relaxed">
            Got a project in mind? Want to collaborate? Or just want to say hi? I'm always open to discussing new
            opportunities and interesting ideas.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Button
              size="lg"
              className="border-4 border-foreground brutalist-shadow-lg hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all bg-primary text-primary-foreground font-bold h-24 text-lg"
              asChild
            >
              <a href="https://github.com/curatemate" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-6 w-6" />
                GITHUB
              </a>
            </Button>
            <Button
              size="lg"
              className="border-4 border-foreground brutalist-shadow-lg hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all bg-secondary text-secondary-foreground font-bold h-24 text-lg"
              asChild
            >
              <a
                href="https://in.linkedin.com/in/ks-sabareesh-murugan-538502388"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-6 w-6" />
                LINKEDIN
              </a>
            </Button>
            <Button
              size="lg"
              className="border-4 border-foreground brutalist-shadow-lg hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all bg-accent text-accent-foreground font-bold h-24 text-lg"
              asChild
            >
              <a href="mailto:sabareesh@example.com">
                <Mail className="mr-2 h-6 w-6" />
                EMAIL
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t-4 border-foreground bg-foreground text-background">
        <div className="container mx-auto text-center">
          <p className="font-mono font-bold">
            © 2025 KS SABAREESH MURUGAN • BUILT WITH REACT & NEXT.JS • DESIGNED WITH BRUTALISM
          </p>
        </div>
      </footer>
    </div>
  )
}
