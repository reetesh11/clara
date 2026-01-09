/**
 * Activity API Service
 * 
 * This module handles all API calls related to agent activities and messages.
 * Replace the mock implementations with actual API calls when connecting to your backend.
 */

import { apiClient } from './client';

export interface AgentMessage {
    id: number;
    from: {
        id: number;
        name: string;
        icon: string;
        variant: 'cooking' | 'health' | 'reminder' | 'default';
    };
    to: {
        id: number;
        name: string;
        icon: string;
        variant: 'cooking' | 'health' | 'reminder' | 'default';
    };
    message: string;
    action?: string;
    timestamp: string;
    status: 'pending' | 'approved' | 'dismissed';
    type: 'suggestion' | 'sync' | 'alert';
}

export interface ActivityFilters {
    status?: 'all' | 'pending' | 'approved' | 'dismissed';
    type?: 'suggestion' | 'sync' | 'alert';
    agentId?: number;
    limit?: number;
    offset?: number;
}

export interface ActivityStats {
    totalMessages: number;
    pendingActions: number;
    completed: number;
    recentActivity: AgentMessage[];
}

/**
 * Fetch agent activity/messages
 * TODO: Replace with actual API call
 * Endpoint: GET /api/activity/messages
 */
export async function fetchActivityMessages(
    filters?: ActivityFilters
): Promise<AgentMessage[]> {
    // TODO: Uncomment when backend is ready
    // const params = new URLSearchParams();
    // if (filters?.status) params.append('status', filters.status);
    // if (filters?.type) params.append('type', filters.type);
    // if (filters?.agentId) params.append('agentId', filters.agentId.toString());
    // if (filters?.limit) params.append('limit', filters.limit.toString());
    // if (filters?.offset) params.append('offset', filters.offset.toString());
    // 
    // const response = await apiClient.get<AgentMessage[]>(`/activity/messages?${params.toString()}`);
    // return response.data;

    // Mock data for development
    return Promise.resolve([]);
}

/**
 * Fetch activity statistics
 * TODO: Replace with actual API call
 * Endpoint: GET /api/activity/stats
 */
export async function fetchActivityStats(): Promise<ActivityStats> {
    // TODO: Uncomment when backend is ready
    // const response = await apiClient.get<ActivityStats>('/activity/stats');
    // return response.data;

    // Mock data for development
    return Promise.resolve({
        totalMessages: 0,
        pendingActions: 0,
        completed: 0,
        recentActivity: [],
    });
}

/**
 * Approve a message action
 * TODO: Replace with actual API call
 * Endpoint: POST /api/activity/messages/:id/approve
 */
export async function approveMessageAction(messageId: number): Promise<AgentMessage> {
    // TODO: Uncomment when backend is ready
    // const response = await apiClient.post<AgentMessage>(`/activity/messages/${messageId}/approve`);
    // return response.data;

    throw new Error('Failed to approve action');
}

/**
 * Dismiss a message action
 * TODO: Replace with actual API call
 * Endpoint: POST /api/activity/messages/:id/dismiss
 */
export async function dismissMessageAction(messageId: number): Promise<AgentMessage> {
    // TODO: Uncomment when backend is ready
    // const response = await apiClient.post<AgentMessage>(`/activity/messages/${messageId}/dismiss`);
    // return response.data;

    throw new Error('Failed to dismiss action');
}
