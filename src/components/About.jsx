import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Palette, Zap, Users } from 'lucide-react'

const traits = [
  {
    icon: <Code2 size={20} />,
    title: 'Mobile Developer',
    desc: 'Specializing in React Native for cross-platform mobile applications with native performance.'
  },
  {
    icon: <Zap size={20} />,
    title: 'Firebase & APIs',
    desc: 'Building robust backends with Firebase, Node.js, and seamless REST API integrations.'
  },
  {
    icon: <Palette size={20} />,
    title: 'UI/UX Enthusiast',
    desc: 'Crafting pixel-perfect interfaces using Figma with a focus on user experience and accessibility.'
  },
  {
    icon: <Users size={20} />,
    title: 'Problem Solver',
    desc: 'Analytical mindset with a passion for tackling complex engineering challenges.'
  }
]

function AnimatedSection({ children, className, delay = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function About() {
  return (
    <section id="about" className="section-padding" style={{ background: 'var(--bg-light)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual element */}
          <AnimatedSection>
            <div className="relative">
              {/* Code card */}
              <div
                className="rounded-2xl p-6 font-mono text-sm leading-relaxed"
                style={{
                  background: '#1e293b',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
                  border: '1px solid rgba(255,255,255,0.05)'
                }}
              >
                {/* Terminal dots */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
                  <span className="ml-2 text-xs" style={{ color: '#64748b' }}>about_pavan.js</span>
                </div>
                <pre className="text-sm overflow-x-auto">
                  <code>
                    <span style={{ color: '#94a3b8' }}>{'// '}</span><span style={{ color: '#64748b' }}>Pavan Yevle — Developer Profile</span>{'\n'}
                    <span style={{ color: '#818cf8' }}>const </span><span style={{ color: '#7dd3fc' }}>pavan</span><span style={{ color: '#e2e8f0' }}> = {'{'}</span>{'\n'}
                    <span style={{ color: '#e2e8f0' }}>{'  '}</span><span style={{ color: '#c084fc' }}>name</span><span style={{ color: '#e2e8f0' }}>: </span><span style={{ color: '#86efac' }}>"Pavan Yevle"</span><span style={{ color: '#e2e8f0' }}>,</span>{'\n'}
                    <span style={{ color: '#e2e8f0' }}>{'  '}</span><span style={{ color: '#c084fc' }}>role</span><span style={{ color: '#e2e8f0' }}>: </span><span style={{ color: '#86efac' }}>"React Native Developer"</span><span style={{ color: '#e2e8f0' }}>,</span>{'\n'}
                    <span style={{ color: '#e2e8f0' }}>{'  '}</span><span style={{ color: '#c084fc' }}>education</span><span style={{ color: '#e2e8f0' }}>: </span><span style={{ color: '#86efac' }}>"B.Tech CSE"</span><span style={{ color: '#e2e8f0' }}>,</span>{'\n'}
                    <span style={{ color: '#e2e8f0' }}>{'  '}</span><span style={{ color: '#c084fc' }}>skills</span><span style={{ color: '#e2e8f0' }}>: [</span>{'\n'}
                    <span style={{ color: '#e2e8f0' }}>{'    '}</span><span style={{ color: '#86efac' }}>"React Native"</span><span style={{ color: '#e2e8f0' }}>,</span>{'\n'}
                    <span style={{ color: '#e2e8f0' }}>{'    '}</span><span style={{ color: '#86efac' }}>"JavaScript"</span><span style={{ color: '#e2e8f0' }}>,</span>{'\n'}
                    <span style={{ color: '#e2e8f0' }}>{'    '}</span><span style={{ color: '#86efac' }}>"Firebase"</span><span style={{ color: '#e2e8f0' }}>,</span>{'\n'}
                    <span style={{ color: '#e2e8f0' }}>{'    '}</span><span style={{ color: '#86efac' }}>"REST APIs"</span>{'\n'}
                    <span style={{ color: '#e2e8f0' }}>{'  '}],</span>{'\n'}
                    <span style={{ color: '#e2e8f0' }}>{'  '}</span><span style={{ color: '#c084fc' }}>available</span><span style={{ color: '#e2e8f0' }}>: </span><span style={{ color: '#f97316' }}>true</span><span style={{ color: '#e2e8f0' }}>,</span>{'\n'}
                    <span style={{ color: '#e2e8f0' }}>{'  '}</span><span style={{ color: '#c084fc' }}>passions</span><span style={{ color: '#e2e8f0' }}>: [</span><span style={{ color: '#86efac' }}>"UI/UX"</span><span style={{ color: '#e2e8f0' }}>, </span><span style={{ color: '#86efac' }}>"Innovation"</span><span style={{ color: '#e2e8f0' }}>]</span>{'\n'}
                    <span style={{ color: '#e2e8f0' }}>{'}'};</span>
                  </code>
                </pre>
              </div>

              {/* Stats cards */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                {[
                  { number: '3+', label: 'Projects Built' },
                  { number: '91%', label: 'Diploma Score' },
                  { number: '1', label: 'Internship' },
                  { number: '10+', label: 'Technologies' }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3 }}
                    className="card p-4 text-center"
                    style={{ background: 'var(--bg-card)' }}
                  >
                    <p className="text-2xl font-black gradient-text">{stat.number}</p>
                    <p className="text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Text */}
          <AnimatedSection delay={0.2}>
            <div>
              <span className="section-label">
                <span>👤</span> About Me
              </span>
              <h2 className="section-title mb-4">
                Building the Future,<br />
                <span className="gradient-text">One App at a Time</span>
              </h2>
              <p className="mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
                I'm a <strong style={{ color: 'var(--text-primary)' }}>B.Tech Computer Engineering student</strong> at G H Raisoni College of Engineering, Pune,
                with a deep passion for mobile application development. My journey started with Diploma in Computer Engineering,
                achieving an outstanding aggregate of <strong style={{ color: '#6366f1' }}>91.88%</strong>.
              </p>
              <p className="mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
                I specialize in building cross-platform mobile apps using <strong style={{ color: 'var(--text-primary)' }}>React Native</strong>, backed by
                <strong style={{ color: 'var(--text-primary)' }}> Firebase</strong> for real-time data and authentication. I love combining
                clean code with thoughtful <strong style={{ color: 'var(--text-primary)' }}>UI/UX design</strong> to create experiences users love.
              </p>

              {/* Trait cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                {traits.map((trait, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className="p-4 rounded-xl transition-all"
                    style={{
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-color)'
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                      style={{ background: 'rgba(99,102,241,0.1)', color: '#6366f1' }}
                    >
                      {trait.icon}
                    </div>
                    <h3 className="font-bold text-sm mb-1" style={{ color: 'var(--text-primary)' }}>{trait.title}</h3>
                    <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{trait.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
