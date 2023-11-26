<template>
  <div class="bg-background">
    <Navbar></Navbar>
    <div class="flex flex-col">
      <div class="flex flex-row justify-center sm:px-6 lg:px-8 py-10">
        <input
          v-model="crypto"
          type="text"
          class="
            bg-white
            h-14
            w-96
            pr-8
            pl-5
            rounded
            z-0
            focus:shadow focus:outline-none
          "
          placeholder="Search crypto..."
        />
        <div class="absolute top-4 right-3">
          <i class="fa fa-search text-yellow z-20 hover:text-yellow"></i>
        </div>
        <SelectInput class="ml-5 bg-white" :values="vsCurrencyChoices" :vs_currency="vs_currency" ></SelectInput>
      </div>
      <Table :data="cryptoData" :vs_currency="vs_currency"/>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Table from "../components/Table";
import cryptoData from "../testing_data/cryptos.json";
import SelectInput from "../components/SelectInput.vue"
// import crypto_request from "../services/cryptos_request.js"

export default {
  name: "Coins",
  components: { Navbar, Table, SelectInput },
  data() {
    return {
      cryptoData: cryptoData,
      crypto: "",
      vs_currency: "usd",
      vsCurrencyChoices: ["usd", "euros", "sterling"]
    };
  },
  created() {
    // crypto_request.getCryptos()
    console.log("request crypto");
  },
};
</script>

<style scoped>
</style>