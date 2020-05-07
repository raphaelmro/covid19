<template>
  <div>
    <div v-if="isEmpty">Loading. Please wait...</div>
    <div v-else>
      <h1>Dashboard</h1>
      <v-row>
        <v-col cols="3" v-for="info in infos" :key="info">
          <v-card
            class="mx-auto"
            max-width="344"
          >
            <v-card-text>
              <div>{{ `${capitalizeWords(info)} `}}</div>
              <div class="text--primary">
                {{ `${summary[info]}` }}
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <p class="text--secondary font-weight-light">Last update {{ lastUpdate }}</p>
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
