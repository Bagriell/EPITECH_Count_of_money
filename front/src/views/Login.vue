<template>
  <div class="bg-background">
    <Bitcoin></Bitcoin>
    <LoginComponent></LoginComponent>
    <Wave></Wave>
  </div>
</template>

<script>
import LoginComponent from '../components/LoginComponent'
import Wave from "../components/Wave";
import Bitcoin from "../components/BitcoinComponent";

export default {
  name: 'Login',
  components: {
    LoginComponent,
    Wave,
    Bitcoin,
  },
}
</script>
<style scoped>
</style>