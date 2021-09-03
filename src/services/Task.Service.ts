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
            //projectId: 0,
            project: {
                id: 0,
                name: '',
            },
            //statusId: 0,
            status: {
                id: 0,
                name: '',
            },
            //priorityId: 0,
            priority: {
                id: 0,
                name: '',
            },
            title: '',
            description: '',
            dueDate: null,
            completed: false,
            completedDate: null,
            startDate: null,
            endDate: null,
            createdDate: null,
            updatedDate: null,
        };

        return task;

    }
}
