<template>
  <v-dialog max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="success" depressed v-bind="attrs" v-on="on">
        Open Dialog
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">User Profile</span>
      </v-card-title>
    </v-card>
  </v-dialog>
</template>

<script>
export default {};
</script>

<style></style>
