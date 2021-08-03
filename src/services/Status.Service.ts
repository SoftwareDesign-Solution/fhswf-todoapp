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

}
