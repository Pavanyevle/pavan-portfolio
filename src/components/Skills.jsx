import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skillCategories = [
  {
    label: 'Languages',
    color: '#6366f1',
    bgColor: 'rgba(99,102,241,0.08)',
    skills: [
      { name: 'JavaScript', level: 90, icon: '🟨' },
      { name: 'C / C++', level: 75, icon: '⚡' },
      { name: 'Python', level: 70, icon: '🐍' },
    ]
  },
  {
    label: 'Frontend & Mobile',
    color: '#0ea5e9',
    bgColor: 'rgba(14,165,233,0.08)',
    skills: [
      { name: 'React Native', level: 88, icon: '📱' },
      { name: 'React.js', level: 82, icon: '⚛️' },
    ]
  },
  {
    label: 'Backend & Database',
    color: '#10b981',
    bgColor: 'rgba(16,185,129,0.08)',
    skills: [
      { name: 'Firebase', level: 85, icon: '🔥' },
      { name: 'Node.js', level: 75, icon: '🟢' },
      { name: 'Express.js', level: 72, icon: '🚀' },
      { name: 'MongoDB', level: 70, icon: '🍃' },
      { name: 'REST API', level: 85, icon: '🔗' },
    ]
  },
  {
    label: 'Tools & Design',
    color: '#8b5cf6',
    bgColor: 'rgba(139,92,246,0.08)',
    skills: [
      { name: 'Git / GitHub', level: 85, icon: '🐙' },
      { name: 'Figma', level: 78, icon: '🎨' },
    ]
  }
]

const techBadges = [
  'JavaScript', 'React Native', 'React.js', 'Firebase', 'Node.js',
  'Express.js', 'MongoDB', 'REST API', 'C/C++', 'Python', 'Git', 'Figma'
]

function SkillBar({ name, level, color, icon, delay }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="mb-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span>{icon}</span>
          <span className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{name}</span>
        </div>
        <span className="text-sm font-bold" style={{ color }}>{level}%</span>
      </div>
      <div
        className="h-2 rounded-full overflow-hidden"
        style={{ background: 'var(--border-color)' }}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, ease: 'easeOut', delay }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}aa)` }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-padding"
      style={{ background: 'linear-gradient(180deg, var(--bg-light) 0%, rgba(99,102,241,0.03) 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-label mx-auto">
            <span>⚡</span> Skills
          </span>
          <h2 className="section-title">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="section-subtitle mx-auto text-center mt-2" style={{ color: 'var(--text-secondary)' }}>
            Technologies and tools I use to build amazing digital experiences
          </p>
        </motion.div>

        {/* Skill categories */}
        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="card p-6"
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="px-3 py-1 rounded-lg text-xs font-bold"
                  style={{ background: category.bgColor, color: category.color }}
                >
                  {category.label}
                </div>
              </div>
              {category.skills.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  {...skill}
                  color={category.color}
                  delay={catIdx * 0.1 + i * 0.1}
                />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Tech badge cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm font-semibold mb-5" style={{ color: 'var(--text-secondary)' }}>
            Technologies I work with
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {techBadges.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.08, y: -2 }}
                className="px-4 py-2 rounded-xl text-sm font-medium cursor-default transition-all"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-secondary)',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
