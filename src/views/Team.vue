<template>
  <div class="team ma-8">
    <h1 class="subtitle-1 grey--text">Team</h1>
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs6 sm4 md3 lg2 v-for="person in team" :key="person.nama">
          <v-card align="center" class="text-xs-float-center ma-3">
            <v-responsive class="pt-4" elevation="3">
              <v-img
                max-height="128px"
                max-width="128px"
                :src="person.photo"
                :alt="person.name"
                class="rounded-circle grey lighten-2"
              />
            </v-responsive>
            <v-card-text>
              <div class="subheading">
                {{ person.name }}
              </div>
              <div class="grey--text">
                {{ person.country }}
              </div>
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn depressed>
                <v-icon left class="grey--text">mdi-message</v-icon>
                <span class="grey--text">Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      team: [],
    };
  },
  mounted() {
    axios
      .get("https://randomuser.me/api/?results=10&nat=us,fr,gb,au")
      .then((res) => {
        res.data.results.map((el) =>
          this.team.push({
            name: `${el.name.first} ${el.name.last}`,
            country: el.location.country,
            photo: el.picture.large,
          })
        );
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style></style>
