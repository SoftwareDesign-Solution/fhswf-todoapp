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

    public async getTaskById(id: string): Promise<Task> {
        return await this.apiService.get<Task>(`/tasks/${id}`);
    }

    public async createTask(task: Task): Promise<void> {
        await this.apiService.post('/tasks', task);
    }

    public async updateTask(task: Task): Promise<void> {
        await this.apiService.put(`/tasks/${task.id}`, task);
    }

    public async deleteTask(task: Task): Promise<void> {
        await this.apiService.delete(`/tasks/${task.id}`);
    }

    public async deleteAllTasks(): Promise<void> {
        await this.apiService.delete('/tasks');
    }

    public createEmptyTask(): Task {

        const task: Task = {
            id: 0,
            status: 0,
            project: 0,
            title: '',
            completed: false,
            description: '',
            dueDate: null,
            endDate: null,
            priority: 0,
            startDate: null,
        };

        return task;

    }
}
