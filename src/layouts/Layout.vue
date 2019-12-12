<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title>
          Todo App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-footer>
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
      show-if-above
      bordered
      content-class="bg-grey-2"
    >
    <q-item-label header>Navigation</q-item-label>
      <q-list v-for="link in navigationLinks" :key="link.name">
          <q-item
            clickable
            :to="link.linkToRouteTo"
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
