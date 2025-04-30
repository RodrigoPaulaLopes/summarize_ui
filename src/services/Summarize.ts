import Api from "../config/Api";
import IToken from "../types/AccessToken";

class SummarizeService {
    private readonly api: Api;

    constructor() {
        this.api = new Api();
    }

    async login(email: string, password: string): Promise<void> {
        try {
            const response = await this.api.post<IToken>("/auth/login", {
                data: { email, password },
            });

            console.log("Login successful:", response.accessToken);
        } catch (error) {
            console.error("Login failed:", error);
            throw new Error("Failed to login. Please check your credentials.");
        }
    }
}

export default new SummarizeService();
