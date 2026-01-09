/**
 * Agents API Service
 * 
 * This module handles all API calls related to agents.
 * Replace the mock implementations with actual API calls when connecting to your backend.
 */

import { apiClient } from './client';

export interface Agent {
    id: number;
    name: string;
    description: string;
    icon: string; // Icon identifier or URL
    variant: 'cooking' | 'health' | 'reminder' | 'default';
    category: 'lifestyle' | 'health' | 'finance' | 'productivity' | 'business';
    rating?: number;
    users?: string;
    isPopular?: boolean;
}

export interface InstalledAgent extends Agent {
    status: 'active' | 'paused';
    lastActivity: string;
    stats: {
        label: string;
        value: string;
    }[];
}

export interface AgentFilters {
    category?: string;
    search?: string;
    rating?: number;
}

/**
 * Fetch all available agents from marketplace
 * TODO: Replace with actual API call
 * Endpoint: GET /api/agents
 */
export async function fetchAgents(filters?: AgentFilters): Promise<Agent[]> {
    // MOCK: Return mock data for now
    // TODO: Uncomment when backend is ready
    // const params = new URLSearchParams();
    // if (filters?.category) params.append('category', filters.category);
    // if (filters?.search) params.append('search', filters.search);
    // if (filters?.rating) params.append('minRating', filters.rating.toString());
    // 
    // const response = await apiClient.get<Agent[]>(`/agents?${params.toString()}`);
    // return response.data;

    // Mock data for development
    return Promise.resolve([]);
}

/**
 * Fetch a single agent by ID
 * TODO: Replace with actual API call
 * Endpoint: GET /api/agents/:id
 */
export async function fetchAgentById(id: number): Promise<Agent> {
    // TODO: Uncomment when backend is ready
    // const response = await apiClient.get<Agent>(`/agents/${id}`);
    // return response.data;

    throw new Error('Agent not found');
}

/**
 * Fetch agents in user's circle
 * TODO: Replace with actual API call
 * Endpoint: GET /api/circle/agents
 */
export async function fetchCircleAgents(): Promise<InstalledAgent[]> {
    // TODO: Uncomment when backend is ready
    // const response = await apiClient.get<InstalledAgent[]>('/circle/agents');
    // return response.data;

    // Mock data for development
    return Promise.resolve([]);
}

/**
 * Add an agent to user's circle
 * TODO: Replace with actual API call
 * Endpoint: POST /api/circle/agents
 */
export async function addAgentToCircle(agentId: number): Promise<InstalledAgent> {
    // TODO: Uncomment when backend is ready
    // const response = await apiClient.post<InstalledAgent>('/circle/agents', { agentId });
    // return response.data;

    throw new Error('Failed to add agent to circle');
}

/**
 * Remove an agent from user's circle
 * TODO: Replace with actual API call
 * Endpoint: DELETE /api/circle/agents/:id
 */
export async function removeAgentFromCircle(agentId: number): Promise<void> {
    // TODO: Uncomment when backend is ready
    // await apiClient.delete(`/circle/agents/${agentId}`);

    throw new Error('Failed to remove agent from circle');
}

/**
 * Update agent status (active/paused)
 * TODO: Replace with actual API call
 * Endpoint: PATCH /api/circle/agents/:id/status
 */
export async function updateAgentStatus(
    agentId: number,
    status: 'active' | 'paused'
): Promise<InstalledAgent> {
    // TODO: Uncomment when backend is ready
    // const response = await apiClient.patch<InstalledAgent>(
    //     `/circle/agents/${agentId}/status`,
    //     { status }
    // );
    // return response.data;

    throw new Error('Failed to update agent status');
}

/**
 * Configure agent settings
 * TODO: Replace with actual API call
 * Endpoint: PATCH /api/circle/agents/:id/config
 */
export async function updateAgentConfig(
    agentId: number,
    config: Record<string, unknown>
): Promise<InstalledAgent> {
    // TODO: Uncomment when backend is ready
    // const response = await apiClient.patch<InstalledAgent>(
    //     `/circle/agents/${agentId}/config`,
    //     config
    // );
    // return response.data;

    throw new Error('Failed to update agent configuration');
}
