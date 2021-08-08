<template>
  <v-data-table
      :headers="headers"
      :items="tasks"
      :items-per-page="5"
      class="elevation-1"
  >

    <template v-slot:item.checkbox="{ }">

      <v-checkbox
      ></v-checkbox>

    </template>

    <template v-slot:item.actions="{ item }">

      <v-btn
          class="light-blue white--text my-2 md:mx-1"
          elevation="0"
          rounded
          fab
          small
          :to="{ name: 'TaskEdit', params: { id: item.id }}"
      >
        <v-icon class="white--text">mdi-account-edit</v-icon>
      </v-btn>

      <v-btn
          color="error"
          class=" white--text mx-2 md:mx-1"
          elevation="0"
          rounded
          fab
          small
      >
        <v-icon class="white--text">mdi-account-remove</v-icon>
      </v-btn>

    </template>

  </v-data-table>
</template>

<script lang="ts">
import {container} from "tsyringe";
import Task from "@/models/Task";
import TaskService from "@/services/Task.Service";
import {Vue, Component} from 'vue-property-decorator'

@Component
export default class TaskList extends Vue {

  headers = [
    { text: '', value: 'checkbox'},
    { text: 'Aufgaben-Nr.', value: 'id' },
    { text: 'Projekt', value: 'project'},
    { text: 'Bezeichnung', value: 'title' },
    { text: 'Status', value: 'status' },
    { text: 'Aktionen', value: 'actions' }
  ];

  private taskService: TaskService;

  private tasks: Task[] = [];

  constructor() {
    super();

    this.taskService = container.resolve(TaskService);

  }

  async mounted() {
    this.tasks = await this.taskService.getAllTasks();
  }

}
</script>

<style>

</style>
