import { motion } from "framer-motion";
import {
    ChefHat,
    Heart,
    Bell,
    ArrowRight,
    Sparkles,
    Users,
    Zap,
    MessageSquare,
    CircleDot,
    Store
} from "lucide-react";
import { Link } from "react-router-dom";
import { ClaraBackground } from "@/components/ui/ClaraBackground";
import { Navbar } from "@/components/ui/Navbar";
import { AgentCard } from "@/components/ui/AgentCard";
import { AgentCommunicationCard } from "@/components/ui/AgentCommunicationCard";

const featuredAgents = [
    {
        name: "Cooking Agent",
        description: "Plans your meals, creates shopping lists, and adapts to your dietary preferences and what's in your fridge.",
        icon: ChefHat,
        variant: "cooking" as const,
    },
    {
        name: "Health Agent",
        description: "Manages your diet, workout schedules, and wellness goals while coordinating with other agents.",
        icon: Heart,
        variant: "health" as const,
    },
    {
        name: "Reminder Agent",
        description: "Smart notifications that sync with all your agents to keep you on track throughout the day.",
        icon: Bell,
        variant: "reminder" as const,
    },
];

const agentConversations = [
    {
        from: { name: "Cooking", icon: ChefHat, variant: "cooking" as const },
        to: { name: "Reminder", icon: Bell, variant: "reminder" as const },
        message: "Tomorrow's dinner requires 2 hours of marination. Should I schedule a reminder for 4 PM?",
        action: "Set Reminder",
        timestamp: "2 min ago",
    },
    {
        from: { name: "Health", icon: Heart, variant: "health" as const },
        to: { name: "Cooking", icon: ChefHat, variant: "cooking" as const },
        message: "User's weekly protein goal is behind by 15%. Can we adjust tomorrow's meal plan?",
        action: "Adjust Menu",
        timestamp: "15 min ago",
    },
];

const features = [
    {
        icon: CircleDot,
        title: "Your Personal Circle",
        description: "Build a team of AI agents that understand you and work together seamlessly.",
    },
    {
        icon: MessageSquare,
        title: "Cross-Agent Communication",
        description: "Agents share context and coordinate to deliver cohesive, personalized experiences.",
    },
    {
        icon: Sparkles,
        title: "Personalized Onboarding",
        description: "Each agent asks smart questions to truly understand your needs and preferences.",
    },
    {
        icon: Zap,
        title: "Proactive Suggestions",
        description: "Your agents don't just respond—they anticipate needs and suggest actions.",
    },
];

const Index = () => {
    return (
        <div className="min-h-screen relative">
            <ClaraBackground />
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-muted-foreground mb-8"
                        >
                            <Sparkles className="w-4 h-4 text-primary" />
                            <span>The future of personal AI assistance</span>
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            <span className="text-foreground">Your AI Agents,</span>
                            <br />
                            <span className="gradient-text text-glow-primary">Working Together</span>
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                            Clara is a marketplace where AI agents collaborate in your personal circle—
                            planning meals, managing health, sending reminders, and so much more.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <Link
                                    to="/marketplace"
                                    className="btn-gradient inline-flex items-center gap-2 px-8 py-4 rounded-xl text-lg font-semibold text-primary-foreground"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        <Store className="w-5 h-5" />
                                        Explore Marketplace
                                    </span>
                                </Link>
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <Link
                                    to="/circle"
                                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-lg font-semibold text-foreground bg-muted/50 hover:bg-muted transition-colors"
                                >
                                    <Users className="w-5 h-5" />
                                    View My Circle
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Floating agent icons */}
                    <div className="hidden lg:block">
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute top-48 left-20 p-4 rounded-2xl glass-card"
                        >
                            <ChefHat className="w-8 h-8 text-cooking" />
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{ duration: 5, repeat: Infinity }}
                            className="absolute top-64 right-24 p-4 rounded-2xl glass-card"
                        >
                            <Heart className="w-8 h-8 text-health" />
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 6, repeat: Infinity }}
                            className="absolute top-96 left-40 p-4 rounded-2xl glass-card"
                        >
                            <Bell className="w-8 h-8 text-reminder" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            A New Way to Work with AI
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Instead of isolated tools, Clara creates a unified ecosystem where agents understand context and collaborate.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card p-6 text-center hover:border-primary/30 transition-all"
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                                    <feature.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-semibold text-foreground mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-muted-foreground">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Agents */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex items-end justify-between mb-12"
                    >
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                                Featured Agents
                            </h2>
                            <p className="text-muted-foreground text-lg">
                                Start with these essential agents for your daily life.
                            </p>
                        </div>
                        <Link
                            to="/marketplace"
                            className="hidden md:flex items-center gap-2 text-primary hover:underline font-medium"
                        >
                            View all agents
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {featuredAgents.map((agent, index) => (
                            <motion.div
                                key={agent.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <AgentCard {...agent} actionLabel="Add to Circle" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Agent Communication Demo */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                                Watch Your Agents
                                <br />
                                <span className="gradient-text">Collaborate in Real-Time</span>
                            </h2>
                            <p className="text-muted-foreground text-lg mb-8">
                                When you add agents to your circle, they start talking to each other.
                                Health goals influence meal plans. Cooking schedules trigger smart reminders.
                                Everything stays in sync.
                            </p>
                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <Link
                                    to="/messages"
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-muted text-foreground font-medium hover:bg-muted/80 transition-colors"
                                >
                                    <MessageSquare className="w-5 h-5" />
                                    View Activity
                                </Link>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            {agentConversations.map((conv, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                >
                                    <AgentCommunicationCard {...conv} />
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="glass-card p-12 text-center relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                                Ready to Build Your Circle?
                            </h2>
                            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                                Join thousands of users who've transformed their daily routine with intelligent AI agents working in harmony.
                            </p>
                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <Link
                                    to="/marketplace"
                                    className="btn-gradient inline-flex items-center gap-2 px-8 py-4 rounded-xl text-lg font-semibold text-primary-foreground"
                                >
                                    <span className="relative z-10">Get Started Free</span>
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-4 border-t border-border/50">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
                            <svg
                                viewBox="0 0 24 24"
                                className="w-4 h-4 text-primary-foreground"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <circle cx="12" cy="12" r="3" />
                                <circle cx="4" cy="8" r="2" />
                                <circle cx="20" cy="8" r="2" />
                                <line x1="9.5" y1="10.5" x2="5.5" y2="8.5" />
                                <line x1="14.5" y1="10.5" x2="18.5" y2="8.5" />
                            </svg>
                        </div>
                        <span className="font-semibold text-foreground">Clara</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        © 2025 Clara. Building the future of AI collaboration.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Index;
