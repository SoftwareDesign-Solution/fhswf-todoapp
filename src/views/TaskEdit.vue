<template>
  <div>
    <h1>Aufgabe Nr. {{ this.task.id }} - {{ this.task.title }}</h1>

    <task-form :task="task" @submit-form="submitTaskForm">

    </task-form>

  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import TaskService from "@/services/Task.Service";
import {container} from "tsyringe";
import Task from "@/models/Task";
import ProjectService from "@/services/Project.Service";
import StatusService from "@/services/Status.Service";
import Project from "@/models/Project";
import Status from "@/models/Status";
import Priority from "@/models/Priority";
import PriorityService from "@/services/Priority.Service";
import TaskForm from "@/components/TaskForm.vue";
@Component({
  components: {TaskForm}
})
export default class TaskEdit extends Vue {

  private priorityService: PriorityService;
  private projectService: ProjectService;
  private statusService: StatusService;
  private taskService: TaskService;

  private priorities: Priority[] = [];
  private projects: Project[] = [];
  private status: Status[] = [];
  private task: Task | null = null;

  constructor() {
    super();

    this.priorityService = container.resolve(PriorityService);
    this.projectService = container.resolve(ProjectService);
    this.statusService = container.resolve(StatusService);
    this.taskService = container.resolve(TaskService);

    this.task = this.taskService.createEmptyTask();

  }

  async mounted() {

    if ((this.$route.params.id != null) && (this.$route.params.id != ':id'))
      this.task = await this.taskService.getTaskById(this.$route.params.id);
    else
      this.$router.push({name: 'TaskList'});

    this.priorities = await this.priorityService.getAllPriorities();
    this.projects = await this.projectService.getAllProjects();
    this.status = await this.statusService.getAllStatus();

  }

  private submitTaskForm(task: Task): void {
    console.log(task);
  }

}
</script>

<style>

</style>
