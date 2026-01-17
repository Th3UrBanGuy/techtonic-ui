// Content storage service for Innovation and Portfolio dynamic content
import { TechStackItem, RoadmapItem, ProjectItem } from '../types';

// Storage keys
const TECH_STACK_KEY = 'techtonic_tech_stack';
const ROADMAP_KEY = 'techtonic_roadmap';
const PROJECTS_KEY = 'techtonic_projects';

// Default data migrated from existing constants
export const DEFAULT_TECH_STACK: TechStackItem[] = [
    {
        id: 'tech_1',
        name: 'MERN STACK',
        version: 'V_8.4',
        status: 'SCALING',
        iconName: 'Layers',
        color: 'text-cyan-400',
        order: 0
    },
    {
        id: 'tech_2',
        name: 'NEXT.JS',
        version: 'V_14',
        status: 'OPTIMIZED',
        iconName: 'Zap',
        color: 'text-white',
        order: 1
    },
    {
        id: 'tech_3',
        name: 'CLOUD NATIVE',
        version: 'TERRAFORM',
        status: 'DEPLOYED',
        iconName: 'Cloud',
        color: 'text-blue-400',
        order: 2
    },
    {
        id: 'tech_4',
        name: 'RUST CORE',
        version: 'LOW_LATENCY',
        status: 'STABLE',
        iconName: 'Cpu',
        color: 'text-orange-400',
        order: 3
    },
    {
        id: 'tech_5',
        name: 'GRAPH DB',
        version: 'NEO4J',
        status: 'CONNECTED',
        iconName: 'Network',
        color: 'text-purple-400',
        order: 4
    },
    {
        id: 'tech_6',
        name: 'ROBOTICS OS',
        version: 'ROS_2',
        status: 'ACTIVE',
        iconName: 'Bot',
        color: 'text-green-400',
        order: 5
    }
];

export const DEFAULT_ROADMAP: RoadmapItem[] = [
    {
        id: 'roadmap_1',
        refId: 'R-2025-A',
        quarter: 'Q1 2025',
        title: 'QUANTUM ENCRYPTION',
        description: 'Post-quantum cryptographic layers for the core cyber infrastructure.',
        progress: 65,
        status: 'IN_PROGRESS',
        colorTheme: 'from-blue-600/20 to-blue-900/10',
        order: 0
    },
    {
        id: 'roadmap_2',
        refId: 'B-2026-X',
        quarter: 'Q4 2026',
        title: 'BIOTECH INTERFACES',
        description: 'Neural link protocols for seamless man-machine integration in robotic wings.',
        progress: 15,
        status: 'INITIAL_CONCEPT',
        colorTheme: 'from-purple-600/20 to-purple-900/10',
        order: 1
    },
    {
        id: 'roadmap_3',
        refId: 'S-2027-V',
        quarter: '2027 PROJECT',
        title: 'AUTONOMOUS COLONIES',
        description: 'Self-repairing software architecture with genetic algorithmic evolution.',
        progress: 0,
        status: 'SCHEDULED',
        colorTheme: 'from-gray-700/20 to-gray-900/10',
        order: 2
    },
    {
        id: 'roadmap_4',
        refId: 'G-2028-Z',
        quarter: '2028 VIS',
        title: 'GENETIC ALGO',
        description: 'Synthesis of biological data storage with silicon based processors.',
        progress: 0,
        status: 'HYPOTHETICAL',
        colorTheme: 'from-gray-700/20 to-gray-900/10',
        order: 3
    }
];

export const DEFAULT_PROJECTS: ProjectItem[] = [
    {
        id: 'proj_1',
        title: 'Nexus Financial Core',
        category: 'Software',
        client: 'FinGlobal Bank',
        challenge: 'Legacy systems causing 40% downtime during peak trading.',
        solution: 'Microservices architecture migration using Kubernetes and Go.',
        impact: '99.99% Uptime, 300% faster transaction processing.',
        image: 'https://picsum.photos/800/600?random=1',
        createdAt: new Date().toISOString()
    },
    {
        id: 'proj_2',
        title: 'Aegis Defense Grid',
        category: 'Security',
        client: 'GovTech Agency',
        challenge: 'Vulnerability to zero-day exploits in sensitive data pipelines.',
        solution: 'Implementation of AI-driven anomaly detection and air-gapped backups.',
        impact: 'Secured 5PB of national data; detected 50+ intrusive attempts.',
        image: 'https://picsum.photos/800/600?random=2',
        createdAt: new Date().toISOString()
    },
    {
        id: 'proj_3',
        title: 'Auto-Logistics Bot',
        category: 'Robotics',
        client: 'MegaShip Logistics',
        challenge: 'Inefficient warehouse sorting leading to shipping delays.',
        solution: 'Fleet of autonomous mobile robots (AMRs) with swarm intelligence.',
        impact: 'Reduced sorting time by 65%, eliminated human error.',
        image: 'https://picsum.photos/800/600?random=3',
        createdAt: new Date().toISOString()
    },
    {
        id: 'proj_4',
        title: 'Smart City Initiative',
        category: 'Consultancy',
        client: 'Metropolis Council',
        challenge: 'Disjointed public services and traffic congestion.',
        solution: 'Unified IoT data strategy and centralized command center dashboard.',
        impact: 'Traffic flow improved by 25%, energy usage dropped by 15%.',
        image: 'https://picsum.photos/800/600?random=4',
        createdAt: new Date().toISOString()
    }
];

// Tech Stack Operations
export const getTechStack = (): TechStackItem[] => {
    try {
        const data = localStorage.getItem(TECH_STACK_KEY);
        if (!data) return DEFAULT_TECH_STACK;
        const items = JSON.parse(data) as TechStackItem[];
        return items.length > 0 ? items : DEFAULT_TECH_STACK;
    } catch (error) {
        console.error('Error loading tech stack:', error);
        return DEFAULT_TECH_STACK;
    }
};

export const saveTechStack = (items: TechStackItem[]): boolean => {
    try {
        localStorage.setItem(TECH_STACK_KEY, JSON.stringify(items));
        return true;
    } catch (error) {
        console.error('Error saving tech stack:', error);
        return false;
    }
};

export const addTechStackItem = (item: Omit<TechStackItem, 'id' | 'order'>): TechStackItem | null => {
    try {
        const items = getTechStack();
        const newItem: TechStackItem = {
            ...item,
            id: `tech_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            order: items.length
        };
        items.push(newItem);
        saveTechStack(items);
        return newItem;
    } catch (error) {
        console.error('Error adding tech stack item:', error);
        return null;
    }
};

export const updateTechStackItem = (id: string, updates: Partial<TechStackItem>): boolean => {
    try {
        const items = getTechStack();
        const index = items.findIndex(item => item.id === id);
        if (index === -1) return false;
        items[index] = { ...items[index], ...updates };
        return saveTechStack(items);
    } catch (error) {
        console.error('Error updating tech stack item:', error);
        return false;
    }
};

export const deleteTechStackItem = (id: string): boolean => {
    try {
        const items = getTechStack();
        const filtered = items.filter(item => item.id !== id);
        return saveTechStack(filtered);
    } catch (error) {
        console.error('Error deleting tech stack item:', error);
        return false;
    }
};

// Roadmap Operations
export const getRoadmap = (): RoadmapItem[] => {
    try {
        const data = localStorage.getItem(ROADMAP_KEY);
        if (!data) return DEFAULT_ROADMAP;
        const items = JSON.parse(data) as RoadmapItem[];
        return items.length > 0 ? items : DEFAULT_ROADMAP;
    } catch (error) {
        console.error('Error loading roadmap:', error);
        return DEFAULT_ROADMAP;
    }
};

export const saveRoadmap = (items: RoadmapItem[]): boolean => {
    try {
        localStorage.setItem(ROADMAP_KEY, JSON.stringify(items));
        return true;
    } catch (error) {
        console.error('Error saving roadmap:', error);
        return false;
    }
};

export const addRoadmapItem = (item: Omit<RoadmapItem, 'id' | 'order'>): RoadmapItem | null => {
    try {
        const items = getRoadmap();
        const newItem: RoadmapItem = {
            ...item,
            id: `roadmap_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            order: items.length
        };
        items.push(newItem);
        saveRoadmap(items);
        return newItem;
    } catch (error) {
        console.error('Error adding roadmap item:', error);
        return null;
    }
};

export const updateRoadmapItem = (id: string, updates: Partial<RoadmapItem>): boolean => {
    try {
        const items = getRoadmap();
        const index = items.findIndex(item => item.id === id);
        if (index === -1) return false;
        items[index] = { ...items[index], ...updates };
        return saveRoadmap(items);
    } catch (error) {
        console.error('Error updating roadmap item:', error);
        return false;
    }
};

export const deleteRoadmapItem = (id: string): boolean => {
    try {
        const items = getRoadmap();
        const filtered = items.filter(item => item.id !== id);
        return saveRoadmap(filtered);
    } catch (error) {
        console.error('Error deleting roadmap item:', error);
        return false;
    }
};

// Projects Operations
export const getProjects = (): ProjectItem[] => {
    try {
        const data = localStorage.getItem(PROJECTS_KEY);
        if (!data) return DEFAULT_PROJECTS;
        const items = JSON.parse(data) as ProjectItem[];
        return items.length > 0 ? items : DEFAULT_PROJECTS;
    } catch (error) {
        console.error('Error loading projects:', error);
        return DEFAULT_PROJECTS;
    }
};

export const saveProjects = (items: ProjectItem[]): boolean => {
    try {
        localStorage.setItem(PROJECTS_KEY, JSON.stringify(items));
        return true;
    } catch (error) {
        console.error('Error saving projects:', error);
        return false;
    }
};

export const addProject = (item: Omit<ProjectItem, 'id' | 'createdAt'>): ProjectItem | null => {
    try {
        const items = getProjects();
        const newItem: ProjectItem = {
            ...item,
            id: `proj_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            createdAt: new Date().toISOString()
        };
        items.push(newItem);
        saveProjects(items);
        return newItem;
    } catch (error) {
        console.error('Error adding project:', error);
        return null;
    }
};

export const updateProject = (id: string, updates: Partial<ProjectItem>): boolean => {
    try {
        const items = getProjects();
        const index = items.findIndex(item => item.id === id);
        if (index === -1) return false;
        items[index] = { ...items[index], ...updates };
        return saveProjects(items);
    } catch (error) {
        console.error('Error updating project:', error);
        return false;
    }
};

export const deleteProject = (id: string): boolean => {
    try {
        const items = getProjects();
        const filtered = items.filter(item => item.id !== id);
        return saveProjects(filtered);
    } catch (error) {
        console.error('Error deleting project:', error);
        return false;
    }
};

// Utility Functions
export const exportAllContent = (): string => {
    return JSON.stringify({
        techStack: getTechStack(),
        roadmap: getRoadmap(),
        projects: getProjects()
    }, null, 2);
};

export const importAllContent = (jsonData: string): boolean => {
    try {
        const data = JSON.parse(jsonData);
        if (data.techStack) saveTechStack(data.techStack);
        if (data.roadmap) saveRoadmap(data.roadmap);
        if (data.projects) saveProjects(data.projects);
        return true;
    } catch (error) {
        console.error('Error importing content:', error);
        return false;
    }
};

export const resetToDefaults = (): boolean => {
    try {
        saveTechStack(DEFAULT_TECH_STACK);
        saveRoadmap(DEFAULT_ROADMAP);
        saveProjects(DEFAULT_PROJECTS);
        return true;
    } catch (error) {
        console.error('Error resetting to defaults:', error);
        return false;
    }
};
