<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <div class="row items-start">
      <div class="col">
        <q-card class="my-card" flat bordered v-for="items in articles" :key="items.Id">
          <q-card-section horizontal>
            <q-card-section class="q-pt-xs">
              <div class="text-overline">{{items.author}}</div>
              <div class="text-h5 q-mt-sm q-mb-xs">{{items.title}}</div>
              <div class="text-caption text-grey">
                {{items.description}}
              </div>
            </q-card-section>

            <q-card-section class="col-5 flex flex-center">
              <q-img
                class="rounded-borders"
                :src=items.urlToImage
              />
            </q-card-section>
          </q-card-section>

          <q-separator />

          <q-card-actions>
            <q-btn flat>
              Share
            </q-btn>
            <q-btn flat color="primary">
              Save
            </q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import news_tesla from '../api/news_tesla'

export default {
  data() {
    return{
      berita:{},
      articles: []
    }    
  },
  mounted(){
    news_tesla.getData().then(response => {
      this.berita = response.data
      this.articles = response.data.articles
    })
    
  }
}
</script>
