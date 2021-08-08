<template>
  <div>
    <h1>Aufgabe Nr. {{ this.task.id }} - {{ this.task.title }}</h1>

    <form>

      <v-select
          :items="projects"
          item-value="id"
          item-text="name"
          filled
          label="Projekt"
      ></v-select>

      <v-select
          :items="priorities"
          item-value="id"
          item-text="name"
          filled
          label="Priorität"
      ></v-select>

      <v-select
          :items="status"
          item-value="id"
          item-text="name"
          filled
          label="Status"
      ></v-select>

      <div>Startdatum - DatePicker</div>

      <div>Enddatum - DatePicker</div>

      <v-text-field
          id="title"
          v-model="task.title"
          filled
          label="Titel (*)"
          :rules="[() => !!task.title || 'Titel ist ein Pflichtfeld']"
          required
      ></v-text-field>

      <v-textarea
          filled
          id="description"
          label="Beschreibung (*)"
          :rules="[() => !!task.description || 'Beschreibung ist ein Pflichtfeld']"
          v-model="task.description"
          required
      ></v-textarea>



      <div></div>

      <v-btn
          color="primary"
      >
        Speichern
      </v-btn>

    </form>

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

@Component
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

    this.task = {id: 0, projectId: 0, project: '', status: 0, title: '', description: '', completed: false};

  }

  async mounted() {

    //if (this.$route.params.id != null)
      //this.task = await this.taskService.getTaskById(this.$route.params.id);

    this.priorities = await this.priorityService.getAllPriorities();
    this.projects = await this.projectService.getAllProjects();
    this.status = await this.statusService.getAllStatus();

    console.log(this.projects);

    console.log(this.task);

  }

}
</script>

<style>

</style>
