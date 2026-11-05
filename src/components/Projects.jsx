import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, ArrowRight } from 'lucide-react'
import { GithubIcon } from './Icons'
import workwiseImg from '../assets/project-workwise.jpg'
import connectImg from '../assets/project-connect.jpg'
import roboticDogImg from '../assets/project-robotic-dog.jpg'

const projects = [
  {
    id: 1,
    title: 'WorkWise',
    category: 'Mobile App',
    description:
      'A comprehensive productivity and work management application built with React Native. Features task tracking, project management, calendar integration, deadline reminders, and team collaboration tools — all in a clean, intuitive interface.',
    longDesc:
      'WorkWise empowers professionals to manage their workflow effortlessly. It supports task categorization, priority setting, real-time progress tracking, and push notifications for deadlines.',
    image: workwiseImg,
    tags: ['React Native', 'Firebase', 'JavaScript', 'Figma'],
    color: '#6366f1',
    bgGradient: 'linear-gradient(135deg, rgba(99,102,241,0.1), rgba(139,92,246,0.05))',
    github: 'https://github.com/pavanyevle/workwise',
    demo: null,
    featured: true,
    emoji: '📋'
  },
  {
    id: 2,
    title: 'Connect',
    category: 'Full Stack App',
    description:
      'A real-time messaging application with Firebase authentication and Socket.IO. Features include one-on-one and group chats, online presence indicators, message read receipts, media sharing, and secure user authentication.',
    longDesc:
      'Connect delivers a seamless chat experience with real-time message delivery, typing indicators, and an elegant dark-themed UI inspired by modern messaging platforms.',
    image: connectImg,
    tags: ['React Native', 'Socket.IO', 'Firebase', 'Node.js', 'Express.js'],
    color: '#0ea5e9',
    bgGradient: 'linear-gradient(135deg, rgba(14,165,233,0.1), rgba(99,102,241,0.05))',
    github: 'https://github.com/pavanyevle/connect',
    demo: null,
    featured: true,
    emoji: '💬'
  },
  {
    id: 3,
    title: 'Robotic Dog',
    category: 'Robotics / IoT',
    description:
      'An ESP32-based quadruped robot that mimics dog locomotion. Controlled via Bluetooth using a custom mobile app. Features servo-driven leg movement, gait algorithms, real-time wireless control, and obstacle sensing.',
    longDesc:
      'This project demonstrates the intersection of hardware and software — integrating ESP32 microcontrollers, 12 servo motors, and a custom-built Bluetooth mobile control app for fluid quadruped movement.',
    image: roboticDogImg,
    tags: ['ESP32', 'C/C++', 'Bluetooth', 'React Native', 'IoT'],
    color: '#10b981',
    bgGradient: 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(14,165,233,0.05))',
    github: 'https://github.com/pavanyevle/robotic-dog',
    demo: null,
    featured: false,
    emoji: '🤖'
  }
]

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative rounded-2xl overflow-hidden cursor-default"
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-color)',
        boxShadow: hovered
          ? `0 24px 60px ${project.color}20`
          : '0 2px 12px rgba(0,0,0,0.05)',
        transition: 'all 0.4s ease'
      }}
    >
      {/* Project image */}
      <div className="relative h-52 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{ scale: hovered ? 1.06 : 1 }}
          transition={{ duration: 0.4 }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, transparent 50%, ${project.color}30)`,
          }}
        />
        {/* Category badge */}
        <div
          className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white backdrop-blur-sm"
          style={{ background: `${project.color}cc` }}
        >
          {project.emoji} {project.category}
        </div>
        {project.featured && (
          <div
            className="absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-bold"
            style={{ background: 'rgba(255,255,255,0.9)', color: project.color }}
          >
            ⭐ Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3
          className="text-xl font-bold mb-2 group-hover:text-indigo-500 transition-colors"
          style={{ color: 'var(--text-primary)' }}
        >
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-lg text-xs font-medium"
              style={{
                background: `${project.color}12`,
                color: project.color,
                border: `1px solid ${project.color}30`
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-3">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all"
            style={{
              background: 'var(--border-color)',
              color: 'var(--text-primary)'
            }}
          >
            <GithubIcon size={15} />
            GitHub
          </motion.a>
          {project.demo && (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all"
              style={{ background: `linear-gradient(135deg, ${project.color}, ${project.color}99)` }}
            >
              <ExternalLink size={15} />
              Live Demo
            </motion.a>
          )}
          <motion.button
            whileHover={{ x: 3 }}
            className="ml-auto flex items-center gap-1 text-sm font-medium"
            style={{ color: project.color }}
          >
            Details <ArrowRight size={14} />
          </motion.button>
        </div>
      </div>

      {/* Bottom accent line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ background: `linear-gradient(90deg, ${project.color}, ${project.color}44)`, transformOrigin: 'left' }}
      />
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section
      id="projects"
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
            <span>🚀</span> Projects
          </span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="section-subtitle mx-auto text-center mt-2" style={{ color: 'var(--text-secondary)' }}>
            A selection of projects I've built — from mobile apps to robotics
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* View more */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-10"
        >
          <motion.a
            href="https://github.com/pavanyevle"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="btn-secondary inline-flex"
          >
            <GithubIcon size={16} />
            View All on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
