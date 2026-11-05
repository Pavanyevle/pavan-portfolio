import { motion } from 'framer-motion'
import { GraduationCap, Award, Star, TrendingUp } from 'lucide-react'

const educations = [
  {
    id: 1,
    degree: 'B.Tech Computer Engineering',
    institution: 'G H Raisoni College of Engineering',
    location: 'Pune, Maharashtra',
    duration: '2023 – Present',
    status: 'Pursuing',
    color: '#6366f1',
    icon: '🎓',
    highlights: [
      'Specialization in Mobile & Web Development',
      'Active participant in coding competitions',
      'React Native Developer at college tech club'
    ]
  },
  {
    id: 2,
    degree: 'Diploma in Computer Engineering',
    institution: 'MIT Polytechnic, Rotegaon',
    location: 'Maharashtra',
    duration: '2020 – 2023',
    status: 'Completed',
    aggregate: '91.88%',
    color: '#10b981',
    icon: '📚',
    highlights: [
      'Outstanding aggregate of 91.88%',
      'Received Best Outstanding Award',
      'Strong foundation in C, C++, and Data Structures'
    ]
  }
]

const achievements = [
  {
    icon: <Award size={20} />,
    title: 'Best Outstanding Award',
    desc: 'Recognized for exceptional academic performance and extracurricular contributions during Diploma.',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.1)'
  },
  {
    icon: <TrendingUp size={20} />,
    title: 'Diploma Aggregate: 91.88%',
    desc: 'Achieved an outstanding aggregate score of 91.88% in Diploma Computer Engineering.',
    color: '#10b981',
    bg: 'rgba(16,185,129,0.1)'
  },
  {
    icon: <Star size={20} />,
    title: 'Mobile App Development Intern',
    desc: 'Successfully completed a 3-month internship at Sumago Infotech, gaining real-world experience.',
    color: '#6366f1',
    bg: 'rgba(99,102,241,0.1)'
  }
]

export default function Education() {
  return (
    <section
      id="education"
      className="section-padding"
      style={{ background: 'var(--bg-light)' }}
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
            <span>🎓</span> Education
          </span>
          <h2 className="section-title">
            Academic <span className="gradient-text">Journey</span>
          </h2>
          <p className="section-subtitle mx-auto text-center mt-2" style={{ color: 'var(--text-secondary)' }}>
            Building a solid academic foundation to complement my technical skills
          </p>
        </motion.div>

        {/* Education cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {educations.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -4 }}
              className="card p-6 relative overflow-hidden"
            >
              {/* Background decoration */}
              <div
                className="absolute -top-8 -right-8 w-24 h-24 rounded-full opacity-5"
                style={{ background: edu.color }}
              />

              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
                  style={{ background: `${edu.color}15` }}
                >
                  {edu.icon}
                </div>
                <div className="text-right">
                  <span
                    className="text-xs font-bold px-2.5 py-1 rounded-full"
                    style={{
                      background: edu.status === 'Pursuing' ? 'rgba(99,102,241,0.1)' : 'rgba(16,185,129,0.1)',
                      color: edu.status === 'Pursuing' ? '#6366f1' : '#10b981'
                    }}
                  >
                    {edu.status}
                  </span>
                  {edu.aggregate && (
                    <p className="text-xs mt-1 font-bold" style={{ color: edu.color }}>{edu.aggregate}</p>
                  )}
                </div>
              </div>

              <h3 className="font-black text-lg mb-1" style={{ color: 'var(--text-primary)' }}>
                {edu.degree}
              </h3>
              <p className="font-semibold text-sm mb-1" style={{ color: edu.color }}>
                {edu.institution}
              </p>
              <div className="flex items-center gap-4 text-xs mb-4" style={{ color: 'var(--text-secondary)' }}>
                <span>📍 {edu.location}</span>
                <span>📅 {edu.duration}</span>
              </div>

              <div
                className="h-px mb-4"
                style={{ background: 'var(--border-color)' }}
              />

              <ul className="space-y-2">
                {edu.highlights.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                    <span style={{ color: edu.color }} className="flex-shrink-0">▸</span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Bottom accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl"
                style={{ background: `linear-gradient(90deg, ${edu.color}, ${edu.color}44)` }}
              />
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3
            className="text-xl font-bold text-center mb-6"
            style={{ color: 'var(--text-primary)' }}
          >
            🏆 Achievements
          </h3>
          <div className="grid sm:grid-cols-3 gap-5">
            {achievements.map((ach, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="card p-5 text-center"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                  style={{ background: ach.bg, color: ach.color }}
                >
                  {ach.icon}
                </div>
                <h4 className="font-bold text-sm mb-2" style={{ color: 'var(--text-primary)' }}>
                  {ach.title}
                </h4>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {ach.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
