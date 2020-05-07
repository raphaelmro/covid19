<template>
  <v-app>
    <Header />

    <v-content>
      <summary-dashboard></summary-dashboard>
    </v-content>
  </v-app>
</template>

<script>
import SummaryDashboard from './components/SummaryDashboard.vue'
import Header from './Header.vue'

export default {
  name: 'App',
  components: { Header, SummaryDashboard },
}
</script>
