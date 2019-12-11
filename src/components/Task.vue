<template>
    <li>
        <div>{{ index }} {{ task.title }}</div>
        <small>{{ task.dueDate }} @ {{ task.dueTime }}</small>
        <button @click="deleteTask(index)">Delete</button>
    </li>
</template>
<script>
export default {
  props: ['task', 'index']
}
</script>
