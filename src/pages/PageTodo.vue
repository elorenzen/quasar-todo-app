<template>
    <q-page class="q-pa-md">
        <q-list separator bordered>
            <q-item :class="!task.completed ? 'bg-orange-3' : 'bg-green-3'" tag="label" v-ripple v-for="task in tasks" v-bind:key="task.id">
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
            </q-item>
        </q-list>
    </q-page>
</template>

<script>
export default {
  data () {
    return {
      tasks: [
        {
          id: 1,
          name: 'KKX redeployment changes',
          completed: false,
          dueDate: '12/23/19',
          dueTime: '17:00'
        },
        {
          id: 2,
          name: 'Follow-up call with DeepWork',
          completed: false,
          dueDate: '12/27/19',
          dueTime: '9:00'
        },
        {
          id: 3,
          name: "Build 'Marquitta Mobile'",
          completed: false,
          dueDate: '2/28/20',
          dueTime: '10:00'
        }
      ]
    }
  }
}
</script>
