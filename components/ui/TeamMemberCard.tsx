import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, Globe, Twitter } from 'lucide-react';
import { Operative } from '../../types';

interface TeamMemberCardProps {
    member: Operative;
    index: number;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, index }) => {
    // Department color mapping
    const deptColors: Record<string, string> = {
        'Software Development': 'from-cyan-500 to-blue-500',
        'Robotics': 'from-purple-500 to-pink-500',
        'IT Operations': 'from-orange-500 to-red-500',
        'Design & UX': 'from-pink-500 to-rose-500',
        'Business Intelligence': 'from-emerald-500 to-teal-500',
        'Project Management': 'from-amber-500 to-yellow-500',
        'Marketing': 'from-violet-500 to-purple-500',
        'HR': 'from-indigo-500 to-blue-500'
    };

    const gradientColor = deptColors[member.department] || 'from-gray-500 to-slate-500';

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.03, y: -5 }}
            className="group relative"
        >
            {/* Glassy Card */}
            <div className="relative h-full rounded-xl overflow-hidden bg-white/40 dark:bg-gray-800/30 backdrop-blur-xl border border-slate-200/60 dark:border-gray-700/50 shadow-md hover:shadow-xl transition-all duration-300">

                {/* Gradient Glow on Hover */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${gradientColor} rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10`} />

                {/* Avatar */}
                <div className="relative pt-6 px-6 flex justify-center">
                    <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`w-20 h-20 rounded-full bg-gradient-to-br ${gradientColor} flex items-center justify-center text-white font-bold text-2xl shadow-lg ring-2 ring-white/20`}
                    >
                        {member.name.split(' ').map(n => n[0]).join('')}
                    </motion.div>
                </div>

                {/* Content */}
                <div className="p-6 pt-4 text-center">
                    {/* Name */}
                    <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                        {member.name}
                    </h3>

                    {/* Role */}
                    <p className="text-sm text-slate-600 dark:text-gray-400 mb-2 font-medium">
                        {member.role}
                    </p>

                    {/* Department Badge */}
                    <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${gradientColor} bg-opacity-10 mb-4`}>
                        <span className="text-xs font-semibold text-slate-700 dark:text-gray-300">
                            {member.department}
                        </span>
                    </div>

                    {/* Contact Links */}
                    <div className="flex items-center justify-center gap-2 pt-4 border-t border-slate-200/60 dark:border-gray-700/50">
                        {member.contacts?.linkedin && (
                            <motion.a
                                href={member.contacts.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-2 rounded-lg bg-slate-100 dark:bg-gray-700/50 text-[#0077b5] dark:text-[#0077b5] hover:bg-[#0077b5] hover:text-white transition-colors"
                                title="LinkedIn"
                            >
                                <Linkedin size={16} />
                            </motion.a>
                        )}
                        {member.contacts?.github && (
                            <motion.a
                                href={member.contacts.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, rotate: -5 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-2 rounded-lg bg-slate-100 dark:bg-gray-700/50 text-slate-900 dark:text-white hover:bg-slate-900 dark:hover:bg-white hover:text-white dark:hover:text-slate-900 transition-colors"
                                title="GitHub"
                            >
                                <Github size={16} />
                            </motion.a>
                        )}
                        {member.email && (
                            <motion.a
                                href={`mailto:${member.email}`}
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-2 rounded-lg bg-slate-100 dark:bg-gray-700/50 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-600 dark:hover:bg-cyan-500 hover:text-white transition-colors"
                                title="Email"
                            >
                                <Mail size={16} />
                            </motion.a>
                        )}
                        {member.contacts?.portfolio && (
                            <motion.a
                                href={member.contacts.portfolio}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, rotate: -5 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-2 rounded-lg bg-slate-100 dark:bg-gray-700/50 text-purple-600 dark:text-purple-400 hover:bg-purple-600 dark:hover:bg-purple-500 hover:text-white transition-colors"
                                title="Portfolio"
                            >
                                <Globe size={16} />
                            </motion.a>
                        )}
                        {member.contacts?.twitter && (
                            <motion.a
                                href={member.contacts.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-2 rounded-lg bg-slate-100 dark:bg-gray-700/50 text-[#1DA1F2] dark:text-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white transition-colors"
                                title="Twitter"
                            >
                                <Twitter size={16} />
                            </motion.a>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default TeamMemberCard;
