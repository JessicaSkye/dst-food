<template>
  <div class="recipe-table" :class="{'-lockheader': lockHeader}">
    <!-- TABLE HEADER -->
    <div class="header">
      <div class="container">
        <div class="filter">
          <input class="input" v-model="currentFilter" placeholder="Filter Recipes">
          <div class="count">
            {{ sortedData.length }} result<template v-if="sortedData.length !== 1">s</template>
          </div>
        </div>

        <div class="columns">
          <div>Item Name</div>
          <div>Ingredients</div>

          <!-- HUNGER HEADER -->
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

          <!-- HEALTH HEADER -->
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

          <!-- SANITY HEADER -->
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
    </div>

    <!-- RENDER LIST -->
    <Recipe
      v-for="(recipe, i) in sortedData"
      :key="`recipe_${i}`"
      :recipe="recipe"
    />

    <!-- NO RESULTS DISPLAY -->
    <div v-if="sortedData.length === 0" class="no-results">
      <i class="material-icons">thumb_down</i>
      <h2 class="header">No Results</h2>
      <p class="subtitle">Try searching for something else</p>
    </div>
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
      lockHeader: false,

      currentFilter: '' as string,
      currentSort: 'hunger' as SortField,
      currentSortDir: 'desc' as SortDirection
    }
  },
  methods: {
    // Change Sorting Field and Direction
    sort (s: SortField) {
      if (s === this.currentSort) this.currentSortDir = this.currentSortDir === 'asc' ? 'desc' : 'asc'
      this.currentSort = s
    },

    // Calculate LockHeader when Scrolling
    scrollLockHeader (event: Event) {
      const scrollPos = (event.target as HTMLDivElement)?.scrollTop
      if (scrollPos >= this.$el.offsetTop) this.lockHeader = true
      else this.lockHeader = false
    }
  },
  computed: {
    // Sort and Filter Recipe Data
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
  },
  created () {
    // Register Scroll Event Listener
    const appEl = document.getElementById('app')
    if (appEl) appEl.addEventListener('scroll', e => window.requestAnimationFrame(() => this.scrollLockHeader(e)))
  }
})
</script>

<style lang="scss">
.recipe-table {
  background: hsl(220,10%,14%);
  width: 1000px;
  margin: auto;
  margin-bottom: 128px;

  display: grid;
  grid-template-rows: 104px auto;

  &.-lockheader {
    grid-template-rows: auto;

    > .header > .container {
      position: absolute;
      top: 0;
      width: 1000px;

      box-shadow: 0 8px 16px rgba(0,0,0,0.2);
    }
  }
  // HEADER
  > .header {
    min-height: 104px;

    > .container {
    background: hsl(220,10%,18%);
    transition: 0.15s ease;

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

  // NO RESULTS DISPLAY
  > .no-results {
    text-align: center;
    padding: 128px;

    > .material-icons, > .header, >.subtitle {
      color: hsl(220,10%,50%);
    }

    > .material-icons { font-size: 128px; }
    > .header, > .subtitle {
      margin: 0;
    }
  }
}
</style>
