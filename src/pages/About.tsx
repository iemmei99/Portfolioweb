import { useState, useEffect } from 'react';
import { MapPin, Github, Linkedin, Mail, Download, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../utils';
import avatarImage from '../assets/images/regenerated_image_1782375360979.jpg';
import ibmCertImage from '../assets/images/regenerated_image_1785437201706.jpg';
import ninjaCertImage from '../assets/images/ninja_cert.jpg';

const MENU = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
];

const EXPERIENCES = [
  {
    company: 'FPT SOFTWARE',
    role: 'Business Analyst Trainee',
    project: '(Assistant Agent for PM project)',
    time: '05/2026 - Present',
    description: [
      '<strong>Requirements Analysis:</strong> Collected and clarified requirements with the PM and stakeholders; defined scope, business rules, and acceptance criteria for the feature.',
      '<strong>Agent Logic Design:</strong> Analyzed factors affecting project progress and defined risk evaluation principles, risk classification rules, conversation flow, and Agent response behavior.',
      '<strong>Backlog Management:</strong> Decomposed requirements into user stories and development tasks; prioritized items and supported Developers in requirement clarification during implementation.',
      '<strong>Process Modeling:</strong> Designed BPMN, Sequence Diagrams, and other process models to illustrate interactions between users, the Agent, and system components.',
      '<strong>Adaptive Card UI Design:</strong> Defined how risk information, status, and key actions are presented to users in a structured and interactive format.',
      '<strong>Documentation Development:</strong> Created User Guide, SRS/Technical Specifications, data dictionaries, and change logs.',
      '<strong>Testing & Implementation Support:</strong> Developed test scenarios, collaborated with Developers and Tester to clarify requirements, reviewed implementation outputs, and supported feature acceptance.'
    ]
  },
  {
    company: 'WOODCHILL AWPC JSC',
    role: 'E-commerce Executive - Etsy Platform',
    time: '09/2025 - 04/2026',
    description: [
      '<strong>Business Operations Analysis:</strong> Developed a strong understanding of end-to-end e-commerce operations and continuously monitored Etsy platform policies, processes, and market changes.',
      '<strong>Root Cause Analysis:</strong> Analyzed the causes of order delays across production, fulfillment, shipping, customer service, and after-sales processes; contributed to workflow improvements and cross-functional coordination.',
      '<strong>AI-powered Process Improvement:</strong> Integrated AI into product research and listing workflows, reducing listing time by approximately 60%, increasing listing productivity by up to 2x, and contributing to a 1.5x increase in revenue.',
      '<strong>Workflow Automation:</strong> Designed automated workflows using chatbot APIs to streamline repetitive tasks and improve operational efficiency.',
      '<strong>Customer Experience:</strong> Created structured product descriptions using HTML, improving content readability and the overall customer browsing experience.'
    ]
  }
];

type EducationType = {
  school: string;
  degree: string;
  time: string;
  description: string[];
  certificateImage?: string;
  certificateLink?: string;
  skills?: string[];
};

const EDUCATIONS: EducationType[] = [
  {
    school: 'THUONGMAI UNIVERSITY (TMU)',
    degree: 'Bachelor’s Degree in Marketing',
    time: '2022 - 2026',
    description: [
      'Graduated with <strong>Excellence</strong>. <strong>GPA: 3.63/4.0</strong>',
      'Awarded the <strong>“Student of Five Merits”</strong> title.',
      '<strong>Third Prize</strong> in the University Student Scientific Research Competition.',
      'Received an <strong>Academic Excellence Scholarship</strong> in 2 out of 8 semesters'
    ]
  },
  {
    school: 'IBM',
    degree: 'Introduction to Business Analysis',
    time: '',
    description: [],
    certificateImage: ibmCertImage,
    skills: [
      'Stakeholder Communications',
      'Business Requirements',
      'Requirements Elicitation',
      'Business Analysis Tools',
      'Technology Strategies',
      'Digital Transformation',
      'Business Analysis',
      'Process Modeling',
      'Project Management'
    ]
  },
  {
    school: 'NINJA BA Academy',
    degree: 'Business Analysis Foundation',
    time: '',
    description: [],
    certificateImage: ninjaCertImage,
    skills: [
      'SDLC',
      'Agile vs Waterfall',
      'Elicit BA Information',
      'Business Process Model',
      'Draw.io & Figma',
      'User Story',
      'Acceptance criteria, Jira',
      'Use Case Diagram & Specification',
      'Sequence, Activities Diagram',
      'ERD',
      'Structured Query Language (SQL)',
      'BRD, SRS, FSD'
    ]
  }
];

const SKILL_GROUPS = [
  {
    title: 'Business Analysis (BA)',
    description: 'Core competencies in requirements elicitation, analysis, and business solution modeling.',
    skills: ['BPMN 2.0', 'UML', 'User Stories', 'Agile/Scrum', 'Data Analysis', 'SQL', 'Jira', 'Confluence']
  },
  {
    title: 'BA Tools',
    description: 'Proficiency in tools for BA operations and development workflows.',
    skills: ['Draw.io', 'Figma', 'PlantUML', 'Lucidchart', 'Camunda', 'Claude.ai', 'Stitch', 'Jira', 'NotebookLM', 'Google AI Studio', 'Claude']
  },
  {
    title: 'Soft Skills',
    description: 'Communication and thinking skills that engage stakeholders.',
    skills: ['Problem Solving', 'Critical Thinking', 'Stakeholder Management', 'Presentation', 'Time Management']
  },
  {
    title: 'Language',
    description: '',
    skills: ['IELTS 6.0']
  }
];

export default function About() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = MENU.map(m => document.getElementById(m.id));
      let current = 'about';
      for (const section of sections) {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 200) {
            current = section.id;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 100, behavior: 'smooth' });
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="max-w-4xl mx-auto px-6 grid grid-cols-12 gap-8 items-start mt-8"
    >
      {/* Sidebar */}
      <aside className="hidden md:block col-span-3 sticky top-28 space-y-6">
        <div className="space-y-3">
          <img 
            src={avatarImage} 
            alt="Vũ Thị Thảo Vân" 
            className="w-24 h-24 rounded-full border-2 border-white/50 dark:border-gray-800 shadow-sm object-cover"
          />
          
          <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 font-medium">
            <MapPin className="w-3.5 h-3.5 text-red-500" />
            Viet Nam / Ha Noi
          </div>
        </div>

        <nav className="flex flex-col gap-2">
          {MENU.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={cn(
                  "flex items-center gap-2 text-[13px] transition-all py-1 group w-fit",
                  isActive ? "text-[#111111] dark:text-white font-bold" : "text-gray-500 dark:text-gray-400 font-medium hover:text-[#111111] dark:hover:text-white"
                )}
              >
                <span className={cn(
                  "h-[2px] bg-[#111111] dark:bg-white transition-all duration-300",
                  isActive ? "w-4 opacity-100" : "w-0 opacity-0 group-hover:w-2 group-hover:opacity-50 group-hover:bg-gray-400"
                )} />
                {item.label}
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="col-span-12 md:col-span-9 min-h-[60vh] pb-32 space-y-20">
        
        {/* Section 1: About */}
        <section id="about" className="space-y-6 pt-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#111111] dark:text-white leading-tight">
              Vu Thi Thao Van <span className="text-gray-300 dark:text-gray-600 font-light mx-1 md:mx-2">/</span> <span className="text-gray-600 dark:text-gray-300">Sylvia</span>
            </h1>
            <p className="text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 uppercase tracking-wider">
              Business Analyst
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a href="mailto:vttvaninfo@gmail.com" className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/50 dark:bg-black/50 backdrop-blur-md border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-all text-xs font-semibold text-[#111111] dark:text-white hover:text-blue-500 dark:hover:text-blue-400">
              <Mail className="w-3.5 h-3.5" /> vttvaninfo@gmail.com
            </a>
            <a href="tel:+84396542662" className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/50 dark:bg-black/50 backdrop-blur-md border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-all text-xs font-semibold text-[#111111] dark:text-white hover:text-blue-500 dark:hover:text-blue-400">
              <Phone className="w-3.5 h-3.5" /> +84 39 654 2662
            </a>
            <a href="https://www.linkedin.com/in/sylvia-van-thao-98a084285/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/50 dark:bg-black/50 backdrop-blur-md border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-all text-xs font-semibold text-[#111111] dark:text-white hover:text-blue-500 dark:hover:text-blue-400">
              <Linkedin className="w-3.5 h-3.5" /> LinkedIn
            </a>
            <a href="#" className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/50 dark:bg-black/50 backdrop-blur-md border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-all text-xs font-semibold text-[#111111] dark:text-white hover:text-blue-500 dark:hover:text-blue-400">
              <Github className="w-3.5 h-3.5" /> GitHub
            </a>
          </div>

          <div className="prose prose-sm prose-gray dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 leading-relaxed space-y-4 font-medium">
            <p className="text-[#111111] dark:text-white text-base">
              Hello! I am Sylvia Van Thao, an aspiring Business Analyst with hands-on experience in AI-enabled project management solutions and e-commerce operations.
            </p>
            <p>
              My strengths lie in domain research, problem analysis, process modeling, and translating business needs into clear requirements, user flows, and structured specifications to build practical and user-centered digital solutions.
            </p>
          </div>

          <div className="pt-2">
            <a href="https://drive.google.com/drive/u/0/folders/1Mke3fU7h6ZbkpzigF7cgoS7l5M0iQ5Hu" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#111111] dark:border-white text-[#111111] dark:text-white text-xs font-bold hover:bg-[#111111] dark:hover:bg-white hover:text-white dark:hover:text-black transition-all shadow-sm hover:shadow-md">
              <Download className="w-4 h-4" />
              Download my CV
            </a>
          </div>
        </section>

        {/* Section 2: Experience */}
        <section id="experience" className="space-y-8 pt-4">
          <h2 className="text-2xl font-bold tracking-tight text-[#111111] dark:text-white">
            Experience
          </h2>
          
          <div className="space-y-10">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="relative pl-6 border-l border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-400 transition-colors duration-300 group">
                <div className="absolute w-3 h-3 bg-white dark:bg-black border-2 border-gray-200 dark:border-gray-800 rounded-full -left-[6.5px] top-1 group-hover:border-blue-500 dark:group-hover:border-blue-400 transition-colors duration-300" />
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-[#111111] dark:text-white">{exp.company}</h3>
                  <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 bg-white/50 dark:bg-black/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 shadow-sm px-3 py-1 rounded-full w-fit">
                    {exp.time}
                  </span>
                </div>
                
                <div className="text-blue-500 dark:text-blue-400 font-bold text-sm mb-3">
                  {exp.role}
                </div>
                
                {exp.project && (
                  <div className="text-gray-700 dark:text-gray-300 font-normal text-sm mb-3">
                    {exp.project}
                  </div>
                )}
                
                <ul className="list-disc list-outside ml-4 text-gray-700 dark:text-gray-300 text-sm space-y-2 leading-relaxed font-normal">
                  {exp.description.map((item, i) => (
                    <li key={i} className="pl-1" dangerouslySetInnerHTML={{ __html: item }} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Education */}
        <section id="education" className="space-y-8 pt-4">
          <h2 className="text-2xl font-bold tracking-tight text-[#111111] dark:text-white">
            Education & Certificates
          </h2>
          
          <div className="space-y-10">
            {EDUCATIONS.map((edu, idx) => (
              <div key={idx} className="relative pl-6 border-l border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-400 transition-colors duration-300 group">
                <div className="absolute w-3 h-3 bg-white dark:bg-black border-2 border-gray-200 dark:border-gray-800 rounded-full -left-[6.5px] top-1 group-hover:border-blue-500 dark:group-hover:border-blue-400 transition-colors duration-300" />
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg font-bold text-[#111111] dark:text-white">{edu.school}</h3>
                  {edu.time && (
                    <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 bg-white/50 dark:bg-black/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 shadow-sm px-3 py-1 rounded-full w-fit">
                      {edu.time}
                    </span>
                  )}
                </div>
                
                <div className="text-blue-500 dark:text-blue-400 font-bold text-sm mb-3">
                  {edu.degree}
                </div>
                
                {edu.description.length > 0 && (
                  <ul className="list-disc list-outside ml-4 text-gray-700 dark:text-gray-300 text-sm space-y-2 leading-relaxed font-normal mb-3">
                    {edu.description.map((item, i) => (
                      <li key={i} className="pl-1" dangerouslySetInnerHTML={{ __html: item }} />
                    ))}
                  </ul>
                )}

                {(edu.skills && edu.skills.length > 0) && (
                  <div className="flex flex-wrap gap-2 mb-3 mt-1">
                    {edu.skills.map((skill, i) => (
                      <span 
                        key={i} 
                        className="px-2.5 py-1 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/50 text-gray-600 dark:text-gray-300 text-[11px] font-semibold rounded-md hover:border-blue-400 dark:hover:border-blue-500 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                {edu.certificateImage && (
                  <div className="mt-4 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all w-48 group">
                    {edu.certificateLink ? (
                      <a href={edu.certificateLink} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                        <img src={edu.certificateImage} alt={`${edu.degree} Certificate`} className="block w-full h-auto group-hover:scale-[1.02] transition-transform duration-300 object-cover" />
                      </a>
                    ) : (
                      <img src={edu.certificateImage} alt={`${edu.degree} Certificate`} className="block w-full h-auto group-hover:scale-[1.02] transition-transform duration-300 object-cover border border-gray-200 dark:border-gray-800 rounded-lg" />
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Skills */}
        <section id="skills" className="space-y-8 pt-4">
          <h2 className="text-2xl font-bold tracking-tight text-[#111111] dark:text-white">
            Professional Skills
          </h2>
          
          <div className="grid gap-6">
            {SKILL_GROUPS.map((group, idx) => (
              <div key={idx} className="bg-white/40 dark:bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-lg font-bold text-[#111111] dark:text-white mb-2">{group.title}</h3>
                {group.description && (
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-5 max-w-xl font-medium leading-relaxed">{group.description}</p>
                )}
                
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className={`px-3 py-1.5 bg-white/80 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-[#111111] dark:text-gray-200 text-xs font-semibold rounded-lg hover:border-blue-400 dark:hover:border-blue-500 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 shadow-sm cursor-default ${!group.description ? 'mt-4' : ''}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </motion.div>
  );
}
