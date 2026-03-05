<script setup>
    const logoUrl = 'https://picsum.photos/id/1084/50/50'
</script>


<template>      
<v-app-bar color = "primary">
    <v-avatar class="ml-4" size="40">
        <v-img :src="logoUrl"></v-img>
    </v-avatar>


    <v-app-bar-title text="Mi Portafolio Fotográfico"></v-app-bar-title>

    <v-spacer></v-spacer>

    <v-btn icon="mdi-account-circle">
        
    </v-btn>
</v-app-bar>
</template>