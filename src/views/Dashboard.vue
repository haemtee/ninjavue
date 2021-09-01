<template>
  <div class="dashboard ma-8">
    <h1 class="subtitle-1 grey--text mb-5">Dashboard</h1>

    <v-container>
      <v-layout class="mb-4">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              small
              depressed
              color="gray"
              @click="sortData('title')"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon class="grey--text" left small>mdi-folder</v-icon>
              <span class="caption text-lowercase grey--text"
                >by project name</span
              >
            </v-btn>
          </template>
          <span>Sort project by project name</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              small
              depressed
              color="gray"
              @click="sortData('person')"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon class="grey--text" left small
                >mdi-account-multiple</v-icon
              >
              <span class="caption text-lowercase grey--text">by person</span>
            </v-btn>
          </template>
          <span>Sort project by person</span>
        </v-tooltip>
      </v-layout>
      <transition-group name="projects" :v-if="projects.length > 0">
        <v-card
          flat
          v-for="project in projects"
          :key="project.title"
          max-width="1280px"
        >
          <v-layout wrap row :class="`pa-4 ma-0 project ${project.status}`">
            <v-flex xs6 sm12 md6>
              <div class="caption grey--text">
                Project title
              </div>
              <div>{{ project.title }}</div>
            </v-flex>
            <v-flex xs6 sm4 md2>
              <div class="caption grey--text">
                Person
              </div>
              <div>{{ project.person }}</div>
            </v-flex>
            <v-flex xs6 sm4 md2>
              <div class="caption grey--text">
                Due by
              </div>
              <div>{{ project.due }}</div>
            </v-flex>
            <v-flex xs6 sm4 md2>
              <div class="float-sm-left float-md-right">
                <v-chip small :class="`${project.status} white--text my-2`">{{
                  project.status
                }}</v-chip>
              </div>
            </v-flex>
          </v-layout>
          <v-divider></v-divider>
        </v-card>
      </transition-group>
    </v-container>
  </div>
</template>

<script>
import { loadProject } from "../services/fb";

export default {
  name: "Home",

  components: {},
  data() {
    return {
      isLoading: true,
      projects: [],
    };
  },
  methods: {
    sortData(x) {
      this.projects.sort((a, b) => (a[x] < b[x] ? -1 : 1));
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

<style scoped>
/* .project {
  border-bottom: 1px solid gray;
} */

.project.completed {
  border-left: 4px solid #3cd1c2;
}
.project.ongoing {
  border-left: 4px solid orange;
}
.project.overdue {
  border-left: 4px solid tomato;
}

.v-chip.v-chip--no-color.v-size--small.completed.white--text {
  background: #3cd1c2;
}
.v-chip.v-chip--no-color.v-size--small.ongoing.white--text {
  background: orange;
}
.v-chip.v-chip--no-color.v-size--small.overdue.white--text {
  background: tomato;
}
.projects-move {
  transition: all 1s;
}
</style>
