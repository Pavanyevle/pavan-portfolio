import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, User, Mail, FileText, MessageSquare, MapPin, CheckCircle } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // 'idle' | 'loading' | 'success' | 'error'
  const [errors, setErrors] = useState({})

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!form.email.trim()) errs.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Invalid email'
    if (!form.subject.trim()) errs.subject = 'Subject is required'
    if (!form.message.trim()) errs.message = 'Message is required'
    return errs
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(e => ({ ...e, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setStatus('loading')

    // Simulate form submission (replace with actual API call)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setStatus('success')
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setStatus('idle'), 4000)
  }

  const contactInfo = [
    {
      icon: <Mail size={18} />,
      label: 'Email',
      value: 'pavanyevle@gmail.com',
      link: 'mailto:pavanyevle@gmail.com',
      color: '#6366f1'
    },
    {
      icon: <GithubIcon size={18} />,
      label: 'GitHub',
      value: 'github.com/pavanyevle',
      link: 'https://github.com/pavanyevle',
      color: '#333'
    },
    {
      icon: <LinkedinIcon size={18} />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/pavanyevle',
      link: 'https://linkedin.com/in/pavanyevle',
      color: '#0a66c2'
    },
    {
      icon: <MapPin size={18} />,
      label: 'Location',
      value: 'Pune, Maharashtra, India',
      color: '#10b981'
    }
  ]

  return (
    <section
      id="contact"
      className="section-padding"
      style={{ background: 'linear-gradient(180deg, var(--bg-light) 0%, rgba(99,102,241,0.04) 100%)' }}
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
            <span>✉️</span> Contact
          </span>
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subtitle mx-auto text-center mt-2" style={{ color: 'var(--text-secondary)' }}>
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Get in Touch
            </h3>
            <p className="mb-8 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              I'm currently available for internships, freelance projects, and full-time opportunities.
              Whether you have a question or just want to say hi, my inbox is always open!
            </p>

            <div className="space-y-4">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${info.color}15`, color: info.color }}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs font-medium mb-0.5" style={{ color: 'var(--text-secondary)' }}>
                      {info.label}
                    </p>
                    {info.link ? (
                      <a
                        href={info.link}
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-sm font-semibold hover:underline transition-colors"
                        style={{ color: info.color }}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                        {info.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Available status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8 p-5 rounded-2xl"
              style={{
                background: 'rgba(16,185,129,0.08)',
                border: '1px solid rgba(16,185,129,0.2)'
              }}
            >
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full animate-pulse" style={{ background: '#10b981' }} />
                <div>
                  <p className="font-bold text-sm" style={{ color: '#059669' }}>
                    Available for opportunities
                  </p>
                  <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                    Open to internships, freelance, and full-time roles
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="card p-7">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                    style={{ background: 'rgba(16,185,129,0.1)' }}
                  >
                    <CheckCircle size={32} style={{ color: '#10b981' }} />
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                    Message Sent! 🎉
                  </h3>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    Thank you for reaching out. I'll get back to you soon!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                        Full Name *
                      </label>
                      <div className="relative">
                        <User size={15} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: 'var(--text-secondary)' }} />
                        <input
                          id="contact-name"
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="w-full pl-9 pr-4 py-2.5 rounded-xl text-sm outline-none transition-all"
                          style={{
                            background: 'var(--bg-light)',
                            border: `1px solid ${errors.name ? '#ef4444' : 'var(--border-color)'}`,
                            color: 'var(--text-primary)',
                            fontSize: '0.875rem'
                          }}
                          onFocus={e => e.target.style.borderColor = '#6366f1'}
                          onBlur={e => e.target.style.borderColor = errors.name ? '#ef4444' : 'var(--border-color)'}
                        />
                      </div>
                      {errors.name && <p className="text-xs mt-1" style={{ color: '#ef4444' }}>{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail size={15} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: 'var(--text-secondary)' }} />
                        <input
                          id="contact-email"
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="w-full pl-9 pr-4 py-2.5 rounded-xl text-sm outline-none transition-all"
                          style={{
                            background: 'var(--bg-light)',
                            border: `1px solid ${errors.email ? '#ef4444' : 'var(--border-color)'}`,
                            color: 'var(--text-primary)'
                          }}
                          onFocus={e => e.target.style.borderColor = '#6366f1'}
                          onBlur={e => e.target.style.borderColor = errors.email ? '#ef4444' : 'var(--border-color)'}
                        />
                      </div>
                      {errors.email && <p className="text-xs mt-1" style={{ color: '#ef4444' }}>{errors.email}</p>}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="mb-5">
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                      Subject *
                    </label>
                    <div className="relative">
                      <FileText size={15} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: 'var(--text-secondary)' }} />
                      <input
                        id="contact-subject"
                        type="text"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="Project Inquiry / Collaboration"
                        className="w-full pl-9 pr-4 py-2.5 rounded-xl text-sm outline-none transition-all"
                        style={{
                          background: 'var(--bg-light)',
                          border: `1px solid ${errors.subject ? '#ef4444' : 'var(--border-color)'}`,
                          color: 'var(--text-primary)'
                        }}
                        onFocus={e => e.target.style.borderColor = '#6366f1'}
                        onBlur={e => e.target.style.borderColor = errors.subject ? '#ef4444' : 'var(--border-color)'}
                      />
                    </div>
                    {errors.subject && <p className="text-xs mt-1" style={{ color: '#ef4444' }}>{errors.subject}</p>}
                  </div>

                  {/* Message */}
                  <div className="mb-6">
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                      Message *
                    </label>
                    <div className="relative">
                      <MessageSquare size={15} className="absolute left-3 top-3" style={{ color: 'var(--text-secondary)' }} />
                      <textarea
                        id="contact-message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Tell me about your project or just say hello..."
                        className="w-full pl-9 pr-4 py-2.5 rounded-xl text-sm outline-none transition-all resize-none"
                        style={{
                          background: 'var(--bg-light)',
                          border: `1px solid ${errors.message ? '#ef4444' : 'var(--border-color)'}`,
                          color: 'var(--text-primary)'
                        }}
                        onFocus={e => e.target.style.borderColor = '#6366f1'}
                        onBlur={e => e.target.style.borderColor = errors.message ? '#ef4444' : 'var(--border-color)'}
                      />
                    </div>
                    {errors.message && <p className="text-xs mt-1" style={{ color: '#ef4444' }}>{errors.message}</p>}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={status === 'loading'}
                    whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary w-full justify-center"
                    style={{ opacity: status === 'loading' ? 0.8 : 1 }}
                  >
                    {status === 'loading' ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={15} />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
