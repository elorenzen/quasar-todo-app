<template>
    <q-item
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
    </q-item>
</template>
<script>
export default {
  props: ['task', 'id']
}
</script>
<style>

</style>
