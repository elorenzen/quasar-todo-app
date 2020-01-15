<template>
    <q-page class="q-pa-md">
        <q-list separator bordered>
            <task
                v-for="(task, key) in tasks"
                v-bind:key="key"
                :task="task"
                :id="key"
            />
        </q-list>

        <div class="absolute-bottom text-center q-mb-lg">
            <q-btn
                round
                color="primary"
                size="24px"
                icon="add"
                @click="showAddTask = true"
            />
        </div>

        <q-dialog v-model="showAddTask">
            <task-modal @close="showAddTask = false" />
        </q-dialog>
    </q-page>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      showAddTask: false
    }
  },
  computed: {
    ...mapGetters('tasks', ['tasks'])
  },
  components: {
    'task': require('../components/Tasks/Task').default,
    'task-modal': require('../components/Tasks/Modals/AddTask').default
  }
}
</script>
