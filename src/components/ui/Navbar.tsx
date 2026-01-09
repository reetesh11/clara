import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Circle, Store, MessageSquare, Settings, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { path: "/", label: "Home", icon: Circle },
  { path: "/marketplace", label: "Marketplace", icon: Store },
  { path: "/circle", label: "My Circle", icon: Circle },
  { path: "/messages", label: "Activity", icon: MessageSquare },
];

export const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="glass-card px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-primary-foreground"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="3" />
                  <circle cx="4" cy="8" r="2" />
                  <circle cx="20" cy="8" r="2" />
                  <circle cx="4" cy="16" r="2" />
                  <circle cx="20" cy="16" r="2" />
                  <line x1="9.5" y1="10.5" x2="5.5" y2="8.5" />
                  <line x1="14.5" y1="10.5" x2="18.5" y2="8.5" />
                  <line x1="9.5" y1="13.5" x2="5.5" y2="15.5" />
                  <line x1="14.5" y1="13.5" x2="18.5" y2="15.5" />
                </svg>
              </div>
              <div className="absolute inset-0 rounded-xl bg-primary/30 blur-lg -z-10" />
            </div>
            <span className="text-xl font-bold text-foreground">Clara</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              const Icon = item.icon;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "relative px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium transition-all",
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 bg-primary/10 rounded-lg -z-10"
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Link
              to="/settings"
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors hidden md:flex"
            >
              <Settings className="w-5 h-5" />
            </Link>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-gradient px-4 py-2 rounded-lg text-sm font-medium text-primary-foreground hidden md:block"
            >
              <span className="relative z-10">Get Started</span>
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-foreground"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden glass-card mt-2 p-4"
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )}
                >
                  <Icon className="w-5 h-5" />
                  {item.label}
                </Link>
              );
            })}
            <motion.button
              whileTap={{ scale: 0.98 }}
              className="btn-gradient w-full mt-4 px-4 py-3 rounded-lg text-sm font-medium text-primary-foreground"
            >
              <span className="relative z-10">Get Started</span>
            </motion.button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};
