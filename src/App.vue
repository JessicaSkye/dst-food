<template>
  <h1 class="page-header">DST Food</h1>
  <RecipeTable :data="recipes" />
</template>

<script lang="ts">
import { RecipeList } from './data/recipes'
import RecipeTable from '@/components/RecipeTable.vue'

import { defineComponent } from 'vue'
export default defineComponent({
  name: 'App',
  components: { RecipeTable },
  data () {
    return {
      recipes: RecipeList
    }
  }
})
</script>

<style lang="scss">
body { margin: 0; }

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');
* {
  color: white;
  font-family: 'Roboto', sans-serif;
}
#app {
  margin: 0;
  height: 100vh;
  background:
    linear-gradient(200deg, hsla(220, 10%, 10%, 0.6), hsla(220, 10%, 10%, 0.8)),
    url('./assets/background.jpg');
  background-size: cover;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: auto;

  > .page-header {
    margin: 0;
    padding: 32px;
    text-align: center;
  }
}
</style>
