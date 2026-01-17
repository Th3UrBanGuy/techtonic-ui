import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Search, ArrowLeft, Paperclip, Camera, Mic, Plus, X } from 'lucide-react';

const initialUsers = [
    { id: 1, name: 'Alice Chen', status: 'online', lastMsg: 'Project update?', avatar: 'A', time: '10:42 AM', unread: 2 },
    { id: 2, name: 'Bob Smith', status: 'offline', lastMsg: 'See you tomorrow.', avatar: 'B', time: 'Yesterday', unread: 0 },
    { id: 3, name: 'Charlie Kim', status: 'online', lastMsg: 'Deploying now.', avatar: 'C', time: '9:15 AM', unread: 1 },
    { id: 4, name: 'Diana Prince', status: 'busy', lastMsg: 'In a meeting.', avatar: 'D', time: 'Monday', unread: 0 },
    { id: 5, name: 'Ethan Hunt', status: 'online', lastMsg: 'Mission accepted.', avatar: 'E', time: '8:30 AM', unread: 3 },
];

const mockMessages: Record<number, any[]> = {
    1: [
        { id: 1, text: 'Hey, how is the dashboard coming along?', sender: 'Alice', time: '10:00 AM', isMe: false },
        { id: 2, text: 'Almost done, just adding the final polish.', sender: 'Me', time: '10:05 AM', isMe: true },
        { id: 3, text: 'Great! Let me know when it is live.', sender: 'Alice', time: '10:06 AM', isMe: false },
    ],
    2: [],
    3: [
        { id: 1, text: 'Starting deployment process', sender: 'Charlie', time: '9:10 AM', isMe: false },
        { id: 2, text: 'Good luck!', sender: 'Me', time: '9:12 AM', isMe: true },
    ],
    4: [],
    5: []
};

const ChatSystem = () => {
    const [selectedUser, setSelectedUser] = useState<typeof initialUsers[0] | null>(null);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState(mockMessages);
    const [users] = useState(initialUsers);
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
        }
    }, [messages, selectedUser, isTyping]);

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();
        if (!message.trim() || !selectedUser) return;

        const newMsg = {
            id: Date.now(),
            text: message,
            sender: 'Me',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            isMe: true
        };

        setMessages((prev: any) => ({
            ...prev,
            [selectedUser.id]: [...(prev[selectedUser.id] || []), newMsg]
        }));
        setMessage('');

        // Simulate reply
        setTimeout(() => setIsTyping(true), 800);
        setTimeout(() => {
            setIsTyping(false);
            const replyMsg = {
                id: Date.now() + 1,
                text: "That sounds excellent. Keep up the good work!",
                sender: selectedUser.name,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                isMe: false
            };
            setMessages((prev: any) => ({
                ...prev,
                [selectedUser.id]: [...(prev[selectedUser.id] || []), replyMsg]
            }));
        }, 2500);
    };

    return (
        <div className="w-full h-[600px] md:h-[calc(100vh-250px)] flex bg-white dark:bg-slate-950 rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">

            {/* Contacts List */}
            <div className={`w-full md:w-96 flex flex-col bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 ${selectedUser ? 'hidden md:flex' : 'flex'
                }`}>
                {/* Header */}
                <div className="p-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Messages</h1>
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                        <input
                            type="text"
                            placeholder="Search messages..."
                            className="w-full bg-slate-100 dark:bg-slate-800 border-0 rounded-full pl-10 pr-4 py-2 text-sm text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                    </div>
                </div>

                {/* Contacts */}
                <div className="flex-1 overflow-y-auto">
                    {users.map((user) => (
                        <motion.div
                            key={user.id}
                            whileTap={{ scale: 0.98, backgroundColor: 'rgba(6, 182, 212, 0.05)' }}
                            onClick={() => setSelectedUser(user)}
                            className={`flex items-center gap-3 p-4 cursor-pointer transition-colors border-b border-slate-100 dark:border-slate-800/50 ${selectedUser?.id === user.id
                                    ? 'bg-cyan-50 dark:bg-cyan-950/20'
                                    : 'hover:bg-slate-50 dark:hover:bg-slate-800/30'
                                }`}
                        >
                            <div className="relative">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-md">
                                    {user.avatar}
                                </div>
                                {user.status === 'online' && (
                                    <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white dark:border-slate-900" />
                                )}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-baseline justify-between mb-0.5">
                                    <h3 className="font-semibold text-slate-900 dark:text-white text-sm truncate">{user.name}</h3>
                                    <span className="text-xs text-slate-500 dark:text-slate-400 ml-2 flex-shrink-0">{user.time}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <p className="text-sm text-slate-600 dark:text-slate-400 truncate">{user.lastMsg}</p>
                                    {user.unread > 0 && (
                                        <span className="ml-2 min-w-[20px] h-5 px-1.5 bg-cyan-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                                            {user.unread}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Chat Window */}
            <div className={`flex-1 flex flex-col bg-white dark:bg-slate-950 ${selectedUser ? 'flex' : 'hidden md:flex'
                }`}>
                {selectedUser ? (
                    <>
                        {/* Chat Header */}
                        <div className="flex items-center gap-3 p-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
                            <motion.button
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setSelectedUser(null)}
                                className="md:hidden p-2 -ml-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                            >
                                <ArrowLeft size={22} />
                            </motion.button>
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold shadow-md">
                                {selectedUser.avatar}
                            </div>
                            <div className="flex-1 min-w-0">
                                <h2 className="font-semibold text-slate-900 dark:text-white">{selectedUser.name}</h2>
                                <p className="text-xs text-slate-500 dark:text-slate-400">
                                    {selectedUser.status === 'online' ? 'Active now' : 'Offline'}
                                </p>
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div
                            ref={scrollRef}
                            className="flex-1 overflow-y-auto p-4 bg-slate-50 dark:bg-slate-950"
                            style={{
                                backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(148 163 184 / 0.05) 1px, transparent 0)',
                                backgroundSize: '20px 20px'
                            }}
                        >
                            <div className="space-y-2">
                                <AnimatePresence initial={false}>
                                    {(messages[selectedUser.id] || []).map((msg: any, index: number) => {
                                        const showAvatar = index === 0 || messages[selectedUser.id][index - 1]?.isMe !== msg.isMe;
                                        return (
                                            <motion.div
                                                key={msg.id}
                                                layout
                                                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                                className={`flex items-end gap-2 ${msg.isMe ? 'flex-row-reverse' : 'flex-row'}`}
                                            >
                                                {!msg.isMe && (
                                                    <div className={`w-6 h-6 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0 ${showAvatar ? 'opacity-100' : 'opacity-0'}`}>
                                                        {selectedUser.avatar}
                                                    </div>
                                                )}
                                                <div className={`group flex flex-col ${msg.isMe ? 'items-end' : 'items-start'} max-w-[75%] sm:max-w-[60%]`}>
                                                    <div className={`px-4 py-2.5 rounded-2xl shadow-sm ${msg.isMe
                                                            ? 'bg-cyan-500 text-white rounded-br-md'
                                                            : 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-bl-md border border-slate-200 dark:border-slate-700'
                                                        }`}>
                                                        <p className="text-sm leading-relaxed break-words">{msg.text}</p>
                                                    </div>
                                                    <span className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 px-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                                        {msg.time}
                                                    </span>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </AnimatePresence>

                                {isTyping && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="flex items-end gap-2"
                                    >
                                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-xs font-bold">
                                            {selectedUser.avatar}
                                        </div>
                                        <div className="px-4 py-3 bg-white dark:bg-slate-800 rounded-2xl rounded-bl-md border border-slate-200 dark:border-slate-700 flex gap-1">
                                            <motion.div
                                                animate={{ y: [0, -4, 0] }}
                                                transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                                                className="w-2 h-2 bg-slate-400 rounded-full"
                                            />
                                            <motion.div
                                                animate={{ y: [0, -4, 0] }}
                                                transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                                                className="w-2 h-2 bg-slate-400 rounded-full"
                                            />
                                            <motion.div
                                                animate={{ y: [0, -4, 0] }}
                                                transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                                                className="w-2 h-2 bg-slate-400 rounded-full"
                                            />
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        </div>

                        {/* Input Area */}
                        <form onSubmit={handleSend} className="p-3 md:p-4 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                            <div className="flex items-end gap-2">
                                <motion.button
                                    whileTap={{ scale: 0.9 }}
                                    type="button"
                                    className="p-2.5 text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                                >
                                    <Plus size={22} />
                                </motion.button>
                                <div className="flex-1 flex items-end gap-2 bg-slate-100 dark:bg-slate-800 rounded-full px-4 py-2 min-w-0">
                                    <input
                                        type="text"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="Message..."
                                        className="flex-1 bg-transparent border-0 text-sm text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none min-w-0"
                                    />
                                    {!message.trim() && (
                                        <>
                                            <motion.button whileTap={{ scale: 0.9 }} type="button" className="text-slate-500 dark:text-slate-400 hover:text-cyan-500 transition-colors">
                                                <Camera size={20} />
                                            </motion.button>
                                            <motion.button whileTap={{ scale: 0.9 }} type="button" className="text-slate-500 dark:text-slate-400 hover:text-cyan-500 transition-colors">
                                                <Mic size={20} />
                                            </motion.button>
                                        </>
                                    )}
                                </div>
                                {message.trim() ? (
                                    <motion.button
                                        whileTap={{ scale: 0.9 }}
                                        type="submit"
                                        className="p-2.5 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full transition-colors shadow-lg shadow-cyan-500/30"
                                    >
                                        <Send size={20} />
                                    </motion.button>
                                ) : (
                                    <motion.button
                                        whileTap={{ scale: 0.9 }}
                                        type="button"
                                        className="p-2.5 text-slate-600 dark:text-slate-400 hover:text-cyan-500 transition-colors"
                                    >
                                        <Paperclip size={20} />
                                    </motion.button>
                                )}
                            </div>
                        </form>
                    </>
                ) : (
                    <div className="hidden md:flex flex-col items-center justify-center h-full text-slate-400 dark:text-slate-600">
                        <div className="w-32 h-32 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4">
                            <Send size={48} className="text-slate-300 dark:text-slate-700" />
                        </div>
                        <p className="text-lg font-medium">Select a conversation</p>
                        <p className="text-sm">Choose from your existing messages</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ChatSystem;
