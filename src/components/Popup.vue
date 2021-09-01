<template>
  <v-dialog max-width="600px" v-model="dialog">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        color="success"
        depressed
        v-bind="attrs"
        v-on="on"
        @click="clearInput"
      >
        Add new Project
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <h2>Add a new project</h2>
      </v-card-title>
      <v-form class="px-8" ref="form">
        <v-text-field
          label="Title"
          v-model="title"
          prepend-icon="mdi-folder"
          :rules="rules"
        >
        </v-text-field>
        <v-textarea
          label="content"
          v-model="content"
          prepend-icon="mdi-pencil"
          :rules="rules"
        ></v-textarea>

        <v-menu>
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-bind="attrs"
              v-on="on"
              prepend-icon="mdi-calendar-range"
              style="max-width: 250px"
              :value="formatedDate"
              :rules="rules"
              readonly
            >
              Due date
            </v-text-field>
          </template>
          <v-date-picker v-model="due"></v-date-picker>
        </v-menu>
        <div class="d-flex flex-row-reverse">
          <v-btn
            depressed
            class="my-5"
            color="success"
            @click="submit"
            :loading="loading"
            >Save Project</v-btn
          >
        </div>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
import dayjs from "dayjs";
import { saveProject } from "../services/fb";

export default {
  data() {
    return {
      title: "",
      content: "",
      due: null,
      rules: [
        (value) => !!value || "Required.",
        (value) => (value && value.length >= 3) || "Min 3 characters",
      ],
      loading: false,
      dialog: false,
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        const project = {
          title: this.title,
          content: this.content,
          due: dayjs(this.due).format("DD MMMM YYYY"),
          status: "ongoing",
          person: "The Net Ninja",
        };
        saveProject(project).then(() => {
          this.loading = false;
          this.dialog = false;
          this.$emit("projectAdded");
        });
      }
    },
    clearInput() {
      this.title = "";
      this.content = "";
      this.due = null;
    },
  },
  computed: {
    formatedDate() {
      if (this.due) {
        return dayjs(this.due).format("DD MMMM YYYY");
      }
      return;
    },
  },
};
</script>

<style></style>
