<template>
  <v-app>
    <v-main>
      <canvasExp />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import vuetifyVue from './components/vuetify.vue'
import canvasExp from './components/canvas.vue'

export default defineComponent({
  name: 'App',

  components: {
    HelloWorld,
    vuetifyVue,
    canvasExp
  },

  data() {
    return {
      //
    }
  },
})
</script>
