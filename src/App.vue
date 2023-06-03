<script setup>
import { RouterView } from "vue-router";
import BottomNav from "./components/Navbar/BottomNav.vue";
import TopNav from "./components/Navbar/TopNav.vue";

</script>


<template>
  <TopNav></TopNav>
  <router-view />
  <BottomNav></BottomNav>
</template>

<style lang="scss"></style>
