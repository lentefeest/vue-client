<template>
  <div id="app">
    <navbar />
    <router-view />
  </div>
</template>

<script>
import navbar from "./components/navbar/navbar";

export default {
  name: "App",
  components: {
    navbar
  },
  watch: {
    $route(to, from) {
      document.title = to.meta.title || "Lentefeest";
    }
  }
};
</script>

<style>
</style>
