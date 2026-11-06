import { motion } from 'framer-motion'
import { Download, ArrowRight, Briefcase, Sparkles } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'
import profileImg from '../assets/profile.jpeg'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ paddingTop: '4rem' }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ background: 'radial-gradient(circle, #6366f1, #8b5cf6)' }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-3xl opacity-15"
          style={{ background: 'radial-gradient(circle, #0ea5e9, #6366f1)' }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle, #6366f120 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
          {/* Text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            

            {/* Main heading */}
            <motion.div variants={itemVariants}>
              <p
                className="text-base font-semibold mb-2 font-mono"
                style={{ color: '#6366f1' }}
              >
                Hi, I'm
              </p>
              <h1
                className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-4"
                style={{ color: 'var(--text-primary)' }}
              >
                Pavan
                <br />
                <span className="gradient-text">Yevle</span>
              </h1>
            </motion.div>

            {/* Role */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 mb-6">
              <span
                className="px-3 py-1.5 rounded-lg text-sm font-semibold"
                style={{ background: 'rgba(99,102,241,0.1)', color: '#6366f1' }}
              >
                React Native Developer
              </span>
              <span style={{ color: 'var(--text-secondary)' }}>·</span>
              <span
                className="px-3 py-1.5 rounded-lg text-sm font-semibold"
                style={{ background: 'rgba(14,165,233,0.1)', color: '#0284c7' }}
              >
                Mobile App Developer
              </span>
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={itemVariants}
              className="text-lg leading-relaxed mb-8 max-w-lg"
              style={{ color: 'var(--text-secondary)' }}
            >
              B.Tech Computer Engineering student passionate about crafting intuitive,
              high-performance mobile applications with React Native, Firebase, and clean UI design principles.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-8">
              <motion.a
                href="@projects"
                onClick={(e) => { e.preventDefault(); document.getElementById('projects').scrollIntoView({ behavior: 'smooth' }) }}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary"
              >
                View Projects
                <ArrowRight size={16} />
              </motion.a>
              <motion.a
                href="../assets/resume.pdf"
                download
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="btn-secondary"
              >
                <Download size={16} />
                Download Resume
              </motion.a>
            </motion.div>

            {/* Social links */}
            <motion.div variants={itemVariants} className="flex items-center gap-4">
              <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>Find me on</span>
              <div className="flex items-center gap-3">
                <motion.a
                  href="https://github.com/pavanyevle"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all"
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-secondary)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                  }}
                  aria-label="GitHub"
                >
                  <GithubIcon size={18} />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/pavanyevle"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all"
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-secondary)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                  }}
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={18} />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Floating decoration */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-4 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, #6366f1, #8b5cf6, #0ea5e9, #6366f1)',
                  opacity: 0.3,
                  filter: 'blur(2px)'
                }}
              />

              {/* Profile image container */}
              <div
                className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden animate-float"
                style={{
                  border: '4px solid rgba(99, 102, 241, 0.3)',
                  boxShadow: '0 20px 60px rgba(99, 102, 241, 0.2)'
                }}
              >
                <img
                  src={profileImg}
                  alt="Pavan Yevle - React Native Developer"
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay at bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-24"
                  style={{ background: 'linear-gradient(to top, rgba(99,102,241,0.2), transparent)' }}
                />
              </div>

              {/* Floating experience badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-4 -left-6 glass rounded-2xl px-4 py-3 shadow-xl"
                style={{ border: '1px solid rgba(99,102,241,0.2)' }}
              >
                <div className="flex items-center gap-2">
                  <Briefcase size={16} style={{ color: '#6366f1' }} />
                  <div>
                    <p className="text-xs font-semibold" style={{ color: 'var(--text-primary)' }}>Intern</p>
                    <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>Sumago Infotech</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating tech badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute -top-4 -right-6 glass rounded-2xl px-4 py-3 shadow-xl"
                style={{ border: '1px solid rgba(99,102,241,0.2)' }}
              >
                <div className="flex items-center gap-2">
                  <Sparkles size={16} style={{ color: '#8b5cf6' }} />
                  <div>
                    <p className="text-xs font-semibold" style={{ color: 'var(--text-primary)' }}>React Native</p>
                    <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>Developer</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs font-medium" style={{ color: 'var(--text-secondary)' }}>Scroll down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 rounded-full border-2 flex items-start justify-center p-1"
            style={{ borderColor: 'var(--border-color)' }}
          >
            <div className="w-1 h-2 rounded-full" style={{ background: '#6366f1' }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
