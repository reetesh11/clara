/**
 * React Query hooks for activity/messages
 */

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
    fetchActivityMessages,
    fetchActivityStats,
    approveMessageAction,
    dismissMessageAction,
    type ActivityFilters,
} from '@/lib/api/activity';
import { toast } from '@/hooks/use-toast';

const QUERY_KEYS = {
    activityMessages: (filters?: ActivityFilters) => ['activity', 'messages', filters] as const,
    activityStats: ['activity', 'stats'] as const,
};

/**
 * Fetch activity messages with optional filters
 */
export function useActivityMessages(filters?: ActivityFilters) {
    return useQuery({
        queryKey: QUERY_KEYS.activityMessages(filters),
        queryFn: () => fetchActivityMessages(filters),
        staleTime: 30 * 1000, // 30 seconds - activity is more dynamic
        refetchInterval: 60 * 1000, // Refetch every minute
    });
}

/**
 * Fetch activity statistics
 */
export function useActivityStats() {
    return useQuery({
        queryKey: QUERY_KEYS.activityStats,
        queryFn: fetchActivityStats,
        staleTime: 30 * 1000, // 30 seconds
        refetchInterval: 60 * 1000, // Refetch every minute
    });
}

/**
 * Mutation to approve a message action
 */
export function useApproveMessageAction() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: approveMessageAction,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['activity'] });
            toast({
                title: 'Action approved',
                description: 'The action has been approved and executed.',
            });
        },
        onError: (error: Error) => {
            toast({
                title: 'Error',
                description: error.message || 'Failed to approve action',
                variant: 'destructive',
            });
        },
    });
}

/**
 * Mutation to dismiss a message action
 */
export function useDismissMessageAction() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: dismissMessageAction,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['activity'] });
            toast({
                title: 'Action dismissed',
                description: 'The action has been dismissed.',
            });
        },
        onError: (error: Error) => {
            toast({
                title: 'Error',
                description: error.message || 'Failed to dismiss action',
                variant: 'destructive',
            });
        },
    });
}
