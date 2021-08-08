import {injectable, singleton} from "tsyringe";
import Status from "@/models/Status";
import ApiService from "@/services/Api.Service";

@injectable()
@singleton()
export default class StatusService {

    private status: Status[] | null = null;

    constructor(private readonly apiService: ApiService) {
    }

    public async getAllStatus(): Promise<Status[]> {

        if (this.status == null)
            this.status = (await this.apiService.get<Status[]>('/status'));

        return this.status;

    }

    public async createStatus(status: Status): Promise<void> {
        await this.apiService.post('/status', status);
    }

    public async updateStatus(status: Status): Promise<void> {
        await this.apiService.put(`/status/${status.id}`, status);
    }

    public async deleteStatus(status: Status): Promise<void> {
        await this.apiService.delete(`/status/${status.id}`);
    }

    public async deleteAllStatus(): Promise<void> {
        await this.apiService.delete('/status');
    }

}
