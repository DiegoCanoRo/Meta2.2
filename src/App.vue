
<template>
  <v-app>

    <AppHeader />
    <v-main>
     <v-container>
        <v-row>
          
          <v-col cols="12" md="6">
            <TarjetaConImagen 
              imgUrl="https://picsum.photos/id/1/600/400"
              titulo="imagen aleatoria"
              autor="Diego Cano"
              descripcion="Nose"
            />
          </v-col>

          <v-col cols="12" md="6">
            <TarjetaConImagen 
              imgUrl="https://picsum.photos/id/10/600/400"
              titulo="imagen aleatoria 2"
              autor="Hernan Robledo"
              descripcion="Tampoco se"
            />
          </v-col>

        </v-row>
        </v-container>
    </v-main>

   <AppFooter/> 

  </v-app>
</template>

<script setup>
  //

  import TarjetaConImagen from './components/TarjetaConImagen.vue';
  import AppHeader from './components/AppHeader.vue';
    import AppFooter from './components/AppFooter.vue';

</script>
