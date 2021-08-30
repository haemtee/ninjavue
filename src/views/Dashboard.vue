<template>
  <div class="dashboard ma-8">
    <h1 class="subtitle-1 grey--text mb-5">Dashboard</h1>

    <v-container>
      <v-layout class="mb-4">
        <v-btn small depressed color="gray" @click="sortData('title')">
          <v-icon class="grey--text" left small>mdi-folder</v-icon>
          <span class="caption text-lowercase grey--text">by project name</span>
        </v-btn>
        <v-btn small depressed color="gray" @click="sortData('person')">
          <v-icon class="grey--text" left small>mdi-account-multiple</v-icon>
          <span class="caption text-lowercase grey--text">by person</span>
        </v-btn>
      </v-layout>

      <transition-group name="projects" tag="v-card">
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
export default {
  name: "Home",

  components: {},
  data() {
    return {
      projects: [
        {
          title: "Make vue great again",
          person: "Net Ninja",
          due: "9 March 2021",
          status: "completed",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia optio et tenetur, porro dicta repellat accusamus est? Nemo illum maxime soluta autem quos, ipsum sunt repellendus, quis consequuntur voluptatem vero.",
        },
        {
          title: "Create a website design",
          person: "Mario",
          due: "10 November 2021",
          status: "ongoing",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia optio et tenetur, porro dicta repellat accusamus est? Nemo illum maxime soluta autem quos, ipsum sunt repellendus, quis consequuntur voluptatem vero.",
        },
        {
          title: "Build a backend service",
          person: "Luigi",
          due: "1 August 2021",
          status: "overdue",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia optio et tenetur, porro dicta repellat accusamus est? Nemo illum maxime soluta autem quos, ipsum sunt repellendus, quis consequuntur voluptatem vero.",
        },

        {
          title: "Create NextJS Project",
          person: "Maximilan",
          due: "25 July 2021",
          status: "completed",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia optio et tenetur, porro dicta repellat accusamus est? Nemo illum maxime soluta autem quos, ipsum sunt repellendus, quis consequuntur voluptatem vero.",
        },
        {
          title: "Learning Vuetify",
          person: "Yang Kai",
          due: "15 January 2022",
          status: "ongoing",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia optio et tenetur, porro dicta repellat accusamus est? Nemo illum maxime soluta autem quos, ipsum sunt repellendus, quis consequuntur voluptatem vero.",
        },
        {
          title: "Cultivating space dao",
          person: "Nie Lie",
          due: "28 June 2021",
          status: "completed",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia optio et tenetur, porro dicta repellat accusamus est? Nemo illum maxime soluta autem quos, ipsum sunt repellendus, quis consequuntur voluptatem vero.",
        },
      ],
    };
  },
  methods: {
    sortData(x) {
      this.projects.sort((a, b) => (a[x] < b[x] ? -1 : 1));
    },
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
