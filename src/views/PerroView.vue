<template>
  <v-container class="text-center">
    <h1>Galería de Perros</h1>
    <v-card class="mx-auto my-5" max-width="500">
      <v-img :src="imgUrl" height="400px" cover></v-img>
      <v-card-actions>
        <v-btn block color="purple" @click="cambiarPerro">
          Cambiar Perro
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const imgUrl = ref("");

const cambiarPerro = async () => {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random')
        const data = await response.json();
        imgUrl.value = data.message;
    } catch (error) {
        console.error("Error al buscar perro:", error);
    }
}

onMounted(cambiarPerro);
</script>