import axios, { AxiosInstance } from "axios";

interface iUserIn {
  email: string | null | undefined;
  password: string | null | undefined;
  first_name: string | null | undefined;
  last_name: string | null | undefined;
}

class UserApi {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL}/api/users`,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async verifyIsUser(userIn: iUserIn): Promise<any> {
    try {
      const response = await this.api.post("/is-user", userIn);
      return response.data;
    } catch (error) {
      console.error("error");
    }
  }

  async getUser(userEmail: string | null | undefined): Promise<any> {
    try {
      const response = await this.api.get(`users/${userEmail}`);
      return response.data;
    } catch (error) {
      console.error("error");
    }
  }

  async createUser(userIn: iUserIn): Promise<any> {
    try {
      const response = await this.api.post(`users`, userIn);
      return response.data;
    } catch (error) {
      console.error("error");
    }
  }
}

export default UserApi;
