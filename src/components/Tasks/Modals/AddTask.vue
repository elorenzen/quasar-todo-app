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

        <form @submit.prevent="submitForm">
            <q-card-section>
                <div class="row q-mb-sm">
                    <q-input
                        outlined
                        v-model="taskToSubmit.name"
                        label="Enter your task"
                        class="col"
                        :rules="[val => !!val || 'Field is required']"
                        ref="name"
                    />
                </div>

                <div class="row q-mb-sm">
                    <q-input
                        outlined
                        label="Due Date"
                        v-model="taskToSubmit.dueDate"
                    >
                        <template v-slot:append>
                            <q-icon name="event" class="cursor-pointer">
                                <q-popup-proxy>
                                    <q-date v-model="taskToSubmit.dueDate" />
                                </q-popup-proxy>
                            </q-icon>
                        </template>
                    </q-input>
                </div>

                <div class="row q-mb-sm">
                    <q-input
                        outlined
                        label="Due Time"
                        v-model="taskToSubmit.dueTime"
                    >
                        <template v-slot:append>
                            <q-icon name="access_time" class="cursor-pointer">
                                <q-popup-proxy>
                                    <q-time v-model="taskToSubmit.dueTime" />
                                </q-popup-proxy>
                            </q-icon>
                        </template>
                    </q-input>
                </div>
            </q-card-section>

            <q-card-actions align="center">
                <q-btn
                    label="Save"
                    color="primary"
                    type="submit"
                />
            </q-card-actions>
        </form>
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
  },
  methods: {
    submitForm () {
      this.$refs.name.validate()
      if (!this.$refs.name.hasError) {
        this.submitTask()
      }
    },
    submitTask () {
      console.log('task submitted!')
    }
  }
}
</script>
