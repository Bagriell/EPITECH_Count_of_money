<template>
  <div>
    <nav class="relative flex flex-col items-center justify-between w-full px-2 py-3 bg-yellow mb-3">
      <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div class="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
          <a class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" href="#pablo">
            Coin Addict
          </a>
          <button class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
            <span class="block relative w-6 h-px rounded-sm bg-white"></span>
            <span class="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
            <span class="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
          </button>
        </div>
        <div class="lg:flex flex-grow items-center" id="example-navbar-warning">
          <ul class="flex flex-col lg:flex-row list-none ml-auto">
            <li class="nav-item">
              <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                Discover
              </a>
            </li>
            <li class="nav-item">
              <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#" @click="openProfil()">
                Profile
              </a>
            </li>
            <li class="nav-item">
              <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                Setting
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <ProfilComponent/>
  </div>
</template>

<script>
import ProfilComponent from '../components/ProfilComponent'

export default {
  name: "Navbar",
  components: {
    'ProfilComponent':ProfilComponent
  },
  methods:{
    openProfil(){
      document.getElementsByClassName("ProfilComp").Profil.style.display = "";
    }
  }
}
</script>

<style scoped>

</style>