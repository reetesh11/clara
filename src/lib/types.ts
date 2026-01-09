/**
 * Shared TypeScript types and interfaces
 * Centralized type definitions for the application
 */

export type AgentVariant = 'cooking' | 'health' | 'reminder' | 'default';
export type AgentCategory = 'lifestyle' | 'health' | 'finance' | 'productivity' | 'business';
export type AgentStatus = 'active' | 'paused';
export type MessageStatus = 'pending' | 'approved' | 'dismissed';
export type MessageType = 'suggestion' | 'sync' | 'alert';

// Icon mapping type - maps icon names to Lucide React icons
export type IconName =
    | 'ChefHat'
    | 'Heart'
    | 'Bell'
    | 'FileText'
    | 'Users'
    | 'Calculator'
    | 'Briefcase'
    | 'GraduationCap'
    | 'Car'
    | 'Dumbbell'
    | 'Wallet'
    | 'Star'
    | string; // Allow string for flexibility
