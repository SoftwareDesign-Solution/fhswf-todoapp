/* eslint-disable @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any */
import axios, {AxiosInstance} from "axios";
import {singleton} from "tsyringe";

@singleton()
export default class ApiService {

    private axios: AxiosInstance;

    constructor() {
        this.axios = axios.create({
            baseURL: 'http://localhost:58000/api'
        });
    }

    public async get<T>(url: string, params?: any): Promise<T> {
        const response = await this.axios.get(url, params);
        return response.data;
    }

    public async post<T>(url: string, params?: any): Promise<T> {
        const response = await this.axios.post(url, params);
        return response.data;
    }

    public async put<T>(url: string, params?: any): Promise<T> {
        const response = await this.axios.put(url, params);
        return response.data;
    }

    public async delete<T>(url: string, params?: any): Promise<T> {
        const response = await this.axios.delete(url, params);
        return response.data;
    }

}
