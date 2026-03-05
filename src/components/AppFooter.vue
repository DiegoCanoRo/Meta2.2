<script setup>  
    // obtener la fecha actual
    const fechaActual = new Date().toLocaleString();

</script>

<template>  

<v-footer app class="bg-grey-darken-4 text-white">
    <v-container>
        <v-row no-gutters justify="center" align="center">
        <v-col cols="12" md="4" class="text-center text-md-left">
          <span class="font-weight-bold">Diego Cano Robledo - 1177025</span>
        </v-col>
        
       
        <v-col cols="12" md="4" class="text-center">
          <v-icon icon="mdi-calendar" size="small" class="mr-1"></v-icon>
          Hoy es: {{ fechaActual }}
        </v-col>

        <v-col cols="12" md="4" class="text-center text-md-right">
          <span class="font-weight-bold">Correo: diego.cano@uabc.edu.mx</span>
        </v-col>

       </v-row> 
    </v-container>
</v-footer>

</template>