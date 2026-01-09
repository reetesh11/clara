import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface AgentCardProps {
  name: string;
  description: string;
  icon: LucideIcon;
  variant: "cooking" | "health" | "reminder" | "default";
  status?: "active" | "pending" | "inactive";
  lastActivity?: string;
  isInstalled?: boolean;
  onAction?: () => void;
  actionLabel?: string;
  className?: string;
}

const variantStyles = {
  cooking: {
    iconBg: "bg-cooking/20",
    iconColor: "text-cooking",
    border: "hover:border-cooking/40",
    glow: "hover:shadow-[0_0_30px_hsl(8_80%_58%_/_0.2)]",
  },
  health: {
    iconBg: "bg-health/20",
    iconColor: "text-health",
    border: "hover:border-health/40",
    glow: "hover:shadow-[0_0_30px_hsl(158_64%_48%_/_0.2)]",
  },
  reminder: {
    iconBg: "bg-reminder/20",
    iconColor: "text-reminder",
    border: "hover:border-reminder/40",
    glow: "hover:shadow-[0_0_30px_hsl(43_96%_56%_/_0.2)]",
  },
  default: {
    iconBg: "bg-primary/20",
    iconColor: "text-primary",
    border: "hover:border-primary/40",
    glow: "hover:shadow-[0_0_30px_hsl(174_72%_56%_/_0.2)]",
  },
};

export const AgentCard = ({
  name,
  description,
  icon: Icon,
  variant = "default",
  status = "inactive",
  lastActivity,
  isInstalled = false,
  onAction,
  actionLabel = "Add to Circle",
  className,
}: AgentCardProps) => {
  const styles = variantStyles[variant];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "glass-card p-6 cursor-pointer transition-all duration-300",
        styles.border,
        styles.glow,
        className
      )}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={cn("p-3 rounded-xl", styles.iconBg)}>
          <Icon className={cn("w-6 h-6", styles.iconColor)} />
        </div>
        {status !== "inactive" && (
          <div className="flex items-center gap-2">
            <div
              className={cn(
                "status-dot",
                status === "active" ? "status-active" : "status-pending"
              )}
            />
            <span className="text-xs text-muted-foreground capitalize">
              {status}
            </span>
          </div>
        )}
      </div>

      <h3 className="text-lg font-semibold text-foreground mb-2">{name}</h3>
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
        {description}
      </p>

      {lastActivity && (
        <p className="text-xs text-muted-foreground/70 mb-4">
          Last active: {lastActivity}
        </p>
      )}

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onAction}
        className={cn(
          "w-full py-2.5 px-4 rounded-lg font-medium text-sm transition-all",
          isInstalled
            ? "bg-muted text-muted-foreground hover:bg-muted/80"
            : "btn-gradient text-primary-foreground"
        )}
      >
        <span className="relative z-10">
          {isInstalled ? "Open Agent" : actionLabel}
        </span>
      </motion.button>
    </motion.div>
  );
};
