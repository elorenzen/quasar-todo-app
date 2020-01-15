<template>
    <q-card>
        <q-card-section class="row">
            <div class="text-h6">Add Task</div>
            <q-space />
            <q-btn
                flat
                dense
                round
                color="primary"
                icon="close"
                @click="showAddTask = true"
                v-close-popup
            />
        </q-card-section>

        <q-card-section>
            <q-input outlined v-model="taskToSubmit.name" label="Enter your task" />
        </q-card-section>

        <q-card-actions align="right">
            <q-btn flat label="Save" color="primary" v-close-popup />
        </q-card-actions>
    </q-card>
</template>

<script>
export default {
  data () {
    return {
      taskToSubmit: {
        name: '',
        dueDate: '',
        dueTime: '',
        completed: false
      }
    }
  }
}
</script>
