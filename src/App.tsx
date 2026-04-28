import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, 
  Search, 
  MessageSquare, 
  Lightbulb, 
  ArrowRight, 
  Mail, 
  Linkedin, 
  Twitter, 
  ExternalLink,
  ChevronRight,
  Monitor,
  Smartphone,
  Layers,
  Menu,
  X
} from 'lucide-react';

// --- Types ---

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  methodology: string[];
  impact: string;
  image: string;
  color: string;
}

interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
}

// --- Data ---

const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'E-commerce Checkout Optimization',
    category: 'UX Research',
    description: 'Investigating purchase friction points for a global fashion retailer. Reduced cart abandonment by 15% through data-driven design changes.',
    methodology: ['Usability Testing', 'Card Sorting', 'Interviews'],
    impact: '15% increase in conversion rate.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800',
    color: 'bg-brand-blue/10 backdrop-blur-sm'
  },
  {
    id: '2',
    title: 'Fintech Mobile App Evolution',
    category: 'Product Strategy',
    description: 'Long-term foundational research to understand Gen Z spending habits. Informed the 2024 product roadmap and new features.',
    methodology: ['Diary Studies', 'Contextual Inquiry', 'Surveys'],
    impact: 'Influenced 4 major feature launches.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
    color: 'bg-brand-pink/10 backdrop-blur-sm'
  },
  {
    id: '3',
    title: 'Health-Tech Patient Portal',
    category: 'Accessibility',
    description: 'Ensuring digital equity for seniors by redesigning health record visualization. Focused on WCAG compliance and cognitive load.',
    methodology: ['Accessibility Audit', 'Cognitive Walkthrough', 'A/B Testing'],
    impact: 'Achieved AA accessibility rating.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
    color: 'bg-brand-mint/10 backdrop-blur-sm'
  }
];

const EXPERIENCES: Experience[] = [
  {
    id: 'exp1',
    role: 'UX Research Intern',
    company: 'TechFlow Solutions',
    period: 'June 2024 - Present',
    description: [
      'Leading usability tests for the new enterprise dashboard.',
      'Synthesizing qualitative data from 20+ user interviews into actionable insights.',
      'Collaborating with PMs and designers to iterate on low-fidelity prototypes.'
    ],
    skills: ['Figma', 'UserTesting', 'Qualtrics']
  },
  {
    id: 'exp2',
    role: 'Product Development Intern',
    company: 'GreenHorizon Tech',
    period: 'Jan 2024 - May 2024',
    description: [
      'Conducted market research and competitive analysis for eco-tracking features.',
      'Assisted in designing user journey maps and personas for diverse user segments.',
      'Presented research findings to stakeholders twice monthly.'
    ],
    skills: ['Miro', 'Hotjar', 'Market Analysis']
  }
];

const SKILLS = {
  research: ['Usability Testing', 'User Interviews', 'Survey Design', 'Card Sorting', 'Ethnographic Research', 'Content Audit'],
  tools: ['Figma', 'Dovetail', 'UserTesting', 'Optimal Workshop', 'Miro', 'Hotjar'],
  soft: ['Communication', 'Empathy', 'Critical Thinking', 'Stakeholder Management', 'Presentation']
};

// --- Components ---

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.a 
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold tracking-tighter flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center text-white">
            <Search size={18} />
          </div>
          <span>Alex<span className="text-brand-blue">Researches</span></span>
        </motion.a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition-all"
          >
            Let's Talk
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-slate-600"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold tracking-wider uppercase mb-6">
              Available for Internships & Collaborations
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-8 text-balance">
              Bridging the gap between <span className="text-brand-blue">human behavior</span> and <span className="text-brand-pink">digital experiences</span>.
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl leading-relaxed mb-10">
              User Researcher dedicated to unearthing meaningful insights through empathetic inquiry and data-driven analysis. Transforming complex problems into intuitive solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#work" className="bg-brand-blue text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-brand-blue/20 transition-all flex items-center gap-2">
                View My Case Studies <ArrowRight size={18} />
              </a>
              <a href="#contact" className="bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-bold hover:border-slate-300 transition-all">
                Get In Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="work" className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold mb-4 italic">01. Selected Works</h2>
              <p className="text-slate-500 max-w-md">A collection of research projects focusing on user-centric problem solving.</p>
            </div>
            <div className="flex gap-2">
              {['Methodology', 'Insights', 'Impact'].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-white border border-slate-200 rounded-md text-xs text-slate-500 font-medium">#{tag}</span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className={`relative aspect-[4/3] rounded-3xl overflow-hidden mb-6 ${project.color}`}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                    <span className="text-white font-bold flex items-center gap-2">
                      Read Full Case Study <ExternalLink size={16} />
                    </span>
                  </div>
                </div>
                <span className="text-xs font-bold text-brand-blue uppercase tracking-widest block mb-2">{project.category}</span>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-brand-blue transition-colors italic">{project.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.methodology.map(m => (
                    <span key={m} className="px-2 py-1 bg-slate-200 rounded text-[10px] font-bold text-slate-600">{m}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-bold mb-6 italic">02. Internship Journey</h2>
            <p className="text-slate-500 mb-8 leading-relaxed">
              My professional path is built on curiosity and a drive to understand people. Here's where I've been applying my research skills in the real world.
            </p>
            <div className="bg-brand-blue/5 p-8 rounded-3xl border border-brand-blue/10">
              <h4 className="font-bold flex items-center gap-2 mb-4">
                <Lightbulb className="text-brand-blue" /> Career Goal
              </h4>
              <p className="text-sm text-slate-600 italic">
                "To democratize user insights across product teams and advocate for accessible, human-first design in every pixel."
              </p>
            </div>
          </div>
          <div className="lg:col-span-7 space-y-10">
            {EXPERIENCES.map((exp) => (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l-2 border-slate-100 hover:border-brand-blue transition-colors group"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-slate-200 group-hover:border-brand-blue transition-colors" />
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold italic">{exp.role}</h3>
                    <p className="text-brand-blue font-semibold">{exp.company}</p>
                  </div>
                  <span className="text-sm font-medium text-slate-400 mt-1 md:mt-0">{exp.period}</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-slate-600 text-sm">
                      <ChevronRight size={16} className="text-brand-blue flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map(s => (
                    <span key={s} className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-full text-xs text-slate-500 font-medium">
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 italic">03. Practical Expertise</h2>
            <p className="text-slate-400">The mix of methodology and tooling that drives my process.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-brand-blue/20 rounded-2xl text-brand-blue">
                  <Search size={24} />
                </div>
                <h3 className="text-xl font-bold">Research</h3>
              </div>
              <ul className="space-y-4">
                {SKILLS.research.map(skill => (
                  <li key={skill} className="flex items-center gap-3 text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-brand-pink/20 rounded-2xl text-brand-pink">
                  <Layers size={24} />
                </div>
                <h3 className="text-xl font-bold">Toolkit</h3>
              </div>
              <ul className="space-y-4">
                {SKILLS.tools.map(skill => (
                  <li key={skill} className="flex items-center gap-3 text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-pink" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-brand-mint/20 rounded-2xl text-brand-mint">
                  <MessageSquare size={24} />
                </div>
                <h3 className="text-xl font-bold">Collaborative</h3>
              </div>
              <ul className="space-y-4">
                {SKILLS.soft.map(skill => (
                  <li key={skill} className="flex items-center gap-3 text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-mint" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-brand-peach/10 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-peach/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-blue/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight italic">Let's create something<br />human-centric.</h2>
            <p className="text-slate-600 mb-10 max-w-lg mx-auto">
              Currently looking for my next research opportunity. Whether it's a project or just a coffee chat about UX, I'd love to hear from you.
            </p>
            <div className="flex flex-col items-center gap-6">
              <a href="mailto:hello@alexresearches.com" className="text-2xl md:text-3xl font-bold text-slate-900 border-b-2 border-brand-peach hover:text-brand-peach transition-all">
                hello@alexresearches.com
              </a>
              <div className="flex gap-6 mt-4">
                {[
                  { icon: Linkedin, href: '#' },
                  { icon: Twitter, href: '#' },
                  { icon: Mail, href: 'mailto:hello@alexresearches.com' }
                ].map((social, i) => (
                  <a key={i} href={social.href} className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-400 hover:text-brand-peach transition-all">
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-400 font-medium">
        <p>© 2026 Alex Researcher. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-slate-900 transition-colors">Resume (PDF)</a>
        </div>
      </footer>
    </div>
  );
}
