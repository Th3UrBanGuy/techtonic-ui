// Content storage service for all dynamic content
import { TechStackItem, RoadmapItem, ProjectItem, Wing, TeamMember, Milestone, Partnership } from '../types';
import {
    WINGS as DEFAULT_WINGS,
    PROJECTS as DEFAULT_PROJECTS_STATIC, // Renamed to avoid conflict if needed, though we use types mostly
    TEAM as DEFAULT_TEAM,
    TIMELINE as DEFAULT_TIMELINE,
    PARTNERSHIPS as DEFAULT_PARTNERSHIPS,
    HOME_CONTENT as DEFAULT_HOME_CONTENT,
    COMPANY_CONTENT as DEFAULT_COMPANY_CONTENT,
    INNOVATION_CONTENT as DEFAULT_INNOVATION_CONTENT,
    INNOVATION_TECH_STACK as DEFAULT_TECH_STACK_STATIC,
    INNOVATION_ROADMAP as DEFAULT_ROADMAP_STATIC,
    PROJECTS
} from '../constants';

// Storage keys
const TECH_STACK_KEY = 'techtonic_tech_stack';
const ROADMAP_KEY = 'techtonic_roadmap';
const PROJECTS_KEY = 'techtonic_projects';
const WINGS_KEY = 'techtonic_wings';
const TEAM_KEY = 'techtonic_team';
const TIMELINE_KEY = 'techtonic_timeline';
const PARTNERSHIPS_KEY = 'techtonic_partnerships';
const HOME_CONTENT_KEY = 'techtonic_home_content';
const COMPANY_CONTENT_KEY = 'techtonic_company_content';
const INNOVATION_CONTENT_KEY = 'techtonic_innovation_content';

// ----------------------------------------------------------------------
// GENERIC STORAGE HELPER
// ----------------------------------------------------------------------
function getFromStorage<T>(key: string, defaultValue: T): T {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : defaultValue;
    } catch (error) {
        console.error(`Error loading ${key}:`, error);
        return defaultValue;
    }
}

function saveToStorage<T>(key: string, value: T): boolean {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    } catch (error) {
        console.error(`Error saving ${key}:`, error);
        return false;
    }
}

// ----------------------------------------------------------------------
// INNOVATION & PORTFOLIO (Existing + Expanded)
// ----------------------------------------------------------------------

// Tech Stack
export const getTechStack = (): TechStackItem[] => getFromStorage(TECH_STACK_KEY, DEFAULT_TECH_STACK_STATIC);
export const saveTechStack = (items: TechStackItem[]) => saveToStorage(TECH_STACK_KEY, items);

// Roadmap
export const getRoadmap = (): RoadmapItem[] => getFromStorage(ROADMAP_KEY, DEFAULT_ROADMAP_STATIC);
export const saveRoadmap = (items: RoadmapItem[]) => saveToStorage(ROADMAP_KEY, items);

// Projects (Note: types.ts Project vs ProjectItem - adapting to ProjectItem for consistency if needed, 
// but constants.ts uses Project. We'll try to align with constants.ts types primarily)
// The existing contentStorage used ProjectItem, but constants uses Project. 
// We will support Project type from constants to be safe.
export const getProjects = (): any[] => getFromStorage(PROJECTS_KEY, PROJECTS);
export const saveProjects = (items: any[]) => saveToStorage(PROJECTS_KEY, items);

// ----------------------------------------------------------------------
// CORE ENTITIES
// ----------------------------------------------------------------------

// Wings
export const getWings = (): Wing[] => getFromStorage(WINGS_KEY, DEFAULT_WINGS);
export const saveWings = (items: Wing[]) => saveToStorage(WINGS_KEY, items);

// Team
export const getTeam = (): TeamMember[] => getFromStorage(TEAM_KEY, DEFAULT_TEAM);
export const saveTeam = (items: TeamMember[]) => saveToStorage(TEAM_KEY, items);

// Timeline
export const getTimeline = (): Milestone[] => getFromStorage(TIMELINE_KEY, DEFAULT_TIMELINE);
export const saveTimeline = (items: Milestone[]) => saveToStorage(TIMELINE_KEY, items);

// Partnerships
export const getPartnerships = (): Partnership[] => getFromStorage(PARTNERSHIPS_KEY, DEFAULT_PARTNERSHIPS);
export const savePartnerships = (items: Partnership[]) => saveToStorage(PARTNERSHIPS_KEY, items);

// ----------------------------------------------------------------------
// PAGE SPECIFIC CONTENT
// ----------------------------------------------------------------------

// Home
export const getHomeContent = () => getFromStorage(HOME_CONTENT_KEY, DEFAULT_HOME_CONTENT);
export const saveHomeContent = (content: typeof DEFAULT_HOME_CONTENT) => saveToStorage(HOME_CONTENT_KEY, content);

// Company
export const getCompanyContent = () => getFromStorage(COMPANY_CONTENT_KEY, DEFAULT_COMPANY_CONTENT);
export const saveCompanyContent = (content: typeof DEFAULT_COMPANY_CONTENT) => saveToStorage(COMPANY_CONTENT_KEY, content);

// Innovation (Page Text/Stats, distinct from TechStack/Roadmap arrays)
export const getInnovationContent = () => getFromStorage(INNOVATION_CONTENT_KEY, DEFAULT_INNOVATION_CONTENT);
export const saveInnovationContent = (content: typeof DEFAULT_INNOVATION_CONTENT) => saveToStorage(INNOVATION_CONTENT_KEY, content);

// ----------------------------------------------------------------------
// UTILITIES
// ----------------------------------------------------------------------

export const exportAllContent = (): string => {
    return JSON.stringify({
        techStack: getTechStack(),
        roadmap: getRoadmap(),
        projects: getProjects(),
        wings: getWings(),
        team: getTeam(),
        timeline: getTimeline(),
        partnerships: getPartnerships(),
        homeContent: getHomeContent(),
        companyContent: getCompanyContent(),
        innovationContent: getInnovationContent(),
    }, null, 2);
};

export const importAllContent = (jsonData: string): boolean => {
    try {
        const data = JSON.parse(jsonData);
        if (data.techStack) saveTechStack(data.techStack);
        if (data.roadmap) saveRoadmap(data.roadmap);
        if (data.projects) saveProjects(data.projects);
        if (data.wings) saveWings(data.wings);
        if (data.team) saveTeam(data.team);
        if (data.timeline) saveTimeline(data.timeline);
        if (data.partnerships) savePartnerships(data.partnerships);
        if (data.homeContent) saveHomeContent(data.homeContent);
        if (data.companyContent) saveCompanyContent(data.companyContent);
        if (data.innovationContent) saveInnovationContent(data.innovationContent);
        return true;
    } catch (error) {
        console.error('Error importing content:', error);
        return false;
    }
};

export const resetToDefaults = (): boolean => {
    try {
        localStorage.clear(); // Simple clear to revert to constants.ts defaults on next load
        // Alternatively, explicitly save defaults:
        // saveTechStack(DEFAULT_TECH_STACK_STATIC);
        // ... etc
        return true;
    } catch (error) {
        console.error('Error resetting to defaults:', error);
        return false;
    }
};
