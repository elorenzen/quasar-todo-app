<template>
    <q-item
        @click="updateTask(
            {
                id: id,
                updates: { completed: !task.completed }
            }
        )"
        :class="!task.completed ? 'bg-orange-3' : 'bg-green-3'"
        tag="label"
        v-ripple
    >
        <q-item-section side top>
            <q-checkbox v-model="task.completed" />
        </q-item-section>

        <q-item-section>
            <q-item-label :class="{'text-strikethrough' : task.completed }">
                {{ task.name }}
            </q-item-label>
        </q-item-section>

        <q-item-section side top>
            <div class="row">
                <div class="column justify-center">
                    <q-icon
                        name="event"
                        size="18px"
                        class="q-mr-xs"
                    />
                </div>
                <div class="column">
                    <q-item-label
                        caption
                        class="row justify-end"
                    >
                        {{ task.dueDate }}
                    </q-item-label>
                    <q-item-label
                        caption
                        class="row justify-end"
                    >
                        <small>{{ task.dueTime }}</small>
                    </q-item-label>
                </div>
            </div>
        </q-item-section>

        <q-item-section side>
            <q-btn
                @click.stop="promptToDelete(id)"
                flat
                round
                dense
                color="red"
                icon="delete"
            />
        </q-item-section>
    </q-item>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  props: ['task', 'id'],
  methods: {
    ...mapActions('tasks', ['updateTask', 'deleteTask']),
    promptToDelete (id) {
      this.$q.dialog({
        title: 'Delete Task',
        message: 'Are you sure you want to delete this task?',
        ok: {
          push: true
        },
        cancel: {
          color: 'negative'
        },
        persistent: true
      }).onOk(() => {
        this.deleteTask(id)
      })
    }
  }
}
</script>
<style>

</style>
