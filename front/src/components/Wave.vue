<template class="bg-background">
  <div class="back h-96 bg-background">
    <div class="ocean">
      <div class="wave"></div>
      <div class="wave"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Wave",
  data() {
    return {
      activeColor: 'lightgreen',
    }
  }
}

</script>

<style scoped>
html, body {
  height: 100%;
}

body {
  background: #261e35;
  overflow: hidden;
}

.ocean {
  height: 5%;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  background: #fcaf3e;
}

.wave {
  background: url(../assets/wave.svg);
  position: absolute;
  top: -178px;
  width: 6400px;
  height: 198px;
  animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
  transform: translate3d(0, 0, 0);
}

.wave:nth-of-type(2) {
  top: -155px;
  animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) -.125s infinite, swell 7s ease -1.25s infinite;
  opacity: 1;
}

@keyframes wave {
  0% {
    margin-left: 0;
  }
  100% {
    margin-left: -1600px;
  }
}

@keyframes swell {
  0%, 100% {
    transform: translate3d(0, -25px, 0);
  }
  50% {
    transform: translate3d(0, 5px, 0);
  }
}
</style>