<template>
  <div class="recipe-table">

    <div class="header">
      <div class="filter">
        <input class="input" v-model="currentFilter" placeholder="Filter Recipes">
        <div class="count">{{ sortedData.length }} results</div>
      </div>

      <div class="columns">
        <div>Item Name</div>
        <div>Ingredients</div>

        <div
          class="-center -clickable"
          :class="{
            '-active': currentSort === 'hunger',
            '-asc': currentSortDir === 'asc'
          }"
          @click="sort('hunger')"
        >
          <img src="@/assets/items/HungerMeter.png">
          Hunger
          <i class="material-icons sort-icon">arrow_drop_down</i>
        </div>

        <div
          class="-center -clickable"
          :class="{
            '-active': currentSort === 'health',
            '-asc': currentSortDir === 'asc'
          }"
          @click="sort('health')"
        >
          <img src="@/assets/items/HealthMeter.png">
          Health
          <i class="material-icons sort-icon">arrow_drop_down</i>
        </div>

        <div
          class="-center -clickable"
          :class="{
            '-active': currentSort === 'sanity',
            '-asc': currentSortDir === 'asc'
          }"
          @click="sort('sanity')"
        >
          <img src="@/assets/items/SanityMeter.png">
          Sanity
          <i class="material-icons sort-icon">arrow_drop_down</i>
        </div>
      </div>
    </div>
    <Recipe
      v-for="(recipe, i) in sortedData"
      :key="`recipe_${i}`"
      :recipe="recipe"
    />
  </div>
</template>

<script lang="ts">
import { IRecipe } from '@/data/recipes'
import Recipe from '@/components/Recipe.vue'

import { defineComponent } from 'vue'
type SortField = 'hunger'|'health'|'sanity'
type SortDirection = 'asc'|'desc'
export default defineComponent({
  name: 'RecipeTable',
  components: { Recipe },
  props: {
    data: {
      required: true,
      type: Object as () => IRecipe[]
    }
  },
  data () {
    return {
      currentFilter: '' as string,
      currentSort: 'hunger' as SortField,
      currentSortDir: 'desc' as SortDirection
    }
  },
  methods: {
    sort (s: SortField) {
      if (s === this.currentSort) this.currentSortDir = this.currentSortDir === 'asc' ? 'desc' : 'asc'
      this.currentSort = s
    }
  },
  computed: {
    sortedData (): IRecipe[] {
      const res = this.data
      return res.sort((a, b) => {
        const modifier = this.currentSortDir === 'desc' ? -1 : 1
        if (a[this.currentSort] < b[this.currentSort]) return -1 * modifier
        if (a[this.currentSort] > b[this.currentSort]) return 1 * modifier
        return 0
      }).filter((r) => {
        if (r.name.toLowerCase().includes(this.currentFilter.toLowerCase())) return true

        return r.ingredients.some(ingredient => {
          if (ingredient.name.toLowerCase().includes(this.currentFilter.toLowerCase())) return true
          return false
        })
      })
    }
  }
})
</script>

<style lang="scss">
.recipe-table {
  background: hsl(220,10%,14%);
  width: 1000px;
  margin: auto;
  margin-bottom: 128px;

  > .header {
    background: hsl(220,10%,20%);
    box-shadow: 0 8px 16px rgba(0,0,0,0.2);

    > .filter {
      display: grid;
      grid-template-columns: 1fr auto;

      > .input {
        background: transparent;
        padding: 16px;
        border: none;
        width: 100%;
        box-sizing: border-box;

        &:focus {
          outline: none;
          background: hsla(220, 10%, 0%, 0.1);
        }
      }

      > .count {
        padding: 16px;
        justify-self: center;
        opacity: 0.5;
      }
    }

    > .columns {
      display: grid;
      grid-template-columns: 280px 288px 1fr 1fr 1fr;

      > div {
        position: relative;
        padding: 16px;
        align-self: center;

        font-weight: 500;

        > img { vertical-align: bottom; }

        &.-center {
          padding: 16px 0;
          text-align: center;
        }
        &.-clickable {
          cursor: pointer;
          transition: 0.15s ease;
          &:hover { background: hsla(220,10%,50%,0.2); }
        }

        > .sort-icon {
          position: absolute;
          bottom: -4px;
          left: 50%;
          transform: translate(-50%, 0%);
          opacity: 0;
          transition: 0.15s ease;
        }
        &.-active > .sort-icon { opacity: 1; }
        &.-asc > .sort-icon { transform: translate(-50%, 0%) rotate(180deg); }
      }
    }
  }
}
</style>
