<template>
  <div>
    <div v-if="isEmpty">Loading. Please wait...</div>
    <div v-else>
      <ul>
        <li v-for="info in infos" :key="info">
          {{ `${capitalizeWords(info)} ${summary[info]}` }}
        </li>
      </ul>
      <p>Last update {{ lastUpdate }}</p>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import toCapitalizedWords from '../utils'

export default {
  name: 'SummaryDashboard',
  data() {
    return {
      infos: ['active', 'cases', 'critical', 'deaths',
        'recovered', 'tests', 'todayCases', 'todayDeaths'],
    }
  },
  mounted() {
    this.$store.dispatch('fetchBrazilData')
  },
  computed: {
    ...mapState(['summary']),
    lastUpdate() {
      return this.convertMilisToDate(this.summary.updated)
    },
    isEmpty() {
      return Object.keys(this.summary).length === 0
    },
  },
  methods: {
    capitalizeWords(word) {
      return toCapitalizedWords(word)
    },
    convertMilisToDate(milis) {
      const date = new Date(milis)
      return date.toString()
    },
  },
}
</script>
