import React, { createContext, useContext, useEffect, useState } from 'react';
import * as contentStorage from '../services/contentStorage';
import * as configStorage from '../services/configStorage';
import { Wing, TeamMember, Milestone, Partnership, TechStackItem, RoadmapItem } from '../types';

// Define the shape of our context data
interface ContentContextType {
    // Content Data
    wings: Wing[];
    setWings: (wings: Wing[]) => void;
    team: TeamMember[];
    setTeam: (team: TeamMember[]) => void;
    timeline: Milestone[];
    setTimeline: (timeline: Milestone[]) => void;
    partnerships: Partnership[];
    setPartnerships: (partnerships: Partnership[]) => void;
    projects: any[];
    setProjects: (projects: any[]) => void;

    // Innovation Specs
    techStack: TechStackItem[];
    setTechStack: (items: TechStackItem[]) => void;
    roadmap: RoadmapItem[];
    setRoadmap: (items: RoadmapItem[]) => void;

    // Page Content
    homeContent: any;
    setHomeContent: (content: any) => void;
    companyContent: any;
    setCompanyContent: (content: any) => void;
    innovationContent: any;
    setInnovationContent: (content: any) => void;

    // Config Data
    siteSettings: configStorage.SiteSettings;
    setSiteSettings: (settings: configStorage.SiteSettings) => void;
    contactConfig: configStorage.ContactConfig;
    setContactConfig: (config: configStorage.ContactConfig) => void;

    // Actions
    refreshContent: () => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // State definitions
    const [wings, setWingsState] = useState<Wing[]>([]);
    const [team, setTeamState] = useState<TeamMember[]>([]);
    const [timeline, setTimelineState] = useState<Milestone[]>([]);
    const [partnerships, setPartnershipsState] = useState<Partnership[]>([]);
    const [projects, setProjectsState] = useState<any[]>([]);
    const [techStack, setTechStackState] = useState<TechStackItem[]>([]);
    const [roadmap, setRoadmapState] = useState<RoadmapItem[]>([]);

    const [homeContent, setHomeContentState] = useState<any>({});
    const [companyContent, setCompanyContentState] = useState<any>({});
    const [innovationContent, setInnovationContentState] = useState<any>({});

    const [siteSettings, setSiteSettingsState] = useState<configStorage.SiteSettings>({
        siteName: 'Techtonic',
        siteTagline: 'Architecting Tomorrow',
        maintenanceMode: false,
        allowRegistration: false,
    });
    const [contactConfig, setContactConfigState] = useState<configStorage.ContactConfig>({
        address: { street: '', sector: '', coordinates: '' },
        contact: { email: '', phone: '' },
        socials: { linkedin: '', facebook: '', instagram: '', twitter: '', github: '' }
    });

    // Load Data
    const refreshContent = () => {
        setWingsState(contentStorage.getWings());
        setTeamState(contentStorage.getTeam());
        setTimelineState(contentStorage.getTimeline());
        setPartnershipsState(contentStorage.getPartnerships());
        setProjectsState(contentStorage.getProjects());
        setTechStackState(contentStorage.getTechStack());
        setRoadmapState(contentStorage.getRoadmap());

        setHomeContentState(contentStorage.getHomeContent());
        setCompanyContentState(contentStorage.getCompanyContent());
        setInnovationContentState(contentStorage.getInnovationContent());

        setSiteSettingsState(configStorage.getSiteSettings());
        setContactConfigState(configStorage.getContactConfig());
    };

    // Initial Load
    useEffect(() => {
        refreshContent();
    }, []);

    // Setters with Persistence
    const setWings = (newWings: Wing[]) => {
        setWingsState(newWings);
        contentStorage.saveWings(newWings);
    };

    const setTeam = (newTeam: TeamMember[]) => {
        setTeamState(newTeam);
        contentStorage.saveTeam(newTeam);
    };

    const setTimeline = (newTimeline: Milestone[]) => {
        setTimelineState(newTimeline);
        contentStorage.saveTimeline(newTimeline);
    };

    const setPartnerships = (newPartnerships: Partnership[]) => {
        setPartnershipsState(newPartnerships);
        contentStorage.savePartnerships(newPartnerships);
    };

    const setProjects = (newProjects: any[]) => {
        setProjectsState(newProjects);
        contentStorage.saveProjects(newProjects);
    };

    const setTechStack = (newItems: TechStackItem[]) => {
        setTechStackState(newItems);
        contentStorage.saveTechStack(newItems);
    };

    const setRoadmap = (newItems: RoadmapItem[]) => {
        setRoadmapState(newItems);
        contentStorage.saveRoadmap(newItems);
    };

    const setHomeContent = (newContent: any) => {
        setHomeContentState(newContent);
        contentStorage.saveHomeContent(newContent);
    };

    const setCompanyContent = (newContent: any) => {
        setCompanyContentState(newContent);
        contentStorage.saveCompanyContent(newContent);
    };

    const setInnovationContent = (newContent: any) => {
        setInnovationContentState(newContent);
        contentStorage.saveInnovationContent(newContent);
    };

    const setSiteSettings = (newSettings: configStorage.SiteSettings) => {
        setSiteSettingsState(newSettings);
        configStorage.saveSiteSettings(newSettings);
    };

    const setContactConfig = (newConfig: configStorage.ContactConfig) => {
        setContactConfigState(newConfig);
        configStorage.saveContactConfig(newConfig);
    };

    return (
        <ContentContext.Provider value={{
            wings, setWings,
            team, setTeam,
            timeline, setTimeline,
            partnerships, setPartnerships,
            projects, setProjects,
            techStack, setTechStack,
            roadmap, setRoadmap,
            homeContent, setHomeContent,
            companyContent, setCompanyContent,
            innovationContent, setInnovationContent,
            siteSettings, setSiteSettings,
            contactConfig, setContactConfig,
            refreshContent
        }}>
            {children}
        </ContentContext.Provider>
    );
};

export const useContent = () => {
    const context = useContext(ContentContext);
    if (!context) {
        throw new Error('useContent must be used within a ContentProvider');
    }
    return context;
};
