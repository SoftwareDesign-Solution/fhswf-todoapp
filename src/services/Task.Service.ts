import {injectable, singleton} from "tsyringe";
import ApiService from "@/services/Api.Service";
import Task from "@/models/Task";

@injectable()
@singleton()
export default class TaskService {

    constructor(private readonly apiService: ApiService) {
    }

    public async getAllTasks(): Promise<Task[]> {

        const tasks: Task[] = await this.apiService.get<Task[]>('/tasks');

        return tasks;

    }
}
