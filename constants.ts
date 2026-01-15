import { 
  Code, Shield, Bot, Briefcase, 
  Globe, Server, Cpu, Zap 
} from 'lucide-react';
import { Wing, Project, TeamMember, Milestone } from './types';

export const WINGS: Wing[] = [
  {
    id: 'software',
    name: 'Software Mechanism',
    tagline: 'Digital Foundations',
    description: 'Building scalable cloud architectures and next-gen web applications.',
    icon: Code,
    color: 'text-cyan-500',
    techStack: ['React', 'Node.js', 'AWS', 'Docker', 'GraphQL'],
    features: ['Custom ERP Solutions', 'SaaS Development', 'Cloud Migration']
  },
  {
    id: 'security',
    name: 'Cyber-Shield',
    tagline: 'Impenetrable Defense',
    description: 'Advanced penetration testing and enterprise security architecture.',
    icon: Shield,
    color: 'text-orange-500',
    techStack: ['Kali Linux', 'Python', 'Metasploit', 'SentinelOne'],
    features: ['Security Audits', 'Threat Intelligence', 'Zero Trust Architecture']
  },
  {
    id: 'robotics',
    name: 'Robotics & Automation',
    tagline: 'Physical Intelligence',
    description: 'Bridging the gap between digital AI and physical action.',
    icon: Bot,
    color: 'text-purple-500',
    techStack: ['ROS', 'C++', 'Computer Vision', 'IoT'],
    features: ['Industrial Automation', 'Autonomous Drones', 'Smart Manufacturing']
  },
  {
    id: 'consultancy',
    name: 'Tech Consultancy',
    tagline: 'Strategic Vision',
    description: 'Guiding enterprises through digital transformation.',
    icon: Briefcase,
    color: 'text-emerald-500',
    techStack: ['Big Data', 'BI Tools', 'Agile', 'Six Sigma'],
    features: ['Digital Transformation', 'IT Strategy', 'Market Analysis']
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Nexus Financial Core',
    category: 'Software',
    client: 'FinGlobal Bank',
    challenge: 'Legacy systems causing 40% downtime during peak trading.',
    solution: 'Microservices architecture migration using Kubernetes and Go.',
    impact: '99.99% Uptime, 300% faster transaction processing.',
    image: 'https://picsum.photos/800/600?random=1'
  },
  {
    id: '2',
    title: 'Aegis Defense Grid',
    category: 'Security',
    client: 'GovTech Agency',
    challenge: 'Vulnerability to zero-day exploits in sensitive data pipelines.',
    solution: 'Implementation of AI-driven anomaly detection and air-gapped backups.',
    impact: 'Secured 5PB of national data; detected 50+ intrusive attempts.',
    image: 'https://picsum.photos/800/600?random=2'
  },
  {
    id: '3',
    title: 'Auto-Logistics Bot',
    category: 'Robotics',
    client: 'MegaShip Logistics',
    challenge: 'Inefficient warehouse sorting leading to shipping delays.',
    solution: 'Fleet of autonomous mobile robots (AMRs) with swarm intelligence.',
    impact: 'Reduced sorting time by 65%, eliminated human error.',
    image: 'https://picsum.photos/800/600?random=3'
  },
  {
    id: '4',
    title: 'Smart City Initiative',
    category: 'Consultancy',
    client: 'Metropolis Council',
    challenge: 'Disjointed public services and traffic congestion.',
    solution: 'Unified IoT data strategy and centralized command center dashboard.',
    impact: 'Traffic flow improved by 25%, energy usage dropped by 15%.',
    image: 'https://picsum.photos/800/600?random=4'
  }
];

export const TEAM: TeamMember[] = [
  {
    id: '1',
    name: 'Dr. Alistair Thorne',
    role: 'CEO & Founder',
    bio: 'Visionary architect of the Techtonic Ecosystem. Former AI research lead.',
    image: 'https://picsum.photos/400/400?random=10',
    linkedin: '#'
  },
  {
    id: '2',
    name: 'Sarah Jenning',
    role: 'CTO - Software',
    bio: 'Full-stack pioneer specializing in distributed cloud systems.',
    image: 'https://picsum.photos/400/400?random=11',
    linkedin: '#'
  },
  {
    id: '3',
    name: 'Marcus Chen',
    role: 'Head of Robotics',
    bio: 'Mechatronics expert with 15 patents in autonomous navigation.',
    image: 'https://picsum.photos/400/400?random=12',
    linkedin: '#'
  },
  {
    id: '4',
    name: 'Elena Rostova',
    role: 'CISO - Security',
    bio: 'Ex-military cyber defense analyst ensuring impenetrable systems.',
    image: 'https://picsum.photos/400/400?random=13',
    linkedin: '#'
  }
];

export const TIMELINE: Milestone[] = [
  { year: '2025', title: 'The Genesis', description: 'Techtonic consolidates 4 independent entities into one ecosystem.' },
  { year: '2026', title: 'AI Integration', description: 'Launch of proprietary Generative AI engine for enterprise code.' },
  { year: '2027', title: 'Quantum Readiness', description: 'R&D Lab begins testing quantum-resistant encryption protocols.' },
  { year: '2028', title: 'Bio-Tech Interface', description: 'Expansion into neural interface software for medical prosthetics.' },
];