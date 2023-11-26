<template>
  <div>
    <div v-if="!this.data">Loading...</div>
    <section v-else class="antialiased bg-background text-black h-screen px-4">
      <div class="flex flex-col justify-center">
        <div
          class="
            w-full
            max-w-4xl
            mx-auto
            border-b border-black
            bg-yellow
            p-10
            rounded-md
          "
        >
          <header class="px-5 mb-5 ml-52 text-center w-1/2 object-center text-white font-bold text-xl bg-background rounded-lg">
            <h2>{{data.title}}</h2>
          </header>
          <div class="">
            <div class="overflow-x-auto">
              <table class="table-auto w-full">
                <thead
                  class="
                    text-md
                    border-t border-black
                    flex flex-row
                    items-center
                  "
                >
                  <tr v-for="col in data.cols" :key="col">
                    <th class="px-10 py-5 whitespace-nowrap">
                      <div class="text-left">{{ col }}</div>
                    </th>
                  </tr>
                </thead>

                <tbody
                  v-for="row in data.rows"
                  :key="row.symbol"
                  class="text-sm flex flex-row items-center"
                >
                  <tr
                    @click="redirect(row.name, vs_currency)"
                    class="
                    thing
                      border-t border-black
                      w-full
                      mx-auto
                      hover:bg-blue
                      cursor-pointer
                      transition
                    "
                  >
                    <td class="px-10 py-5 whitespace-nowrap">
                      <div class="w-10 h-10 flex-shrink-0">
                        <img :src="row.icon" width="40" height="40" />
                      </div>
                    </td>
                    <td class="px-10 py-5 whitespace-nowrap">
                      <div class="text-left">
                        {{ row.name }}
                      </div>
                    </td>

                    <td class="px-10 py-5 whitespace-nowrap">
                      <div class="">
                        {{ row.symbol }}
                      </div>
                    </td>

                    <td class="px-10 py-5 whitespace-nowrap">
                      <div class="">
                        {{ row.price }}
                      </div>
                    </td>

                    <td class="px-10 py-5 whitespace-nowrap">
                      <div class="">
                        {{ row.market_cap }}
                      </div>
                    </td>

                    <td class="px-10 py-5 whitespace-nowrap">
                      <div class="">
                        {{ row.volume }}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
export default {
  name: "Table",
  props: {
    data: Object,
    vs_currency: String
  },
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    redirect(currency, vs_currency) {
      this.$router.push({ name: "dashboard", params: { currency: currency, vs_currency: vs_currency }});
    },
  },
};
</script>

<style scoped>
.thing {
  
  box-shadow: 0 15px 30px 0 rgba(0,0,0,0.11),
    0 5px 15px 0 rgba(0,0,0,0.08);
  border-radius: 0.5rem;
  
  border-left: 0 solid #fcaf3e;
  transition: border-left 300ms ease-in-out, padding-left 300ms ease-in-out;
}

.thing:hover {
  padding-left: 0.5rem;
  border-left: 0.5rem solid #fcaf3e;
}

.thing > :first-child {
  margin-top: 0;
}

.thing > :last-child {
  margin-bottom: 0;
}
</style>