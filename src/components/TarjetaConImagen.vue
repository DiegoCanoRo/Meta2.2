<script setup>

//type, required:bool, default:string
defineProps({
    imgUrl: {
        type : String,
        required:true
    },
    titulo: {
        type : String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true
    }
});
</script>

<template>  

    <v-card class="mx-auto h-100">
        <v-img :src="imgUrl"  height = "250"></v-img>

        
        <v-card-title>
            {{ titulo }}
        </v-card-title>
        
        <v-card-subtitle>
            {{ autor }}
        </v-card-subtitle>

        <v-card-text>
            {{ descripcion }}
        </v-card-text>
    </v-card>
</template>
