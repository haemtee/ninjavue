<template>
  <div class="projects ma-8">
    <h1 class="subtitle-1 grey--text">Projects</h1>
    <v-container class="my-5">
      <v-expansion-panels style="max-width : 1280px">
        <v-expansion-panel v-for="project in myProject" :key="project.name">
          <v-expansion-panel-header>
            {{ project.title }}
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <div class="caption font-weight-bold my-1">
              due by {{ project.due }}
            </div>
            <div>
              {{ project.content }}
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
import { loadProject } from "../services/fb";

export default {
  data() {
    return {
      projects: [],
    };
  },
  computed: {
    myProject() {
      return this.projects.filter(
        (project) => project.person === "The Net Ninja"
      );
    },
  },
  mounted() {
    var self = this;
    loadProject(function(change) {
      self.projects.push({
        ...change.doc.data(),
        id: change.doc.id,
      });
    });
  },
};
</script>

<style></style>
