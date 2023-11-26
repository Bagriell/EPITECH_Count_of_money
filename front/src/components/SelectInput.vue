<template>
  <select
    class="
      block
      w-52
      text-gray
      py-2
      px-3
      border border-yellow
      bg-white
      rounded-md
      shadow-sm
      focus:outline-none focus:ring-primary-500 focus:border-primary-500
    "
    name="vs_currency"
    v-model="userInput"
    @keyup="$emit('update:vs_currency', userInput);"
  >
    <option v-for="elem in values" :key="elem" :value="elem">{{elem}}</option>
  </select>
</template>

<script>
export default {
  name: "SelectInput",
  data() {
      return {
          userInput: "usd"
      }
  },
  props: {
    values: Array,
    vs_currency: String,
  },
  mounted() {
      this.userInput = this.vs_currency
  }
};
</script>

<style>
</style>