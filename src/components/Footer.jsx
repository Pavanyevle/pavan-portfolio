import { motion } from 'framer-motion'
import { Heart, ArrowUp, Mail, Code2 } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' }
  ]

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: '#0f172a',
        borderTop: '1px solid rgba(255,255,255,0.05)'
      }}
    >
      {/* Background gradient */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 blur-3xl opacity-10"
        style={{ background: 'radial-gradient(circle, #6366f1, transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 relative z-10">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-white text-sm"
                style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
              >
                PY
              </div>
              <span className="font-bold text-white text-lg">
                Pavan<span style={{ color: '#818cf8' }}>.</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: '#64748b' }}>
              React Native Developer & Mobile App Developer passionate about creating
              beautiful, functional applications that make a difference.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              <motion.a
                href="https://github.com/pavanyevle"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all"
                style={{ background: 'rgba(255,255,255,0.05)', color: '#94a3b8' }}
                aria-label="GitHub"
              >
                <GithubIcon size={16} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/pavanyevle"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all"
                style={{ background: 'rgba(255,255,255,0.05)', color: '#94a3b8' }}
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={16} />
              </motion.a>
              <motion.a
                href="mailto:pavanyevle@gmail.com"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all"
                style={{ background: 'rgba(255,255,255,0.05)', color: '#94a3b8' }}
                aria-label="Email"
              >
                <Mail size={16} />
              </motion.a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold text-sm mb-4 uppercase tracking-widest" style={{ color: '#94a3b8' }}>
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {links.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="text-sm transition-colors hover:text-indigo-400"
                    style={{ color: '#64748b' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech stack */}
          <div>
            <h4 className="font-bold text-sm mb-4 uppercase tracking-widest" style={{ color: '#94a3b8' }}>
              Built With
            </h4>
            <div className="flex flex-wrap gap-2">
              {['React.js', 'Vite', 'Framer Motion', 'Tailwind CSS', 'JavaScript'].map(tech => (
                <span
                  key={tech}
                  className="text-xs px-3 py-1.5 rounded-lg"
                  style={{
                    background: 'rgba(99,102,241,0.1)',
                    color: '#818cf8',
                    border: '1px solid rgba(99,102,241,0.2)'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6">
              <h4 className="font-bold text-sm mb-3 uppercase tracking-widest" style={{ color: '#94a3b8' }}>
                Contact
              </h4>
              <a
                href="mailto:pavanyevle@gmail.com"
                className="text-sm hover:text-indigo-400 transition-colors"
                style={{ color: '#64748b' }}
              >
                pavanyevle@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px mb-6" style={{ background: 'rgba(255,255,255,0.06)' }} />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm" style={{ color: '#64748b' }}>
            <Code2 size={15} style={{ color: '#6366f1' }} />
            <span>
              Designed & Built by{' '}
              <span className="font-semibold" style={{ color: '#818cf8' }}>Pavan Yevle</span>
            </span>
          </div>

          <div className="flex items-center gap-2 text-sm" style={{ color: '#64748b' }}>
            <span>Made with</span>
            <Heart size={14} style={{ color: '#f43f5e' }} className="fill-current" />
            <span>in Pune, India</span>
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-9 h-9 rounded-xl flex items-center justify-center transition-all"
            style={{ background: 'rgba(99,102,241,0.2)', color: '#818cf8' }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
