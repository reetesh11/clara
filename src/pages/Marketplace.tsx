import { motion } from "framer-motion";
import {
    ChefHat,
    Heart,
    Bell,
    Search,
    Filter,
    FileText,
    Users,
    Calculator,
    Briefcase,
    GraduationCap,
    Car,
    Dumbbell,
    Wallet,
    Star
} from "lucide-react";
import { useState } from "react";
import { ClaraBackground } from "@/components/ui/ClaraBackground";
import { Navbar } from "@/components/ui/Navbar";
import { AgentCard } from "@/components/ui/AgentCard";
import { cn } from "@/lib/utils";

const categories = [
    { id: "all", label: "All Agents" },
    { id: "lifestyle", label: "Lifestyle" },
    { id: "health", label: "Health & Fitness" },
    { id: "finance", label: "Finance" },
    { id: "productivity", label: "Productivity" },
    { id: "business", label: "Business" },
];

const allAgents = [
    {
        id: 1,
        name: "Cooking Agent",
        description: "Plans your meals, creates shopping lists, and adapts to your dietary preferences and what's in your fridge.",
        icon: ChefHat,
        variant: "cooking" as const,
        category: "lifestyle",
        rating: 4.9,
        users: "12K+",
        isPopular: true,
    },
    {
        id: 2,
        name: "Health Agent",
        description: "Manages your diet, workout schedules, and wellness goals while coordinating with other agents.",
        icon: Heart,
        variant: "health" as const,
        category: "health",
        rating: 4.8,
        users: "8K+",
        isPopular: true,
    },
    {
        id: 3,
        name: "Reminder Agent",
        description: "Smart notifications that sync with all your agents to keep you on track throughout the day.",
        icon: Bell,
        variant: "reminder" as const,
        category: "productivity",
        rating: 4.9,
        users: "15K+",
        isPopular: true,
    },
    {
        id: 4,
        name: "Tax Filing Agent",
        description: "Helps you organize documents, track deductions, and prepare for tax season with ease.",
        icon: Calculator,
        variant: "default" as const,
        category: "finance",
        rating: 4.7,
        users: "5K+",
    },
    {
        id: 5,
        name: "Invoice Agent",
        description: "Creates professional invoices, tracks payments, and manages your billing workflow.",
        icon: FileText,
        variant: "default" as const,
        category: "business",
        rating: 4.6,
        users: "3K+",
    },
    {
        id: 6,
        name: "Resume Shortlister",
        description: "Analyzes candidates against job descriptions and ranks them by fit for your roles.",
        icon: Briefcase,
        variant: "default" as const,
        category: "business",
        rating: 4.5,
        users: "2K+",
    },
    {
        id: 7,
        name: "Onboarding Agent",
        description: "Guides new hires through company processes and answers their questions in real-time.",
        icon: GraduationCap,
        variant: "default" as const,
        category: "business",
        rating: 4.4,
        users: "1K+",
    },
    {
        id: 8,
        name: "Fitness Coach",
        description: "Creates personalized workout plans and tracks your progress towards fitness goals.",
        icon: Dumbbell,
        variant: "health" as const,
        category: "health",
        rating: 4.8,
        users: "6K+",
    },
    {
        id: 9,
        name: "Budget Tracker",
        description: "Monitors spending, sets savings goals, and provides insights on your financial health.",
        icon: Wallet,
        variant: "default" as const,
        category: "finance",
        rating: 4.6,
        users: "7K+",
    },
    {
        id: 10,
        name: "Team Coordinator",
        description: "Schedules meetings, manages team tasks, and keeps everyone aligned on projects.",
        icon: Users,
        variant: "default" as const,
        category: "productivity",
        rating: 4.5,
        users: "4K+",
    },
    {
        id: 11,
        name: "Commute Planner",
        description: "Optimizes your daily travel, suggests best routes, and coordinates with your schedule.",
        icon: Car,
        variant: "default" as const,
        category: "lifestyle",
        rating: 4.3,
        users: "2K+",
    },
];

const Marketplace = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");

    const filteredAgents = allAgents.filter((agent) => {
        const matchesSearch = agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            agent.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === "all" || agent.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen relative">
            <ClaraBackground />
            <Navbar />

            <main className="pt-28 pb-20 px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                            Agent Marketplace
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Discover and add powerful AI agents to your personal circle.
                            Each agent is designed to work seamlessly with others.
                        </p>
                    </motion.div>

                    {/* Search and Filter */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="flex flex-col md:flex-row gap-4 mb-8"
                    >
                        <div className="relative flex-1">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <input
                                type="text"
                                placeholder="Search agents..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 rounded-xl glass-card bg-card/60 border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                            />
                        </div>
                        <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-card text-muted-foreground hover:text-foreground transition-colors">
                            <Filter className="w-5 h-5" />
                            Filters
                        </button>
                    </motion.div>

                    {/* Categories */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide"
                    >
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={cn(
                                    "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all",
                                    selectedCategory === category.id
                                        ? "bg-primary text-primary-foreground"
                                        : "glass-card text-muted-foreground hover:text-foreground"
                                )}
                            >
                                {category.label}
                            </button>
                        ))}
                    </motion.div>

                    {/* Popular Section */}
                    {selectedCategory === "all" && !searchQuery && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="mb-12"
                        >
                            <div className="flex items-center gap-2 mb-6">
                                <Star className="w-5 h-5 text-warning" />
                                <h2 className="text-xl font-semibold text-foreground">Popular Agents</h2>
                            </div>
                            <div className="grid md:grid-cols-3 gap-6">
                                {allAgents
                                    .filter((a) => a.isPopular)
                                    .map((agent, index) => (
                                        <motion.div
                                            key={agent.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.1 * index }}
                                        >
                                            <AgentCard {...agent} actionLabel="Add to Circle" />
                                            <div className="flex items-center justify-between mt-3 px-2">
                                                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                                    <Star className="w-4 h-4 text-warning fill-warning" />
                                                    <span>{agent.rating}</span>
                                                </div>
                                                <span className="text-sm text-muted-foreground">{agent.users} users</span>
                                            </div>
                                        </motion.div>
                                    ))}
                            </div>
                        </motion.div>
                    )}

                    {/* All Agents Grid */}
                    <div>
                        <h2 className="text-xl font-semibold text-foreground mb-6">
                            {selectedCategory === "all" ? "All Agents" : categories.find(c => c.id === selectedCategory)?.label}
                            <span className="ml-2 text-muted-foreground text-base font-normal">
                                ({filteredAgents.length})
                            </span>
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredAgents.map((agent, index) => (
                                <motion.div
                                    key={agent.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.05 * index }}
                                >
                                    <AgentCard {...agent} actionLabel="Add to Circle" />
                                    <div className="flex items-center justify-between mt-3 px-2">
                                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                            <Star className="w-4 h-4 text-warning fill-warning" />
                                            <span>{agent.rating}</span>
                                        </div>
                                        <span className="text-sm text-muted-foreground">{agent.users} users</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {filteredAgents.length === 0 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center py-16"
                            >
                                <p className="text-muted-foreground text-lg">No agents found matching your criteria.</p>
                                <button
                                    onClick={() => {
                                        setSearchQuery("");
                                        setSelectedCategory("all");
                                    }}
                                    className="mt-4 text-primary hover:underline"
                                >
                                    Clear filters
                                </button>
                            </motion.div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Marketplace;
