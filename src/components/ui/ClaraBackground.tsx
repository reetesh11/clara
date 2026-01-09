import { motion } from "framer-motion";

export const ClaraBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Clara grid pattern */}
      <div className="absolute inset-0 mesh-overlay opacity-50" />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute -top-40 -left-40 w-96 h-96 rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(174 72% 56% / 0.15) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/3 -right-20 w-80 h-80 rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(16 85% 65% / 0.1) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, -20, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-20 left-1/4 w-64 h-64 rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(240 30% 50% / 0.08) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, 25, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Connection lines SVG */}
      <svg className="absolute inset-0 w-full h-full opacity-30">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(174 72% 56% / 0.3)" />
            <stop offset="100%" stopColor="hsl(16 85% 65% / 0.1)" />
          </linearGradient>
        </defs>
        <line
          x1="10%" y1="20%" x2="40%" y2="50%"
          className="mesh-line"
        />
        <line
          x1="60%" y1="15%" x2="85%" y2="45%"
          className="mesh-line"
        />
        <line
          x1="20%" y1="70%" x2="50%" y2="90%"
          className="mesh-line"
        />
        <line
          x1="70%" y1="60%" x2="95%" y2="80%"
          className="mesh-line"
        />
      </svg>
    </div>
  );
};
