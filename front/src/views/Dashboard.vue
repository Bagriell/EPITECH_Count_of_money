<template>
  <div class="bg-background h-screen">
    <Navbar></Navbar>
    <Candlestick :coin="currency" :vs_currency="this.$route.params.vs_currency" :data="data_cs"/>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Candlestick from "../components/Candlestick";
import data_candlestick from "../testing_data/data_candlestick.json"


export default {
  name: "Dashboard",
  components: {Navbar, Candlestick},
  data() {
    return {
      vs_currency: "usd",
      data_cs: data_candlestick,
    }
  },
  computed: {
    currency() {
      return this.$route.params.currency
    }
  },
  mounted() {
    console.log(this.$route.params)
  }
}
</script>

<style scoped>

</style>