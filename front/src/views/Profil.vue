<template>
  <div class="bg-background">
    <button @click="openProfil()">open</button>
    <ProfilComponent></ProfilComponent>
  </div>
</template>

<script>
import ProfilComponent from '../components/ProfilComponent'

export default {
  name: 'Profil',
  components: {
    ProfilComponent,
  },
  methods:{
    openProfil(){
      document.getElementsByClassName("ProfilComp").Profil.style.display = ""
    }
  }
}
</script>
<style scoped>
</style>