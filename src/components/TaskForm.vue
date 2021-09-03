<template>
  <form @submit.prevent="submitForm">

    <v-select
        :items="projects"
        item-value="id"
        item-text="name"
        v-model="task.project.id"
        filled
        label="Projekt"
        id="project"
    ></v-select>

    <v-select
        :items="priorities"
        item-value="id"
        item-text="name"
        v-model="task.priority.id"
        filled
        label="Priorität"
        id="priority"
    ></v-select>

    <v-select
        :items="status"
        item-value="id"
        item-text="name"
        v-model="task.status.id"
        filled
        label="Status"
        id="status"
    ></v-select>

    <div>

      <v-menu
          ref="menuStartDate"
          v-model="menuStartDate"
          :close-on-content-click="false"
          :return-value.sync="task.startDate"
          transition="scale-transition"
          offset-y
          min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
              v-model="task.startDate"
              label="Startdatum"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
              filled
              id="startdate"
          ></v-text-field>
        </template>
        <v-date-picker
            v-model="task.startDate"
            no-title
            scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
              text
              color="primary"
              @click="menuStartDate = false"
          >
            Cancel
          </v-btn>
          <v-btn
              text
              color="primary"
              @click="$refs.menuStartDate.save(task.startDate)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
      
    </div>

    <div>

      <v-menu
          ref="menuEndDate"
          v-model="menuEndDate"
          :close-on-content-click="false"
          :return-value.sync="task.endDate"
          transition="scale-transition"
          offset-y
          min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
              v-model="task.endDate"
              label="Enddatum"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
              filled
              id="enddate"
          ></v-text-field>
        </template>
        <v-date-picker
            v-model="task.endDate"
            no-title
            scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
              text
              color="primary"
              @click="menuEndDate = false"
          >
            Cancel
          </v-btn>
          <v-btn
              text
              color="primary"
              @click="$refs.menuEndDate.save(task.endDate)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>

    </div>

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

    <div>

      {{ task }}

    </div>

    <v-btn
        color="primary"
        type="submit"
    >
      Speichern
    </v-btn>

  </form>
</template>

<script lang="ts">
import {Vue, Component, Emit, Prop} from 'vue-property-decorator'
import PriorityService from "@/services/Priority.Service";
import ProjectService from "@/services/Project.Service";
import StatusService from "@/services/Status.Service";
import TaskService from "@/services/Task.Service";
import Priority from "@/models/Priority";
import Project from "@/models/Project";
import Status from "@/models/Status";
import Task from "@/models/Task";
import {container} from "tsyringe";

@Component
export default class TaskForm extends Vue {

  private priorityService: PriorityService;
  private projectService: ProjectService;
  private statusService: StatusService;
  private taskService: TaskService;

  private priorities: Priority[] = [];
  private projects: Project[] = [];
  private status: Status[] = [];
  
  private menu = false;
  private menuEndDate = false;
  private menuStartDate = false;
  private date = '2021-08-08';

  //@Prop({type: Test, required: true})
  @Prop()
  private task: Task;

  constructor() {
    super();

    this.priorityService = container.resolve(PriorityService);
    this.projectService = container.resolve(ProjectService);
    this.statusService = container.resolve(StatusService);
    this.taskService = container.resolve(TaskService);

  }

  async mounted() {

    this.priorities = await this.priorityService.getAllPriorities();
    this.projects = await this.projectService.getAllProjects();
    this.status = await this.statusService.getAllStatus();

  }

  @Emit()
  private submitForm(): Task {
    return this.task;
  }

}
</script>

<style>

</style>
