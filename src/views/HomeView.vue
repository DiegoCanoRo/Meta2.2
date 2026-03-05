<template>
  <v-container>
    <v-row>
      <v-col v-for="(foto, index) in fotos" :key="foto.id" cols="12" md="6">
        <TarjetaConImagen 
          :imgUrl="`https://picsum.photos/id/${foto.id}/600/400`"
          :titulo="index === 0 ? 'Imagen Aleatoria 1' : 'Imagen Aleatoria 2'"
          :autor="foto.author"
          :descripcion="`ID de imagen: ${foto.id}`"
        />
      </v-col>
    </v-row>

    <div class="text-center my-8">
      <v-btn 
        color="primary" 
        size="large"
        rounded="xl"
        elevation="4"
        :loading="cargando" 
        @click="obtenerFotos"
      >
        <v-icon start icon="mdi-refresh"></v-icon>
        Actualizar imagenes
      </v-btn>
    </div>

    <v-divider class="my-10"></v-divider>

    <v-row justify="center">
      <v-col cols="12">
        <TablaConDatos />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  import TarjetaConImagen from '../components/TarjetaConImagen.vue';
  import TablaConDatos from '../components/TablaConDatos.vue';

  const fotos = ref([]);
  const cargando = ref(false);

  //funcion para obtener datos de la api de picsum
  const obtenerFotos = async () => {
    cargando.value = true;
    try {
      const respuesta = await fetch('https://picsum.photos/v2/list?page=1&limit=30');
      const datos = await respuesta.json();
      
      const mezcladas = datos.sort(() => 0.5 - Math.random());
      fotos.value = mezcladas.slice(0, 2);
    } catch (error) {
      console.error("Error al cargar fotos:", error);
    } finally {
      //delay para que se vea el efecto de carga
      setTimeout(() => {
        cargando.value = false;
      }, 1000);
    }
  };

  onMounted(obtenerFotos);
</script>