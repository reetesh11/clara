/**
 * React Query hooks for agents
 */

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
    fetchAgents,
    fetchCircleAgents,
    addAgentToCircle,
    removeAgentFromCircle,
    updateAgentStatus,
    updateAgentConfig,
    type Agent,
    type InstalledAgent,
    type AgentFilters,
} from '@/lib/api/agents';
import { toast } from '@/hooks/use-toast';

const QUERY_KEYS = {
    agents: ['agents'] as const,
    agentsWithFilters: (filters?: AgentFilters) => ['agents', filters] as const,
    circleAgents: ['circle', 'agents'] as const,
    agent: (id: number) => ['agents', id] as const,
};

/**
 * Fetch all available agents with optional filters
 */
export function useAgents(filters?: AgentFilters) {
    return useQuery({
        queryKey: QUERY_KEYS.agentsWithFilters(filters),
        queryFn: () => fetchAgents(filters),
        staleTime: 5 * 60 * 1000, // 5 minutes
    });
}

/**
 * Fetch agents in user's circle
 */
export function useCircleAgents() {
    return useQuery({
        queryKey: QUERY_KEYS.circleAgents,
        queryFn: fetchCircleAgents,
        staleTime: 2 * 60 * 1000, // 2 minutes
    });
}

/**
 * Mutation to add agent to circle
 */
export function useAddAgentToCircle() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: addAgentToCircle,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: QUERY_KEYS.circleAgents });
            queryClient.invalidateQueries({ queryKey: QUERY_KEYS.agents });
            toast({
                title: 'Agent added',
                description: 'Agent has been added to your circle successfully.',
            });
        },
        onError: (error: Error) => {
            toast({
                title: 'Error',
                description: error.message || 'Failed to add agent to circle',
                variant: 'destructive',
            });
        },
    });
}

/**
 * Mutation to remove agent from circle
 */
export function useRemoveAgentFromCircle() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: removeAgentFromCircle,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: QUERY_KEYS.circleAgents });
            toast({
                title: 'Agent removed',
                description: 'Agent has been removed from your circle.',
            });
        },
        onError: (error: Error) => {
            toast({
                title: 'Error',
                description: error.message || 'Failed to remove agent from circle',
                variant: 'destructive',
            });
        },
    });
}

/**
 * Mutation to update agent status
 */
export function useUpdateAgentStatus() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ agentId, status }: { agentId: number; status: 'active' | 'paused' }) =>
            updateAgentStatus(agentId, status),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: QUERY_KEYS.circleAgents });
            toast({
                title: 'Status updated',
                description: 'Agent status has been updated successfully.',
            });
        },
        onError: (error: Error) => {
            toast({
                title: 'Error',
                description: error.message || 'Failed to update agent status',
                variant: 'destructive',
            });
        },
    });
}

/**
 * Mutation to update agent configuration
 */
export function useUpdateAgentConfig() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ agentId, config }: { agentId: number; config: Record<string, unknown> }) =>
            updateAgentConfig(agentId, config),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: QUERY_KEYS.circleAgents });
            toast({
                title: 'Configuration updated',
                description: 'Agent configuration has been updated successfully.',
            });
        },
        onError: (error: Error) => {
            toast({
                title: 'Error',
                description: error.message || 'Failed to update agent configuration',
                variant: 'destructive',
            });
        },
    });
}
