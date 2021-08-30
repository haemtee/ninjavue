<template>
  <nav>
    <v-app-bar app flat>
      <v-app-bar-nav-icon @click="toogleDrawer" class="grey--text" />
      <v-app-bar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span>Ninja</span>
      </v-app-bar-title>
      <v-spacer />
      <v-btn depressed class="grey lighten-4">
        <span class="grey--text lighten-4">SIGN OUT</span>
        <v-icon class="grey--text lighten-4" right>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app class="primary">
      <v-list>
        <v-list-item
          v-for="link in links"
          :key="link.text"
          route
          :to="link.route"
        >
          <v-list-item-action>
            <v-icon class="white--text">{{ link.icon }} </v-icon>
          </v-list-item-action>
          <v-list-item-title class="white--text">{{
            link.text
          }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      drawer: false,
      links: [
        { icon: "mdi-view-dashboard", text: "Dashboard", route: "/" },
        { icon: "mdi-folder", text: "My Projects", route: "/projects" },
        { icon: "mdi-account-multiple", text: "Team", route: "/team" },
      ],
    };
  },
  methods: {
    toogleDrawer() {
      this.drawer = !this.drawer;
    },
  },
};
</script>

<style></style>
