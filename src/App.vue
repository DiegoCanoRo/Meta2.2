<template>
  <v-app>
    <AppHeader />
    
    <v-container class="text-center">
      <v-btn to="/" variant="text">Inicio</v-btn>
      <v-btn to="/perros" variant="text">API Perros</v-btn>
    </v-container>

    <v-main>
      <router-view />
    </v-main>
    
    <AppFooter/> 
  </v-app>
</template>

<script setup>
  import AppHeader from './components/AppHeader.vue';
  import AppFooter from './components/AppFooter.vue';
</script>