<template>
  <div class="navbar">
    <v-app-bar color="deep-purple accent-4" dense dark>
      <v-toolbar-title>{{$route.name}}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon to="/music">
        <v-icon>mdi-playlist-music</v-icon>
      </v-btn>

      <v-btn icon to="/script">
        <v-icon>mdi-card-text</v-icon>
      </v-btn>

      <v-btn icon to="/account">
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "navbar"
};
</script>

<style scoped>
</style>