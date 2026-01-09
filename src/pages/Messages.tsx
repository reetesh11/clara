import { motion } from "framer-motion";
import {
    ChefHat,
    Heart,
    Bell,
    ArrowRight,
    Check,
    X,
    Clock,
    Filter,
    Search
} from "lucide-react";
import { useState } from "react";
import { ClaraBackground } from "@/components/ui/ClaraBackground";
import { Navbar } from "@/components/ui/Navbar";
import { cn } from "@/lib/utils";

interface AgentMessage {
    id: number;
    from: {
        name: string;
        icon: React.ComponentType<{ className?: string }>;
        variant: "cooking" | "health" | "reminder";
    };
    to: {
        name: string;
        icon: React.ComponentType<{ className?: string }>;
        variant: "cooking" | "health" | "reminder";
    };
    message: string;
    action?: string;
    timestamp: string;
    status: "pending" | "approved" | "dismissed";
    type: "suggestion" | "sync" | "alert";
}

const initialMessages: AgentMessage[] = [
    {
        id: 1,
        from: { name: "Cooking", icon: ChefHat, variant: "cooking" },
        to: { name: "Reminder", icon: Bell, variant: "reminder" },
        message: "Tomorrow's dinner (Butter Chicken) requires 2 hours of marination. Should I schedule a prep reminder for 4 PM?",
        action: "Set Reminder for 4 PM",
        timestamp: "2 min ago",
        status: "pending",
        type: "suggestion",
    },
    {
        id: 2,
        from: { name: "Health", icon: Heart, variant: "health" },
        to: { name: "Cooking", icon: ChefHat, variant: "cooking" },
        message: "User's weekly protein intake is 15% below target. Can we adjust tomorrow's meal plan to include more protein-rich options?",
        action: "Adjust Menu",
        timestamp: "15 min ago",
        status: "pending",
        type: "suggestion",
    },
    {
        id: 3,
        from: { name: "Reminder", icon: Bell, variant: "reminder" },
        to: { name: "Health", icon: Heart, variant: "health" },
        message: "User skipped the 7 AM yoga reminder 3 times this week. Should we reschedule to 8 AM instead?",
        action: "Reschedule to 8 AM",
        timestamp: "1 hour ago",
        status: "pending",
        type: "alert",
    },
    {
        id: 4,
        from: { name: "Cooking", icon: ChefHat, variant: "cooking" },
        to: { name: "Health", icon: Heart, variant: "health" },
        message: "Synced this week's meal plan with nutritional data. Total estimated calories: 12,500 (avg 1,785/day).",
        timestamp: "2 hours ago",
        status: "approved",
        type: "sync",
    },
    {
        id: 5,
        from: { name: "Health", icon: Heart, variant: "health" },
        to: { name: "Reminder", icon: Bell, variant: "reminder" },
        message: "Created 5 new daily water intake reminders based on user's hydration goal.",
        timestamp: "3 hours ago",
        status: "approved",
        type: "sync",
    },
    {
        id: 6,
        from: { name: "Reminder", icon: Bell, variant: "reminder" },
        to: { name: "Cooking", icon: ChefHat, variant: "cooking" },
        message: "Grocery shopping reminder for Saturday has been confirmed. Shared the shopping list.",
        timestamp: "5 hours ago",
        status: "approved",
        type: "sync",
    },
];

const variantStyles = {
    cooking: {
        bg: "bg-cooking/20",
        text: "text-cooking",
        border: "border-cooking/30",
    },
    health: {
        bg: "bg-health/20",
        text: "text-health",
        border: "border-health/30",
    },
    reminder: {
        bg: "bg-reminder/20",
        text: "text-reminder",
        border: "border-reminder/30",
    },
};

const typeStyles = {
    suggestion: "border-l-primary",
    sync: "border-l-success",
    alert: "border-l-warning",
};

const Messages = () => {
    const [messages, setMessages] = useState(initialMessages);
    const [filter, setFilter] = useState<"all" | "pending" | "approved">("all");

    const handleAction = (id: number, status: "approved" | "dismissed") => {
        setMessages((prev) =>
            prev.map((msg) => (msg.id === id ? { ...msg, status } : msg))
        );
    };

    const filteredMessages = messages.filter((msg) => {
        if (filter === "all") return true;
        return msg.status === filter;
    });

    const pendingCount = messages.filter((m) => m.status === "pending").length;

    return (
        <div className="min-h-screen relative">
            <ClaraBackground />
            <Navbar />

            <main className="pt-28 pb-20 px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                            Activity
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Watch your agents communicate and coordinate in real-time.
                            {pendingCount > 0 && (
                                <span className="ml-2 text-primary font-medium">
                                    {pendingCount} pending actions
                                </span>
                            )}
                        </p>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="grid grid-cols-3 gap-4 mb-8"
                    >
                        <div className="glass-card p-4 text-center">
                            <p className="text-2xl font-bold text-foreground">{messages.length}</p>
                            <p className="text-sm text-muted-foreground">Total Messages</p>
                        </div>
                        <div className="glass-card p-4 text-center">
                            <p className="text-2xl font-bold text-primary">{pendingCount}</p>
                            <p className="text-sm text-muted-foreground">Pending Actions</p>
                        </div>
                        <div className="glass-card p-4 text-center">
                            <p className="text-2xl font-bold text-success">
                                {messages.filter((m) => m.status === "approved").length}
                            </p>
                            <p className="text-sm text-muted-foreground">Completed</p>
                        </div>
                    </motion.div>

                    {/* Filters */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex gap-2 mb-6"
                    >
                        {[
                            { id: "all", label: "All" },
                            { id: "pending", label: "Pending" },
                            { id: "approved", label: "Completed" },
                        ].map((f) => (
                            <button
                                key={f.id}
                                onClick={() => setFilter(f.id as typeof filter)}
                                className={cn(
                                    "px-4 py-2 rounded-lg text-sm font-medium transition-all",
                                    filter === f.id
                                        ? "bg-primary text-primary-foreground"
                                        : "glass-card text-muted-foreground hover:text-foreground"
                                )}
                            >
                                {f.label}
                            </button>
                        ))}
                    </motion.div>

                    {/* Messages List */}
                    <div className="space-y-4">
                        {filteredMessages.map((msg, index) => {
                            const FromIcon = msg.from.icon;
                            const ToIcon = msg.to.icon;
                            const fromStyles = variantStyles[msg.from.variant];
                            const toStyles = variantStyles[msg.to.variant];

                            return (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.05 * index }}
                                    className={cn(
                                        "glass-card p-5 border-l-4 transition-all",
                                        typeStyles[msg.type],
                                        msg.status === "dismissed" && "opacity-50"
                                    )}
                                >
                                    {/* Header */}
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className={cn("p-2 rounded-lg", fromStyles.bg)}>
                                            <FromIcon className={cn("w-4 h-4", fromStyles.text)} />
                                        </div>
                                        <span className="text-sm font-medium text-foreground">
                                            {msg.from.name}
                                        </span>
                                        <ArrowRight className="w-4 h-4 text-muted-foreground" />
                                        <div className={cn("p-2 rounded-lg", toStyles.bg)}>
                                            <ToIcon className={cn("w-4 h-4", toStyles.text)} />
                                        </div>
                                        <span className="text-sm font-medium text-foreground">
                                            {msg.to.name}
                                        </span>
                                        <div className="flex items-center gap-1 ml-auto text-xs text-muted-foreground">
                                            <Clock className="w-3 h-3" />
                                            {msg.timestamp}
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <p className="text-foreground mb-4">{msg.message}</p>

                                    {/* Action */}
                                    {msg.status === "pending" && msg.action && (
                                        <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                                            <motion.button
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                onClick={() => handleAction(msg.id, "approved")}
                                                className="flex items-center gap-2 px-4 py-2 rounded-lg btn-gradient text-primary-foreground text-sm font-medium"
                                            >
                                                <Check className="w-4 h-4" />
                                                <span className="relative z-10">{msg.action}</span>
                                            </motion.button>
                                            <button
                                                onClick={() => handleAction(msg.id, "dismissed")}
                                                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/50 text-muted-foreground hover:text-foreground text-sm transition-colors"
                                            >
                                                <X className="w-4 h-4" />
                                                Dismiss
                                            </button>
                                        </div>
                                    )}

                                    {msg.status === "approved" && (
                                        <div className="flex items-center gap-2 pt-3 text-sm text-success">
                                            <Check className="w-4 h-4" />
                                            Action completed
                                        </div>
                                    )}

                                    {msg.status === "dismissed" && (
                                        <div className="flex items-center gap-2 pt-3 text-sm text-muted-foreground">
                                            <X className="w-4 h-4" />
                                            Dismissed
                                        </div>
                                    )}
                                </motion.div>
                            );
                        })}

                        {filteredMessages.length === 0 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center py-16"
                            >
                                <p className="text-muted-foreground text-lg">
                                    No messages match your filter.
                                </p>
                            </motion.div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Messages;
