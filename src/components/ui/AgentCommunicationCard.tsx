import { motion } from "framer-motion";
import { ArrowRight, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface AgentMessage {
  from: {
    name: string;
    icon: LucideIcon;
    variant: "cooking" | "health" | "reminder";
  };
  to: {
    name: string;
    icon: LucideIcon;
    variant: "cooking" | "health" | "reminder";
  };
  message: string;
  action?: string;
  timestamp: string;
}

const variantColors = {
  cooking: "text-cooking",
  health: "text-health",
  reminder: "text-reminder",
};

const variantBg = {
  cooking: "bg-cooking/20",
  health: "bg-health/20",
  reminder: "bg-reminder/20",
};

export const AgentCommunicationCard = ({
  from,
  to,
  message,
  action,
  timestamp,
}: AgentMessage) => {
  const FromIcon = from.icon;
  const ToIcon = to.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="glass-card p-4 hover:border-primary/20 transition-all"
    >
      {/* Agent connection header */}
      <div className="flex items-center gap-3 mb-3">
        <div className={cn("p-2 rounded-lg", variantBg[from.variant])}>
          <FromIcon className={cn("w-4 h-4", variantColors[from.variant])} />
        </div>
        <ArrowRight className="w-4 h-4 text-muted-foreground" />
        <div className={cn("p-2 rounded-lg", variantBg[to.variant])}>
          <ToIcon className={cn("w-4 h-4", variantColors[to.variant])} />
        </div>
        <span className="text-xs text-muted-foreground ml-auto">{timestamp}</span>
      </div>

      {/* Message */}
      <p className="text-sm text-foreground mb-3">{message}</p>

      {/* Suggested action */}
      {action && (
        <div className="flex items-center justify-between pt-3 border-t border-border/50">
          <span className="text-xs text-muted-foreground">Suggested action</span>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="text-sm font-medium text-primary hover:underline"
          >
            {action}
          </motion.button>
        </div>
      )}
    </motion.div>
  );
};
