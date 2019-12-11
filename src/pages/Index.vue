<template>
  <q-page padding>
      <ul>
          <task
            v-for="(task, index) in taskList"
            :task="task"
            :index="index"
            v-bind:key="task.title"
          ></task>
      </ul>
  </q-page>
</template>

<script>
export default {
  components: {
    'task': require('../components/Task').default
  },
  data () {
    return {
      taskList: [
        {
          title: 'Finish KKX version deployment',
          dueDate: '12/15/19',
          dueTime: '9:00'
        },
        {
          title: 'Present CRM to sales team',
          dueDate: '12/20/19',
          dueTime: '2:30'
        },
        {
          title: 'Complete design sprint with HOLD',
          dueDate: '1/6/20',
          dueTime: '9:00'
        }
      ]
    }
  },
  methods: {
    clearInput () {
      this.message = ''
      return this.message
    },
    deleteTask (index) {
      this.taskList.splice(index, 1)
    }
  }
}
</script>
<style scoped>

</style>
