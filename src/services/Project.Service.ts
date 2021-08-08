import {injectable, singleton} from "tsyringe";
import Project from "@/models/Project";
import ApiService from "@/services/Api.Service";

@injectable()
@singleton()
export default class ProjectService {

    private projects: Project[] | null = null;

    constructor(private readonly apiService: ApiService) {
    }

    public async getAllProjects(): Promise<Project[]> {

        if (this.projects == null)
            this.projects = await this.apiService.get<Project[]>('/projects');

        return this.projects;

    }

    public async createProject(project: Project): Promise<void> {
        await this.apiService.post('/projects', project);
    }

    public async updateProject(project: Project): Promise<void> {
        await this.apiService.put(`/projects/${project.id}`, project);
    }

    public async deleteProject(project: Project): Promise<void> {
        await this.apiService.delete(`/projects/${project.id}`);
    }

    public async deleteAllProjects(): Promise<void> {
        await this.apiService.delete('/projects');
    }
}
