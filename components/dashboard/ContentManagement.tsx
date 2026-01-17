import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Settings as SettingsIcon, Lightbulb, Briefcase, Database, Download, Upload } from 'lucide-react';
import InnovationManager from './InnovationManager';
import PortfolioManager from './PortfolioManager';
import { exportAllContent, importAllContent, resetToDefaults } from '../../services/contentStorage';

type SettingsTab = 'innovation' | 'portfolio';

const ContentManagement: React.FC = () => {
    const [activeTab, setActiveTab] = useState<SettingsTab>('innovation');

    const handleExport = () => {
        const data = exportAllContent();
        const blob = new Blob([data], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `techtonic-content-${new Date().toISOString().split('T')[0]}.json`;
        a.click();
        URL.revokeObjectURL(url);
    };

    const handleImport = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'application/json';
        input.onchange = (e) => {
            const file = (e.target as HTMLInputElement).files?.[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    const content = event.target?.result as string;
                    if (importAllContent(content)) {
                        alert('Content imported successfully! Refresh the page to see changes.');
                    } else {
                        alert('Failed to import content. Please check the file format.');
                    }
                };
                reader.readAsText(file);
            }
        };
        input.click();
    };

    const handleReset = () => {
        if (confirm('Are you sure you want to reset all content to defaults? This cannot be undone.')) {
            if (resetToDefaults()) {
                alert('Content reset to defaults! Refresh the page to see changes.');
            }
        }
    };

    const tabs = [
        { id: 'innovation' as SettingsTab, label: 'Innovation Manager', icon: Lightbulb },
        { id: 'portfolio' as SettingsTab, label: 'Portfolio Manager', icon: Briefcase },
    ];

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-white mb-2">Content Management</h2>
                    <p className="text-slate-400 text-sm">Manage Innovation and Portfolio page content dynamically</p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                    <button
                        onClick={handleExport}
                        className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors flex items-center gap-2 text-sm"
                    >
                        <Download size={16} />
                        Export
                    </button>
                    <button
                        onClick={handleImport}
                        className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors flex items-center gap-2 text-sm"
                    >
                        <Upload size={16} />
                        Import
                    </button>
                    <button
                        onClick={handleReset}
                        className="px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 hover:bg-red-500/20 transition-colors flex items-center gap-2 text-sm"
                    >
                        <Database size={16} />
                        Reset
                    </button>
                </div>
            </div>

            {/* Tab Navigation */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-2 backdrop-blur-sm">
                <div className="flex gap-2">
                    {tabs.map((tab) => {
                        const Icon = tab.icon;
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-medium transition-all ${isActive
                                        ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                <Icon size={18} />
                                <span className="hidden sm:inline">{tab.label}</span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Tab Content */}
            <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
            >
                {activeTab === 'innovation' && <InnovationManager />}
                {activeTab === 'portfolio' && <PortfolioManager />}
            </motion.div>
        </div>
    );
};

export default ContentManagement;
