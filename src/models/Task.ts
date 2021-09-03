import Priority from "@/models/Priority";
import Project from "@/models/Project";
import Status from "@/models/Status";

export default interface Task {

    id: number;

    //projectId: number;

    project: Project | null;

    //statusId: number;

    status: Status | null;

    //priorityId: number;

    priority: Priority | null;

    title: string;

    description: string;

    dueDate: Date | null;

    completed: boolean;

    completedDate: Date | null;

    startDate: Date | null;

    endDate: Date | null;

    createdDate: Date | null;

    updatedDate: Date | null;

}
