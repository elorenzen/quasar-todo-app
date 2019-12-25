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
    </q-page>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('tasks', ['tasks'])
  },
  components: {
    'task': require('../components/Tasks/Task').default
  }
}
</script>
