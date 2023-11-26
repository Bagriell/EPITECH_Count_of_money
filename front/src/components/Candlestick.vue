<template>
  <div class="bg-background">
    <div class="mt-20 box">
      <h1
        class="
          bg-yellow
          text-white
          mx-10
          rounded-t-md
          text-center
          font-bold
          text-xl
          py-5
        "
      >
        {{ coin }} / usd 
      </h1>
      <div class="rounded-t-md">
      <div class="mx-10 " id="chart"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Plotly from "plotly.js/dist/plotly";

export default {
  name: "Candlestick",
  props: {
    coin: String,
    vs_currency: String,
    data: Object,
  },
  computed: {
    cryptoData: function () {
      return this.data;
    },
  },
  data() {
    return {
      layout: {
        plot_bgcolor: "#f4fefe",
        paper_bgcolor: "#f4fefe",
        xaxis: {
          title: "slider",
          type: "date",
        },
        yaxis: {
          title: "cryptovalues",
          type: "linear",
        },
        autosize: true,
      },
      config: { displaylogo: false, responsive: true },
    };
  },
  mounted() {
    this.createPlot();
  },
  methods: {
    createPlot() {
      const trace = {
        x: this.cryptoData.dates,
        close: this.cryptoData.close,
        decreasing: { line: { color: "#F00020" } },
        high: this.cryptoData.hight,
        increasing: { line: { color: "#17BECF" } },
        line: { color: "rgba(31,119,180,1)" },
        low: this.cryptoData.low,
        open: this.cryptoData.open,
        type: "candlestick",
        xaxis: "x",
        yaxis: "y",
      };
      Plotly.newPlot("chart", [trace], this.layout, this.config);
    },
  },
};
</script>

<style scoped>
.box {

}
</style>
