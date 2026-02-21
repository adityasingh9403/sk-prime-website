import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, Loader2, Phone, Briefcase } from 'lucide-react';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'bot', text: 'Namaste! Welcome to SK Prime Group. How can I help you with our services today?' }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef(null);

    // --- MANUAL KNOWLEDGE BASE (No API Required) ---
    const knowledgeBase = {
        "it": "SK Prime Infotech specializes in React, Vite, Node.js, and specialized software like Restaurant POS. Technical Lead: Aditya Singh.",
        "pos": "Our Restaurant POS system is a cloud-based solution currently in deployment for SK Prime Infotech.",
        "sports": "We manage the Super King cricket network and organize flagship leagues like KCPL Season 1.",
        "kcpl": "KCPL Season 1 was a mega event organized by SK Prime, featuring 8 professional teams in Indore.",
        "construction": "We architect modern infrastructure through Verma Construction and Aarav Build Con projects.",
        "property": "We offer premium property brokering and sustainable urban developments in Indore.",
        "events": "SK Prime Events handles grand-scale corporate launches, like our Feb 15, 2026 inauguration.",
        "owner": "SK Prime Group was founded by Harsh Verma (CEO). Sarika Rakesh Verma serves as The Chairman.",
        "contact": "You can reach us at +91 88787 40101 or visit us at SR Empire, Rau, Indore.",
        "address": "Our headquarters is at Shop No. G1, SR Empire, Silver Star City, Rau, Indore.",
        "career": "You can apply through our Careers page. We are often looking for HR, Developers, and Event Managers."
    };

    const getManualResponse = (userInput) => {
        const query = userInput.toLowerCase();
        
        if (query.includes("it") || query.includes("software") || query.includes("web")) return knowledgeBase.it;
        if (query.includes("pos") || query.includes("restaurant")) return knowledgeBase.pos;
        if (query.includes("sports") || query.includes("cricket")) return knowledgeBase.sports;
        if (query.includes("kcpl")) return knowledgeBase.kcpl;
        if (query.includes("construction") || query.includes("build")) return knowledgeBase.construction;
        if (query.includes("property") || query.includes("plot")) return knowledgeBase.property;
        if (query.includes("event")) return knowledgeBase.events;
        if (query.includes("owner") || query.includes("ceo") || query.includes("harsh")) return knowledgeBase.owner;
        if (query.includes("contact") || query.includes("number") || query.includes("phone")) return knowledgeBase.contact;
        if (query.includes("address") || query.includes("office") || query.includes("location")) return knowledgeBase.address;
        if (query.includes("job") || query.includes("career") || query.includes("hiring")) return knowledgeBase.career;
        
        return "I'm sorry, I didn't get that. Please ask about our IT, Sports, Construction services, or contact us at +91 88787 40101.";
    };

    const handleSend = () => {
        if (!input.trim()) return;

        const userMsg = input;
        setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
        setInput('');
        setIsTyping(true);

        // Simulated processing time
        setTimeout(() => {
            const botResponse = getManualResponse(userMsg);
            setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
            setIsTyping(false);
        }, 800);
    };

    useEffect(() => {
        if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }, [messages, isTyping]);

    return (
        <div className="fixed bottom-10 right-10 z-[9999]">
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-16 h-16 bg-[#001233] text-[#D4AF37] rounded-full flex items-center justify-center shadow-2xl border-2 border-[#D4AF37]"
            >
                {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.9 }}
                        className="absolute bottom-24 right-0 w-[350px] md:w-[380px] h-[500px] bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden flex flex-col font-sans"
                    >
                        <div className="bg-[#001233] p-6 text-white flex items-center gap-4 border-b-4 border-[#D4AF37]">
                            <div className="w-10 h-10 bg-[#D4AF37] rounded-full flex items-center justify-center text-[#001233]">
                                <Bot size={24} />
                            </div>
                            <div>
                                <h4 className="font-black text-sm uppercase tracking-widest leading-none">SK Prime Support</h4>
                                <p className="text-[10px] text-[#D4AF37] font-bold mt-1 tracking-wider uppercase">Free Manual Assistant</p>
                            </div>
                        </div>

                        <div ref={scrollRef} className="flex-grow p-6 overflow-y-auto bg-gray-50 space-y-4">
                            {messages.map((msg, i) => (
                                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[85%] p-4 rounded-2xl text-[11px] font-medium leading-relaxed shadow-sm ${
                                        msg.role === 'user' ? 'bg-[#001233] text-white rounded-tr-none' : 'bg-white text-gray-800 border border-gray-100 rounded-tl-none'
                                    }`}>
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            {isTyping && <Loader2 size={16} className="animate-spin text-[#D4AF37] mx-auto" />}
                        </div>

                        <div className="p-4 bg-white border-t border-gray-100 flex items-center gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="Ask about IT, Sports, or Contact..."
                                className="flex-grow bg-gray-100 border-none rounded-xl px-4 py-3 text-xs outline-none focus:ring-1 focus:ring-[#D4AF37]"
                            />
                            <button onClick={handleSend} className="p-3 bg-[#D4AF37] text-[#001233] rounded-xl">
                                <Send size={18} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Chatbot;