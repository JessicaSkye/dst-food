<template>
  <div class="recipe-item">
    <!-- ICON/NAME -->
    <div class="title">
      <img :src="require(`@/assets/items/${recipe.name}.png`)" alt="">
      {{ recipe.name }}
    </div>

    <!-- RECIPE INGREDIENTS -->
    <div class="recipes">
      <div
        class="recipe"
        v-for="(recipelist, r) in recipe.ingredients"
        :key="`recipe_${recipe.name}_recipelist_${r}`"
      >
        <a
          v-for="(ingredient, i) in recipelist"
          :key="`recipe_${recipe.name}_recipelist_${r}_ingredient_${i}`"
          :href="ingredient.url"
        >
          <img :src="require(`@/assets/items/${ingredient.name}.png`)">
        </a>
      </div>
    </div>

    <!-- HUNGER -->
    <div class="hunger">{{ recipe.hunger }}</div>

    <!-- HEALTH -->
    <div class="health">{{ recipe.health }}</div>

    <!-- SANITY -->
    <div class="sanity">{{ recipe.sanity }}</div>
  </div>
</template>

<script lang="ts">
import { IRecipe } from '@/data/recipes'

import { defineComponent } from 'vue'
export default defineComponent({
  name: 'RecipeItem',
  props: {
    recipe: {
      required: true,
      type: Object as () => IRecipe
    }
  }
})
</script>

<style lang="scss">
.recipe-item {
  display: grid;
  grid-template-columns: 280px 288px 1fr 1fr 1fr;

  > div {
    background: hsl(220,10%,10%);
    padding: 8px 0;
  }
  > .recipe, > .title { padding: 0 16px; }

  > .title {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 16px;
    align-items: center;
  }

  > .health, > .hunger, > .sanity {
    background: none;
    justify-self: center;
    align-self: center;
    display: inline-block;
    color: hsl(220,10%,80%);
    font-weight: 500;
  }
}
</style>
