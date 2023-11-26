<template>
  <div class="bg-background">
    <Bitcoin></Bitcoin>
  <RegisterComponent></RegisterComponent>
  <Wave></Wave>
  </div>
</template>

<script>

import RegisterComponent from "../components/RegisterComponent";
import Wave from "../components/Wave";
import Bitcoin from "../components/BitcoinComponent"

export default {
  name: "Register",
  components: {
    RegisterComponent,
    Wave,
    Bitcoin
  },
}
</script>

<style scoped>

</style>