import { motion } from "framer-motion";
import {
    User,
    Bell,
    Shield,
    Palette,
    Globe,
    HelpCircle,
    ChevronRight,
    Moon,
    Sun,
    LogOut
} from "lucide-react";
import { ClaraBackground } from "@/components/ui/ClaraBackground";
import { Navbar } from "@/components/ui/Navbar";
import { cn } from "@/lib/utils";

const settingsSections = [
    {
        title: "Account",
        items: [
            { icon: User, label: "Profile", description: "Manage your personal information" },
            { icon: Shield, label: "Privacy & Security", description: "Control your data and security settings" },
            { icon: Bell, label: "Notifications", description: "Configure how agents notify you" },
        ],
    },
    {
        title: "Preferences",
        items: [
            { icon: Palette, label: "Appearance", description: "Customize the look and feel" },
            { icon: Globe, label: "Language & Region", description: "Set your language and timezone" },
        ],
    },
    {
        title: "Support",
        items: [
            { icon: HelpCircle, label: "Help Center", description: "Get help with Clara" },
        ],
    },
];

const Settings = () => {
    return (
        <div className="min-h-screen relative">
            <ClaraBackground />
            <Navbar />

            <main className="pt-28 pb-20 px-4">
                <div className="max-w-3xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                            Settings
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Manage your account and preferences.
                        </p>
                    </motion.div>

                    {/* Profile Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="glass-card p-6 mb-8"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-2xl font-bold text-primary-foreground">
                                JD
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-foreground">John Doe</h2>
                                <p className="text-muted-foreground">john.doe@example.com</p>
                            </div>
                            <button className="px-4 py-2 rounded-lg bg-muted/50 text-foreground hover:bg-muted transition-colors text-sm font-medium">
                                Edit Profile
                            </button>
                        </div>
                    </motion.div>

                    {/* Settings Sections */}
                    {settingsSections.map((section, sectionIndex) => (
                        <motion.div
                            key={section.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 + sectionIndex * 0.1 }}
                            className="mb-8"
                        >
                            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
                                {section.title}
                            </h3>
                            <div className="glass-card overflow-hidden">
                                {section.items.map((item, itemIndex) => (
                                    <button
                                        key={item.label}
                                        className={cn(
                                            "w-full flex items-center gap-4 p-4 hover:bg-muted/30 transition-colors text-left",
                                            itemIndex !== section.items.length - 1 && "border-b border-border/50"
                                        )}
                                    >
                                        <div className="w-10 h-10 rounded-xl bg-muted/50 flex items-center justify-center">
                                            <item.icon className="w-5 h-5 text-muted-foreground" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-medium text-foreground">{item.label}</p>
                                            <p className="text-sm text-muted-foreground">{item.description}</p>
                                        </div>
                                        <ChevronRight className="w-5 h-5 text-muted-foreground" />
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    ))}

                    {/* Danger Zone */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <h3 className="text-sm font-medium text-destructive uppercase tracking-wider mb-4">
                            Danger Zone
                        </h3>
                        <div className="glass-card border-destructive/30">
                            <button className="w-full flex items-center gap-4 p-4 hover:bg-destructive/10 transition-colors text-left">
                                <div className="w-10 h-10 rounded-xl bg-destructive/20 flex items-center justify-center">
                                    <LogOut className="w-5 h-5 text-destructive" />
                                </div>
                                <div className="flex-1">
                                    <p className="font-medium text-destructive">Sign Out</p>
                                    <p className="text-sm text-muted-foreground">Sign out of your account</p>
                                </div>
                            </button>
                        </div>
                    </motion.div>
                </div>
            </main>
        </div>
    );
};

export default Settings;
