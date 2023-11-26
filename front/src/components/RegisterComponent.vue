<template>
  <div>
    <!-- Content -->
    <div class="min-h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
          <div class="wrapper">
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900 mb-5 title">
              Register to Coin Addict
            </h2>
          </div>
          <div class="mt-10">
            <div class="flex mb-4">
              <div class="w-1/2 mr-1">
                <label class="block text-grey-darker text-sm font-bold mb-2" for="first_name">First Name</label>
                <input class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="first_name"
                       type="text" placeholder="Your first name">
              </div>
              <div class="w-1/2 ml-1">
                <label class="block text-grey-darker text-sm font-bold mb-2" for="last_name">Last Name</label>
                <input class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="last_name"
                       type="text" placeholder="Your last name">
              </div>
            </div>
            <div class="mb-4">
              <label class="block text-grey-darker text-sm font-bold mb-2" for="email">Email Address</label>
              <input class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="email" type="email"
                     placeholder="Your email address">
            </div>
            <div class="mb-4">
              <label class="block text-grey-darker text-sm font-bold mb-2" for="password">Password</label>
              <input class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="password"
                     type="password" placeholder="Your secure password">
              <p class="text-grey text-xs mt-1">At least 6 characters</p>
            </div>
            <div class="justify-center flex flex-row mt-10">
              <div class="w-1/2 mr-16">
                <button @click="signIn"
                        class="group relative bg-white w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <span class="absolute left-0 inset-y-0 flex items-center pl-3">
            <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clip-rule="evenodd"/>
            </svg>
          </span>
                  Go Back
                </button>
              </div>
              <div class="w-1/2">
                <button type="submit"
                        class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
          <span class="absolute left-0 inset-y-0 flex items-center pl-3">
            <!-- Heroicon name: solid/lock-closed -->
            <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clip-rule="evenodd"/>
            </svg>
          </span>
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import router from "../router";

export default {
  name: "RegisterComponent",

  methods: {
    signIn() {
      router.push('login')
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
}

.title {
  width: 21ch;
  overflow: hidden;
  color: white;
  white-space: nowrap;
  border-right: 4px solid orange;
  animation: printed-text 3s steps(21),
  flashin-border .9s step-start infinite;
}

@keyframes flashin-border {
  0% {
    border-color: orange;
  }
  50% {
    border-color: transparent;
  }
  100% {
    border-color: orange;
  }
}

@keyframes printed-text {
  from {
    width: 0%;
  }
}
</style>