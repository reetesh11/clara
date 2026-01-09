import { motion } from "framer-motion";
import {
    ChefHat,
    Heart,
    Bell,
    Plus,
    Settings,
    MoreVertical,
    Power,
    Trash2,
    RefreshCw
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ClaraBackground } from "@/components/ui/ClaraBackground";
import { Navbar } from "@/components/ui/Navbar";
import { cn } from "@/lib/utils";

interface InstalledAgent {
    id: number;
    name: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    variant: "cooking" | "health" | "reminder";
    status: "active" | "paused";
    lastActivity: string;
    stats: {
        label: string;
        value: string;
    }[];
}

const installedAgents: InstalledAgent[] = [
    {
        id: 1,
        name: "Cooking Agent",
        description: "Managing your weekly meal plans and shopping lists.",
        icon: ChefHat,
        variant: "cooking",
        status: "active",
        lastActivity: "2 minutes ago",
        stats: [
            { label: "Meals Planned", value: "47" },
            { label: "Recipes Saved", value: "23" },
        ],
    },
    {
        id: 2,
        name: "Health Agent",
        description: "Tracking your wellness goals and daily activities.",
        icon: Heart,
        variant: "health",
        status: "active",
        lastActivity: "15 minutes ago",
        stats: [
            { label: "Goals Active", value: "3" },
            { label: "Days Tracked", value: "14" },
        ],
    },
    {
        id: 3,
        name: "Reminder Agent",
        description: "Keeping you on schedule with smart notifications.",
        icon: Bell,
        variant: "reminder",
        status: "active",
        lastActivity: "Just now",
        stats: [
            { label: "Reminders Sent", value: "156" },
            { label: "Completion Rate", value: "87%" },
        ],
    },
];

const variantStyles = {
    cooking: {
        iconBg: "bg-cooking/20",
        iconColor: "text-cooking",
        borderColor: "border-cooking/30",
        glowColor: "shadow-[0_0_30px_hsl(8_80%_58%_/_0.15)]",
    },
    health: {
        iconBg: "bg-health/20",
        iconColor: "text-health",
        borderColor: "border-health/30",
        glowColor: "shadow-[0_0_30px_hsl(158_64%_48%_/_0.15)]",
    },
    reminder: {
        iconBg: "bg-reminder/20",
        iconColor: "text-reminder",
        borderColor: "border-reminder/30",
        glowColor: "shadow-[0_0_30px_hsl(43_96%_56%_/_0.15)]",
    },
};

const Circle = () => {
    const [agents, setAgents] = useState(installedAgents);
    const [selectedAgent, setSelectedAgent] = useState<number | null>(null);

    const toggleAgentStatus = (id: number) => {
        setAgents((prev) =>
            prev.map((agent) =>
                agent.id === id
                    ? { ...agent, status: agent.status === "active" ? "paused" : "active" }
                    : agent
            )
        );
    };

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
                        className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12"
                    >
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                                My Circle
                            </h1>
                            <p className="text-lg text-muted-foreground">
                                {agents.length} agents working together in your personal circle.
                            </p>
                        </div>
                        <Link
                            to="/marketplace"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl btn-gradient text-primary-foreground font-medium"
                        >
                            <Plus className="w-5 h-5" />
                            <span className="relative z-10">Add Agent</span>
                        </Link>
                    </motion.div>

                    {/* Circle Visualization */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="glass-card p-8 mb-12 relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

                        <div className="relative z-10 flex flex-col items-center">
                            <h3 className="text-lg font-medium text-muted-foreground mb-8">Your Agent Circle</h3>

                            {/* Circle visualization */}
                            <div className="relative w-64 h-64 md:w-80 md:h-80">
                                {/* Center circle */}
                                <div className="absolute inset-1/4 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center">
                                    <div className="text-center">
                                        <p className="text-2xl font-bold text-foreground">{agents.length}</p>
                                        <p className="text-sm text-muted-foreground">Active</p>
                                    </div>
                                </div>

                                {/* Agent nodes */}
                                {agents.map((agent, index) => {
                                    const angle = (index * 360) / agents.length - 90;
                                    const radian = (angle * Math.PI) / 180;
                                    const radius = 42;
                                    const x = 50 + radius * Math.cos(radian);
                                    const y = 50 + radius * Math.sin(radian);
                                    const styles = variantStyles[agent.variant];
                                    const Icon = agent.icon;

                                    return (
                                        <motion.div
                                            key={agent.id}
                                            initial={{ scale: 0, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{ delay: 0.3 + index * 0.1 }}
                                            className={cn(
                                                "absolute w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center cursor-pointer transition-all",
                                                styles.iconBg,
                                                styles.borderColor,
                                                "border",
                                                agent.status === "active" && "pulse-glow"
                                            )}
                                            style={{
                                                left: `${x}%`,
                                                top: `${y}%`,
                                                transform: "translate(-50%, -50%)",
                                            }}
                                            onClick={() => setSelectedAgent(agent.id)}
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            <Icon className={cn("w-6 h-6 md:w-7 md:h-7", styles.iconColor)} />
                                        </motion.div>
                                    );
                                })}

                                {/* Connection lines */}
                                <svg className="absolute inset-0 w-full h-full">
                                    {agents.map((agent, i) => {
                                        const angle1 = (i * 360) / agents.length - 90;
                                        const angle2 = ((i + 1) % agents.length * 360) / agents.length - 90;
                                        const radius = 42;
                                        const x1 = 50 + radius * Math.cos((angle1 * Math.PI) / 180);
                                        const y1 = 50 + radius * Math.sin((angle1 * Math.PI) / 180);
                                        const x2 = 50 + radius * Math.cos((angle2 * Math.PI) / 180);
                                        const y2 = 50 + radius * Math.sin((angle2 * Math.PI) / 180);

                                        return (
                                            <line
                                                key={i}
                                                x1={`${x1}%`}
                                                y1={`${y1}%`}
                                                x2={`${x2}%`}
                                                y2={`${y2}%`}
                                                stroke="hsl(var(--primary) / 0.2)"
                                                strokeWidth="1"
                                                strokeDasharray="4 4"
                                            />
                                        );
                                    })}
                                </svg>
                            </div>

                            <p className="mt-8 text-sm text-muted-foreground text-center max-w-md">
                                Your agents are connected and sharing context to provide personalized assistance.
                            </p>
                        </div>
                    </motion.div>

                    {/* Agent Cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {agents.map((agent, index) => {
                            const styles = variantStyles[agent.variant];
                            const Icon = agent.icon;

                            return (
                                <motion.div
                                    key={agent.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * index }}
                                    className={cn(
                                        "glass-card p-6 transition-all",
                                        styles.borderColor,
                                        agent.status === "active" && styles.glowColor
                                    )}
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div className={cn("p-3 rounded-xl", styles.iconBg)}>
                                            <Icon className={cn("w-6 h-6", styles.iconColor)} />
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div
                                                className={cn(
                                                    "status-dot",
                                                    agent.status === "active" ? "status-active" : "status-pending"
                                                )}
                                            />
                                            <button className="p-1.5 rounded-lg hover:bg-muted/50 text-muted-foreground">
                                                <MoreVertical className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>

                                    <h3 className="text-lg font-semibold text-foreground mb-1">{agent.name}</h3>
                                    <p className="text-sm text-muted-foreground mb-4">{agent.description}</p>

                                    <div className="grid grid-cols-2 gap-4 mb-4">
                                        {agent.stats.map((stat) => (
                                            <div key={stat.label} className="bg-muted/30 rounded-lg p-3">
                                                <p className="text-lg font-semibold text-foreground">{stat.value}</p>
                                                <p className="text-xs text-muted-foreground">{stat.label}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <p className="text-xs text-muted-foreground/70 mb-4">
                                        Last active: {agent.lastActivity}
                                    </p>

                                    <div className="flex gap-2">
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="flex-1 py-2.5 px-4 rounded-lg font-medium text-sm bg-muted/50 text-foreground hover:bg-muted transition-colors flex items-center justify-center gap-2"
                                        >
                                            <Settings className="w-4 h-4" />
                                            Configure
                                        </motion.button>
                                        <button
                                            onClick={() => toggleAgentStatus(agent.id)}
                                            className={cn(
                                                "p-2.5 rounded-lg transition-colors",
                                                agent.status === "active"
                                                    ? "bg-muted/50 text-muted-foreground hover:text-warning hover:bg-warning/10"
                                                    : "bg-success/10 text-success hover:bg-success/20"
                                            )}
                                        >
                                            {agent.status === "active" ? (
                                                <Power className="w-4 h-4" />
                                            ) : (
                                                <RefreshCw className="w-4 h-4" />
                                            )}
                                        </button>
                                    </div>
                                </motion.div>
                            );
                        })}

                        {/* Add New Agent Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * agents.length }}
                        >
                            <Link
                                to="/marketplace"
                                className="glass-card p-6 h-full min-h-[280px] flex flex-col items-center justify-center text-center border-dashed border-2 border-border/50 hover:border-primary/40 transition-all group"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-muted/50 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                    <Plus className="w-7 h-7 text-muted-foreground group-hover:text-primary transition-colors" />
                                </div>
                                <h3 className="text-lg font-semibold text-foreground mb-2">Add New Agent</h3>
                                <p className="text-sm text-muted-foreground">
                                    Browse the marketplace to find agents for your circle.
                                </p>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Circle;
