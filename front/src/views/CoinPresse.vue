<template>
  <div class="bg-background h-full">
    <Navbar></Navbar>
    <div class="w-full bg-gray-800">
      <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div class="text-center pb-12">
          <h2
            class="
              font-bold
              text-3xl
              md:text-3xl
              lg:text-3xl
              font-heading
              text-white
            "
          >
            Check latest news
          </h2>
        </div>
        <select
          class="
            w-52
            text-gray
            py-2
            px-3
            border border-yellow
            bg-white
            rounded-md
            shadow-sm
            flex
            items-center
            mx-auto
            my-5
          "
          v-model="filterValue"
        >
          <option v-for="elem in selectValues" :key="elem" :value="elem">
            {{ elem }}
          </option>
        </select>

        <div
          class="
            grid grid-cols-1
            sm:grid-cols-2
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
          "
        >
        
          <div
            v-for="article in newsList"
            :key="article.id"
            class="
              w-full
              bg-yellow
              rounded-lg
              shadow-lg
              p-12
              flex flex-col
              justify-center
              items-center
            "
          >
          
            <div class="mb-8">
              <img
                class="
                  object-center object-cover
                  rounded-t-lg
                  border-t-4 border-t-background border-b-2 border-b-white
                  h-36
                  w-36
                "
                :src="article.img_link"
                alt="photo"
              />
            </div>
            <div class="text-center">
              <p
                class="
                  text-xl
                  bg-background
                  rounded-md
                  text-white
                  fontext-ellipsis
                  overflow-hidden-bold
                  mb-2

                "
              >
                👉 {{ article.title }}
              </p>
              <p class="text-base text-gray-400 font-normal">
                {{ article.body_content }}
              </p>
              <p
                class="
                  text-base text-gray-400
                  font-normal
                  text-ellipsis
                  overflow-hidden
                  pt-5
                "
              >
                <button
                  class="
                    rounded-full
                    bg-yellow
                    px-10
                    border-b-2 border-background
                    hover:bg-yellow hover:text-white
                  "
                >
                  <a target="_blank" :href="article.article_link">{{
                    article.article_link
                  }}</a>
                </button>
              </p>
            </div>

            
          </div>
          
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import news from "../testing_data/news.json";

export default {
  name: "CoinsPresse",
  components: { Navbar },
  data() {
    return {
      newsList: news.news,
      filterValue: "all",
      selectValues: ["all", "bitcoin", "ethereum", "litecoin", "dodgecoin"],
      storm: "&#10024",
    };
  },
  mounted() {},
};
</script>

<style scoped>
</style>