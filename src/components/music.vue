<template>
  <div class="music">
    <v-row justify="center">
      <v-expansion-panels popout>
        <v-expansion-panel v-for="(year ,i) in songs" :key="i">
          <v-expansion-panel-header>{{i}}</v-expansion-panel-header>
          <v-expansion-panel-content v-for="(song, j) in year" :key="j">{{song.title}}</v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </div>
</template>

<script>
import songs from "./music/songs.json";

export default {
  name: "music",
  data() {
    return {
      songs: songs
    };
  }
};
</script>

<style>
</style>