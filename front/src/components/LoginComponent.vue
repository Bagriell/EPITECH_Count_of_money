<template>
  <div class="min-h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <div>
        </div>
        <div class="wrapper">
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900 mb-5 title">
            Sign in to CoinAddict
          </h2>
        </div>
        <div class="bg-gray-200 flex flex-row justify-around">
          <button @click="handleClickSignIn" v-if="!isSignIn" :disabled="!isInit"
                  class="text-gray-100 hover:text-white shadow font-bold text-sm py-3 px-4 rounded flex justify-start items-center cursor-pointer w-20 mt-2">
            <img class="google-icon-svg" style="margin: auto"
                 src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
          </button>
          <button
              class="bg-white text-gray-100 hover:text-white shadow font-bold text-sm py-3 px-4 rounded flex justify-start items-center cursor-pointer w-20 mt-2">
            <svg viewBox="0 0 24 24" class="fill-current mr-3 w-6 h-6" style="margin: auto"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
          </button>
          <button
              class="text-gray-100 hover:text-white shadow text-sm font-bold py-3 px-4 rounded flex justify-start items-center cursor-pointer w-20 mt-2 bg-facebook">
            <svg viewBox="0 0 24 24" class="fill-current mr-3 w-6 h-6 bg-facebook" style="margin: auto; fill: white"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z"/>
            </svg>
          </button>
        </div>
      </div>
      <form class="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" value="true">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            Email
          </label>
          <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email" type="email" placeholder="*****@****">
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input
              class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password" type="password" placeholder="************">
        </div>
        <p class="mt-2 text-center text-sm text-gray-600">
          <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
            Sign as Guest
          </a>
        </p>
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input id="remember-me" name="remember-me" type="checkbox"
                   class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
            <label for="remember-me" class="ml-2 block text-sm text-gray-900">
              Remember me
            </label>
          </div>

          <div class="text-sm">
            <a href="#" class="font-medium text-yellow hover:text-indigo-500">
              Forgot your password?
            </a>
          </div>
        </div>
        <div class="flex flex-row justify-center">
          <div class="w-1/2 mr-16">
            <button @click="register"
                    class="group relative bg-white w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <span class="absolute left-0 inset-y-0 flex items-center pl-3">
            <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clip-rule="evenodd"/>
            </svg>
          </span>
              Register
            </button>
          </div>
          <div class="w-1/2">
            <button type="submit" @click="handleClickSignOut"
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
              Sign in
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import router from "../router";

export default {
  name: "LoginComponent",
  props: {
    isVisible: Boolean
  },
  data() {
    return {
      isInit: false,
      isSignIn: false
    }
  },

  methods: {
    async handleClickSignIn() {
      try {
        const googleUser = await this.$gAuth.signIn()
        console.log('user', googleUser)
        await router.push("dashboard")
        this.isSignIn = this.$gAuth.isAuthorized
      } catch (error) {
        // On fail do something
        console.error(error);
        return null;
      }
    },
    handleClickSignOut() {
      this.$gAuth
          .signOut()
          .then(() => {
            //on success do something
            this.isSignIn = this.$gAuth.isAuthorized;
          })
          .catch(error => {
            console.error(error);
            //on fail do something
          });
    },
    register() {
      router.push("register")
    }
  },
  mounted() {
    let that = this
    let checkGauthLoad = setInterval(function () {
      that.isInit = that.$gAuth.isInit
      that.isSignIn = that.$gAuth.isAuthorized
      if (that.isInit) clearInterval(checkGauthLoad)
    }, 1000);
  }
}
</script>

<style scoped>
html {
  background: #333;
  font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
  font-weight: 300;
}

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