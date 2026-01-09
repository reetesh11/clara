/**
 * API Client Configuration
 * 
 * This module provides a centralized API client for making HTTP requests.
 * Replace the base URL and add authentication headers as needed when connecting to your backend.
 */

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

export interface ApiResponse<T> {
    data: T;
    message?: string;
    error?: string;
}

export interface ApiError {
    message: string;
    status?: number;
    errors?: Record<string, string[]>;
}

class ApiClient {
    private baseURL: string;
    private defaultHeaders: HeadersInit;

    constructor(baseURL: string = API_BASE_URL) {
        this.baseURL = baseURL;
        this.defaultHeaders = {
            'Content-Type': 'application/json',
            // Add authentication token here when implementing auth
            // 'Authorization': `Bearer ${getAuthToken()}`,
        };
    }

    /**
     * Set authentication token for all requests
     */
    setAuthToken(token: string | null) {
        if (token) {
            this.defaultHeaders = {
                ...this.defaultHeaders,
                'Authorization': `Bearer ${token}`,
            };
        } else {
            const { Authorization, ...headers } = this.defaultHeaders as Record<string, string>;
            this.defaultHeaders = headers;
        }
    }

    private async request<T>(
        endpoint: string,
        options: RequestInit = {}
    ): Promise<ApiResponse<T>> {
        const url = `${this.baseURL}${endpoint}`;

        const config: RequestInit = {
            ...options,
            headers: {
                ...this.defaultHeaders,
                ...options.headers,
            },
        };

        try {
            const response = await fetch(url, config);

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({ message: response.statusText }));
                throw {
                    message: errorData.message || 'An error occurred',
                    status: response.status,
                    errors: errorData.errors,
                } as ApiError;
            }

            const data = await response.json();
            return { data };
        } catch (error) {
            if ((error as ApiError).status) {
                throw error;
            }
            throw {
                message: (error as Error).message || 'Network error occurred',
                status: 0,
            } as ApiError;
        }
    }

    async get<T>(endpoint: string, options?: RequestInit): Promise<ApiResponse<T>> {
        return this.request<T>(endpoint, { ...options, method: 'GET' });
    }

    async post<T>(endpoint: string, data?: unknown, options?: RequestInit): Promise<ApiResponse<T>> {
        return this.request<T>(endpoint, {
            ...options,
            method: 'POST',
            body: data ? JSON.stringify(data) : undefined,
        });
    }

    async put<T>(endpoint: string, data?: unknown, options?: RequestInit): Promise<ApiResponse<T>> {
        return this.request<T>(endpoint, {
            ...options,
            method: 'PUT',
            body: data ? JSON.stringify(data) : undefined,
        });
    }

    async patch<T>(endpoint: string, data?: unknown, options?: RequestInit): Promise<ApiResponse<T>> {
        return this.request<T>(endpoint, {
            ...options,
            method: 'PATCH',
            body: data ? JSON.stringify(data) : undefined,
        });
    }

    async delete<T>(endpoint: string, options?: RequestInit): Promise<ApiResponse<T>> {
        return this.request<T>(endpoint, { ...options, method: 'DELETE' });
    }
}

// Export singleton instance
export const apiClient = new ApiClient();

// Export for testing or custom configurations
export { ApiClient };
