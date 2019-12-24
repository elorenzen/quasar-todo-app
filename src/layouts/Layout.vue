<template>
  <q-layout view="hHh LpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="absolute-center">
          Todo App
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-footer class="q-footer">
        <q-tabs
            class="text-white shadow-2"
            inline-label
        >
            <q-route-tab
                v-for="link in navigationLinks"
                :key="link.name"
                :icon="link.icon"
                :label="link.name"
                :to="link.linkToRouteTo"
            />
        </q-tabs>
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      :breakpoint="767"
      :width="250"
      show-if-above
      bordered
      content-class="bg-primary"
    >
    <q-item-label header>Navigation</q-item-label>
      <q-list v-for="link in navigationLinks" :key="link.name" dark>
          <q-item
            clickable
            :to="link.linkToRouteTo"
            class="text-grey-4"
          >
            <q-item-section avatar>
                <q-icon :name="link.icon" />
            </q-item-section>
            <q-item-section>
                <q-item-label>{{ link.name }}</q-item-label>
            </q-item-section>
          </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: false,
      navigationLinks: [
        {
          name: 'Tasks',
          icon: 'list',
          linkToRouteTo: '/todo'
        },
        {
          name: 'Settings',
          icon: 'settings',
          linkToRouteTo: '/settings'
        }
      ]
    }
  }
}
</script>
<style>
    @media screen and (min-width: 768px){
        .q-footer {
            display: none;
        }
    }
    .q-drawer .q-router-link--exact-active {
        color: black !important;
    }
</style>
