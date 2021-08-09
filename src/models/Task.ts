import Priority from "@/models/Priority";
import Project from "@/models/Project";
import Status from "@/models/Status";

export default interface Task {

    completed: boolean;


    id: number;

    title: string;

    description: string;

    priority: number;

    project: number;

    status: number;

    startDate: Date | null;

    endDate: Date | null;

    dueDate: Date | null;

}
