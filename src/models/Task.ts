export default interface Task {

    id: number;

    projectId: number;

    project: string;

    status: number;

    title: string;

    description: string;

    completed: boolean;
    
}
