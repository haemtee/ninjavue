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
            {{ project.content }}
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
export default {
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
          title: "Deploy a backend service",
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
            "Lorem ipsu5m dolor sit amet consectetur adipisicing elit. Mollitia optio et tenetur, porro dicta repellat accusamus est? Nemo illum maxime soluta autem quos, ipsum sunt repellendus, quis consequuntur voluptatem vero.",
        },
        {
          title: "Conquer another star force",
          person: "Yang Kai",
          due: "15 January 2023",
          status: "ongoing",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia optio et tenetur, porro dicta repellat accusamus est? Nemo illum maxime soluta autem quos, ipsum sunt repellendus, quis consequuntur voluptatem vero.",
        },
      ],
    };
  },
  computed: {
    myProject() {
      return this.projects.filter((project) => project.person === "Yang Kai");
    },
  },
};
</script>

<style></style>
