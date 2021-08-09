<template>
  <v-app>
    <v-navigation-drawer app color="blue" v-model="drawer" :clipped="clipped">

      <v-list class="mt-15">

        <v-list-item
            v-for="route in routes"
            :key="route.name"
            :to="{name: route.name }"
            color="white"
            exact
        >

          <v-list-item-content class="ml-4">
            <v-list-item-title>{{ route.meta.title }}</v-list-item-title>
          </v-list-item-content>

        </v-list-item>

      </v-list>

    </v-navigation-drawer>

    <v-app-bar app color="white" :clipped-left="clipped">

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>{{ this.$route.meta.title }}</v-toolbar-title>

    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>

      <!-- Provides the application the proper gutter -->
      <v-container fluid class="pa-5">

        <!-- If using vue-router -->
        <router-view></router-view>

      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import {Vue, Prop, Component} from 'vue-property-decorator'
import {RouteConfig, RouteRecordPublic} from "vue-router";

@Component
export default class App extends Vue {

  drawer = true;
  clipped = false;

  items = [
    { title: 'Home2', icon: 'mdi-home-city' },
    { title: 'My Account', icon: 'mdi-account' },
    { title: 'Users', icon: 'mdi-account-group-outline' },
  ];

  get routes(): RouteRecordPublic[] | undefined {
    return this.$router.getRoutes()?.filter(r => r.meta.showInSidebar);
    //return this.$router.options.routes;
  }

}
</script>
