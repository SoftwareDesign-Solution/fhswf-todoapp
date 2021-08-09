<template>
  <div>

    <task-form :task="task" @submit-form="submitTaskForm"></task-form>

  </div>
</template>

<script lang="ts">
import {Vue, Component, Emit, Prop} from 'vue-property-decorator'
import TaskForm from "../components/TaskForm.vue";
import TaskService from "@/services/Task.Service";
import Task from "@/models/Task";
import {container} from "tsyringe";

@Component({
  components: {TaskForm}
})
export default class TaskCreate extends Vue {

  private taskService: TaskService;

  private task: Task;

  constructor() {
    super();

    this.taskService = container.resolve(TaskService);

    this.task = this.taskService.createEmptyTask();

  }

  private submitTaskForm(task: Task): void {
    console.log(task);
  }

}


</script>

<style>

</style>
