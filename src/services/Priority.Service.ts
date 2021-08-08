import ApiService from "@/services/Api.Service";
import {injectable, singleton} from "tsyringe";
import Priority from "@/models/Priority";

@injectable()
@singleton()
export default class PriorityService {

    private priorites: Priority[] | null = null;

    constructor(private apiService: ApiService) {
    }

    public async getAllPriorities(): Promise<Priority[]> {

        if (this.priorites == null)
            this.priorites = await this.apiService.get<Priority[]>('/priority');

        return this.priorites;

    }

}
