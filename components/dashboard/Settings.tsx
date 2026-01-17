import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Bell, Palette, Shield, Trash2, Camera, Save, Key, Globe, Clock, Monitor, Moon, Sun, Smartphone, LogOut, Download, AlertTriangle, Settings as SettingsIcon } from 'lucide-react';

const Settings = () => {
    const [activeTab, setActiveTab] = useState('personal');
    const [profile, setProfile] = useState({
        name: 'Admin User',
        email: 'admin@techtonic.com',
        role: 'System Administrator',
        bio: 'Managing the Techtonic Portal',
        avatar: 'AU'
    });
    const [preferences, setPreferences] = useState({
        notifications: true,
        emailNotifications: false,
        language: 'en',
        timezone: 'UTC+6'
    });
    const [appearance, setAppearance] = useState({
        theme: 'dark',
        density: 'comfortable'
    });
    const [siteSettings, setSiteSettings] = useState({
        siteName: 'Techtonic',
        siteTagline: 'Architecting Tomorrow',
        maintenanceMode: false,
        allowRegistration: false,
    });

    const tabs = [
        { id: 'personal', label: 'Personal', icon: User },
        { id: 'password', label: 'Password', icon: Key },
        { id: 'account', label: 'Account', icon: Shield },
        { id: 'site', label: 'Site Settings', icon: SettingsIcon },
    ];

    const handleSaveProfile = () => {
        alert('Profile updated successfully!');
    };

    const handleChangePassword = () => {
        alert('Password changed successfully!');
    };

    const handleSaveSiteSettings = () => {
        alert('Site settings updated successfully!');
    };

    const handleDeleteAccount = () => {
        if (confirm('Are you absolutely sure? This action cannot be undone!')) {
            alert('Account deletion initiated. You will be logged out.');
        }
    };

    return (
        <div className="max-w-5xl mx-auto">
            {/* Tabs */}
            <div className="flex gap-2 mb-8 overflow-x-auto pb-2 border-b border-white/10">
                {tabs.map((tab) => {
                    const Icon = tab.icon;
                    return (
                        <motion.button
                            key={tab.id}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium text-sm whitespace-nowrap transition-all ${activeTab === tab.id
                                ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30'
                                : 'text-slate-400 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            <Icon size={18} />
                            {tab.label}
                        </motion.button>
                    );
                })}
            </div>

            {/* Content */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                >
                    {activeTab === 'personal' && (
                        <div className="space-y-6">
                            {/* Avatar Section */}
                            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                                <h3 className="text-lg font-bold text-white mb-4">Profile Picture</h3>
                                <div className="flex items-center gap-6">
                                    <div className="relative">
                                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-3xl shadow-lg">
                                            {profile.avatar}
                                        </div>
                                        <motion.button
                                            whileTap={{ scale: 0.9 }}
                                            className="absolute bottom-0 right-0 p-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full shadow-lg"
                                        >
                                            <Camera size={16} />
                                        </motion.button>
                                    </div>
                                    <div>
                                        <p className="text-white font-medium mb-1">Upload new photo</p>
                                        <p className="text-sm text-slate-400 mb-3">JPG, PNG or GIF. Max 2MB.</p>
                                        <motion.button
                                            whileTap={{ scale: 0.95 }}
                                            className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white rounded-lg text-sm border border-white/10 transition-colors"
                                        >
                                            Choose File
                                        </motion.button>
                                    </div>
                                </div>
                            </div>

                            {/* Personal Info */}
                            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                                <h3 className="text-lg font-bold text-white mb-4">Personal Information</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-mono text-cyan-500/60 mb-2">FULL NAME</label>
                                        <input
                                            type="text"
                                            value={profile.name}
                                            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                                            className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyan-500/50 focus:outline-none transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-mono text-cyan-500/60 mb-2">EMAIL</label>
                                        <input
                                            type="email"
                                            value={profile.email}
                                            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                                            className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyan-500/50 focus:outline-none transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-mono text-cyan-500/60 mb-2">ROLE</label>
                                        <input
                                            type="text"
                                            value={profile.role}
                                            onChange={(e) => setProfile({ ...profile, role: e.target.value })}
                                            className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyan-500/50 focus:outline-none transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-mono text-cyan-500/60 mb-2">BIO</label>
                                        <input
                                            type="text"
                                            value={profile.bio}
                                            onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                                            className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyan-500/50 focus:outline-none transition-colors"
                                        />
                                    </div>
                                </div>
                                <motion.button
                                    whileTap={{ scale: 0.95 }}
                                    onClick={handleSaveProfile}
                                    className="mt-6 px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg font-bold shadow-lg shadow-cyan-500/20 flex items-center gap-2 transition-colors"
                                >
                                    <Save size={18} />
                                    Save Changes
                                </motion.button>
                            </div>

                            {/* Preferences */}
                            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                    <Bell size={20} className="text-cyan-400" />
                                    Notifications
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-white font-medium">Push Notifications</p>
                                            <p className="text-sm text-slate-400">Receive notifications in the app</p>
                                        </div>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={preferences.notifications}
                                                onChange={(e) => setPreferences({ ...preferences, notifications: e.target.checked })}
                                                className="sr-only peer"
                                            />
                                            <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-600"></div>
                                        </label>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-white font-medium">Email Notifications</p>
                                            <p className="text-sm text-slate-400">Receive updates via email</p>
                                        </div>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={preferences.emailNotifications}
                                                onChange={(e) => setPreferences({ ...preferences, emailNotifications: e.target.checked })}
                                                className="sr-only peer"
                                            />
                                            <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-600"></div>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            {/* Appearance */}
                            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                    <Palette size={20} className="text-cyan-400" />
                                    Theme
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    {[
                                        { id: 'light', label: 'Light', icon: Sun },
                                        { id: 'dark', label: 'Dark', icon: Moon },
                                        { id: 'auto', label: 'Auto', icon: Monitor }
                                    ].map((theme) => {
                                        const Icon = theme.icon;
                                        return (
                                            <motion.button
                                                key={theme.id}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={() => setAppearance({ ...appearance, theme: theme.id })}
                                                className={`p-4 rounded-xl border-2 transition-all ${appearance.theme === theme.id
                                                    ? 'border-cyan-500 bg-cyan-500/10'
                                                    : 'border-white/10 bg-white/5 hover:bg-white/10'
                                                    }`}
                                            >
                                                <Icon size={24} className={`mx-auto mb-2 ${appearance.theme === theme.id ? 'text-cyan-400' : 'text-slate-400'}`} />
                                                <p className={`text-sm font-medium ${appearance.theme === theme.id ? 'text-cyan-400' : 'text-white'}`}>{theme.label}</p>
                                            </motion.button>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'password' && (
                        <div className="space-y-6">
                            {/* Change Password */}
                            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                    <Key size={20} className="text-cyan-400" />
                                    Change Password
                                </h3>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-xs font-mono text-cyan-500/60 mb-2">CURRENT PASSWORD</label>
                                        <input
                                            type="password"
                                            placeholder="••••••••"
                                            className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyan-500/50 focus:outline-none transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-mono text-cyan-500/60 mb-2">NEW PASSWORD</label>
                                        <input
                                            type="password"
                                            placeholder="••••••••"
                                            className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyan-500/50 focus:outline-none transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-mono text-cyan-500/60 mb-2">CONFIRM NEW PASSWORD</label>
                                        <input
                                            type="password"
                                            placeholder="••••••••"
                                            className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyan-500/50 focus:outline-none transition-colors"
                                        />
                                    </div>
                                    <motion.button
                                        whileTap={{ scale: 0.95 }}
                                        onClick={handleChangePassword}
                                        className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg font-bold shadow-lg shadow-cyan-500/20 transition-colors"
                                    >
                                        Update Password
                                    </motion.button>
                                </div>
                            </div>

                            {/* Active Sessions */}
                            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                    <Smartphone size={20} className="text-cyan-400" />
                                    Active Sessions
                                </h3>
                                <div className="space-y-3">
                                    {[
                                        { device: 'Chrome on Windows', location: 'Dhaka, Bangladesh', current: true },
                                        { device: 'Safari on iPhone', location: 'Dhaka, Bangladesh', current: false }
                                    ].map((session, i) => (
                                        <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                                            <div>
                                                <p className="text-white font-medium flex items-center gap-2">
                                                    {session.device}
                                                    {session.current && <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded">Current</span>}
                                                </p>
                                                <p className="text-sm text-slate-400">{session.location}</p>
                                            </div>
                                            {!session.current && (
                                                <motion.button whileTap={{ scale: 0.9 }} className="text-red-400 hover:text-red-300">
                                                    <LogOut size={18} />
                                                </motion.button>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'account' && (
                        <div className="space-y-6">
                            {/* Export Data */}
                            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                    <Download size={20} className="text-cyan-400" />
                                    Export Data
                                </h3>
                                <p className="text-slate-400 mb-4">Download a copy of your data including profile, messages, and settings.</p>
                                <motion.button
                                    whileTap={{ scale: 0.95 }}
                                    className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-lg font-bold border border-white/10 transition-colors"
                                >
                                    Download Data
                                </motion.button>
                            </div>

                            {/* Danger Zone */}
                            <div className="bg-red-500/5 border border-red-500/30 rounded-xl p-6">
                                <h3 className="text-lg font-bold text-red-400 mb-4 flex items-center gap-2">
                                    <AlertTriangle size={20} />
                                    Danger Zone
                                </h3>
                                <p className="text-slate-400 mb-4">Once you delete your account, there is no going back. Please be certain.</p>
                                <motion.button
                                    whileTap={{ scale: 0.95 }}
                                    onClick={handleDeleteAccount}
                                    className="px-6 py-3 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-lg font-bold border border-red-500/30 transition-colors"
                                >
                                    Delete Account
                                </motion.button>
                            </div>
                        </div>
                    )}

                    {activeTab === 'site' && (
                        <div className="space-y-6">
                            {/* Site Information */}
                            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                                <h3 className="text-lg font-bold text-white mb-4">Site Information</h3>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-xs font-mono text-cyan-500/60 mb-2">SITE NAME</label>
                                        <input
                                            type="text"
                                            value={siteSettings.siteName}
                                            onChange={(e) => setSiteSettings({ ...siteSettings, siteName: e.target.value })}
                                            className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyan-500/50 focus:outline-none transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-mono text-cyan-500/60 mb-2">TAGLINE</label>
                                        <input
                                            type="text"
                                            value={siteSettings.siteTagline}
                                            onChange={(e) => setSiteSettings({ ...siteSettings, siteTagline: e.target.value })}
                                            className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyan-500/50 focus:outline-none transition-colors"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Site Options */}
                            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                                <h3 className="text-lg font-bold text-white mb-4">Site Options</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-white font-medium">Maintenance Mode</p>
                                            <p className="text-sm text-slate-400">Temporarily disable public access</p>
                                        </div>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={siteSettings.maintenanceMode}
                                                onChange={(e) => setSiteSettings({ ...siteSettings, maintenanceMode: e.target.checked })}
                                                className="sr-only peer"
                                            />
                                            <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-600"></div>
                                        </label>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-white font-medium">Allow Registration</p>
                                            <p className="text-sm text-slate-400">Enable new user signups</p>
                                        </div>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={siteSettings.allowRegistration}
                                                onChange={(e) => setSiteSettings({ ...siteSettings, allowRegistration: e.target.checked })}
                                                className="sr-only peer"
                                            />
                                            <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-600"></div>
                                        </label>
                                    </div>
                                </div>
                                <motion.button
                                    whileTap={{ scale: 0.95 }}
                                    onClick={handleSaveSiteSettings}
                                    className="mt-6 px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg font-bold shadow-lg shadow-cyan-500/20 flex items-center gap-2 transition-colors"
                                >
                                    <Save size={18} />
                                    Save Site Settings
                                </motion.button>
                            </div>
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default Settings;
