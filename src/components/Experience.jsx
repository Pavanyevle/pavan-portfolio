import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react'

const experiences = [
  {
    id: 1,
    company: 'Sumago Infotech',
    role: 'Mobile Application Development Intern',
    duration: '3 Months',
    type: 'Internship',
    location: 'Pune, Maharashtra',
    color: '#6366f1',
    logo: '🏢',
    responsibilities: [
      'Developed cross-platform mobile applications using React Native for real-world client projects',
      'Designed UI/UX wireframes and prototypes in Figma, following design system guidelines',
      'Integrated Firebase for authentication, Firestore database, and cloud storage',
      'Collaborated on the full software development lifecycle from requirement gathering to deployment',
      'Used Git & GitHub for version control, code reviews, and team collaboration',
      'Gained hands-on experience with REST API integration and state management'
    ],
    skills: ['React Native', 'Figma', 'Firebase', 'GitHub', 'UI/UX', 'REST APIs']
  }
]

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-padding"
      style={{ background: 'linear-gradient(180deg, rgba(99,102,241,0.03) 0%, var(--bg-light) 100%)' }}
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
            <span>💼</span> Experience
          </span>
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle mx-auto text-center mt-2" style={{ color: 'var(--text-secondary)' }}>
            Professional experience that shaped my development journey
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 md:-translate-x-px"
            style={{ background: 'linear-gradient(to bottom, #6366f1, rgba(99,102,241,0.1))' }}
          />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative pl-16 md:pl-0 md:grid md:grid-cols-2 md:gap-10 mb-12"
            >
              {/* Timeline dot */}
              <div
                className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full border-4 border-white dark:border-gray-900 z-10 animate-pulse-glow"
                style={{ background: exp.color, top: '24px' }}
              />

              {/* Left: Company info */}
              <div className="md:text-right md:pr-10">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="card p-6 inline-block w-full"
                >
                  <div className="flex md:flex-row-reverse items-center gap-3 mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                      style={{ background: `${exp.color}15` }}
                    >
                      {exp.logo}
                    </div>
                    <div className="md:text-right">
                      <h3 className="font-black text-lg" style={{ color: 'var(--text-primary)' }}>
                        {exp.company}
                      </h3>
                      <span
                        className="text-xs font-semibold px-2 py-0.5 rounded-full"
                        style={{ background: `${exp.color}15`, color: exp.color }}
                      >
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex md:flex-row-reverse items-center gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                      <Briefcase size={14} />
                      <span>{exp.role}</span>
                    </div>
                    <div className="flex md:flex-row-reverse items-center gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                      <Calendar size={14} />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex md:flex-row-reverse items-center gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Skills used */}
                  <div className="flex flex-wrap md:flex-row-reverse gap-2 mt-4">
                    {exp.skills.map(skill => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium"
                        style={{
                          background: `${exp.color}10`,
                          color: exp.color,
                          border: `1px solid ${exp.color}25`
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Right: Responsibilities */}
              <div className="mt-6 md:mt-0 md:pl-10">
                <div
                  className="card p-6"
                  style={{ borderLeft: `3px solid ${exp.color}` }}
                >
                  <h4 className="font-bold text-sm mb-4 uppercase tracking-wide" style={{ color: exp.color }}>
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((item, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: j * 0.08 }}
                        className="flex items-start gap-3 text-sm leading-relaxed"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        <CheckCircle2
                          size={16}
                          className="flex-shrink-0 mt-0.5"
                          style={{ color: exp.color }}
                        />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
