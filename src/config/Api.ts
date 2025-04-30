import axios, { AxiosInstance, AxiosError } from "axios";

class Api {
    private readonly httpClient: AxiosInstance;

    constructor() {
        this.httpClient = axios.create({
            baseURL: "http://localhost:8000/api/v1",
            headers: {
                "Content-Type": "application/json"
            }
        });
    }

    async post<T>(url: string, data: any): Promise<T> {
        try {
            const response = await this.httpClient.post<T>(url, data.data);
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw new Error(`API Error: ${error.response?.status} - ${error.response?.statusText || "Unknown error"}`);
            }
            throw new Error("An unexpected error occurred");
        }
    }
}

export default Api;
