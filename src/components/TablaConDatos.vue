<script setup>

const items = [
    { nombre: 'Programación en C', nivel: 'Intermedio', experiencia: '4 años' },
  { nombre: 'Java (POO)', nivel: 'Intermedio', experiencia: '3 años' },
  { nombre: 'SQL / Bases de Datos', nivel: 'Intermedio', experiencia: '1 año' },
  { nombre: 'Desarrollo Web (Vue/Vuetify)', nivel: 'Básico', experiencia: '1 mes' },
  ];
</script>


<template>
  <v-container class="mt-5">
    <h2 class="text-h5 mb-4 text-center">Resumen de Habilidades Técnicas</h2>
    
    <v-table density="comfortable" class="elevation-2 rounded-lg">
      <thead>
        <tr>
          <th class="text-left font-weight-bold">Tecnología / Concepto</th>
          <th class="text-left font-weight-bold">Nivel de Dominio</th>
          <th class="text-left font-weight-bold">Experiencia</th>
        </tr>
      </thead>



      <tbody>
        <tr v-for="item in items" :key="item.nombre">
          <td>{{ item.nombre }}</td>
          <td>
            <v-chip size="small" :color="item.nivel === 'Avanzado' ? 'success' : 'primary'">
              {{ item.nivel }}
            </v-chip>
          </td>
          <td>{{ item.experiencia }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>

