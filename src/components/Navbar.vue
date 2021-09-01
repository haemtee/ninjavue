<template>
  <nav>
    <v-app-bar app flat>
      <v-app-bar-nav-icon @click="toogleDrawer" class="grey--text" />
      <v-app-bar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span>Ninja</span>
      </v-app-bar-title>
      <v-spacer />

      <!-- menu dropdown -->
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn depressed v-bind="attrs" v-on="on">
            <v-icon left class="grey--text">mdi-chevron-down</v-icon>
            <span class="grey--text">Menu</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="link in links"
            :key="link.text"
            router
            :to="link.route"
          >
            <v-list-item-title class="grey--text">
              {{ link.text }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn depressed class="grey lighten-4">
        <span class="grey--text lighten-4">SIGN OUT</span>
        <v-icon class="grey--text lighten-4" right>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Side drawer -->

    <v-navigation-drawer v-model="drawer" app class="primary">
      <v-layout column align-center>
        <v-flex class="mt-10">
          <v-avatar size="120" class="grey lighten-4">
            <img :src="profile.photo" :alt="profile.name" />
          </v-avatar>
          <div class="text-center white--text subtitle-1 mt-2">
            {{ profile.name }}
          </div>
          <div class="text-center white--text caption mb-4">
            {{ profile.country }}
          </div>
        </v-flex>
        <v-flex>
          <Popup />
        </v-flex>
      </v-layout>

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
import axios from "axios";
import Popup from "./Popup.vue";

export default {
  name: "Navbar",
  components: { Popup },
  data() {
    return {
      profile: {
        name: undefined,
        photo: undefined,
        country: undefined,
      },
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
  created() {
    axios
      .get("https://randomuser.me/api/?nat=us,fr,gb,au")
      .then((res) => {
        this.profile.name = `${res.data.results[0].name.first} ${res.data.results[0].name.last}`;
        this.profile.country = res.data.results[0].location.country;
        this.profile.photo = res.data.results[0].picture.large;
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style></style>
