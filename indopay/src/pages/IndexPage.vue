<template>
<div class="q-pa-md">
  <q-carousel
    animated
    v-model="slide"
    infinite
    :autoplay="autoplay"
    arrows
    transition-prev="slide-right"
    transition-next="slide-left"
    @mouseenter="autoplay = false"
    @mouseleave="autoplay = true"
  >
  <q-carousel-slide v-for="items in headline" :name="items.title" :key="items.title" :img-src="items.urlToImage">
    <div class="absolute-bottom custom-caption">
        <div class="text-h6">{{items.title}}</div>
        <div class="text-subtitle1">{{items.overline}}</div>
      </div>
  </q-carousel-slide>
  </q-carousel>
</div>
<div class="text-divider">Headline</div>
<div class="q-ma-md q-col-gutter-lg" v-if="articles[0]">
  <q-card class="my-card">
    <q-card-section horizontal>
      <q-img
        class="col-5"
        :src="articles[0].urlToImage"
      />

      <q-card-section>
        <div class="text-h5 bold">{{articles[0].title}}</div>
        <div class="q-ma-sm text-caption">{{ articles[0].description }}</div>
      </q-card-section>
    </q-card-section>

    <q-separator />

    <q-card-actions>
      <q-btn flat color="primary" @click="goToUrl(articles[0].url)">
        READ MORE
      </q-btn>
    </q-card-actions>
  </q-card>
</div>
  


<div class="text-divider-small">More News</div>

<div class="row q-col-gutter-lg q-ma-sm">
  <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12" v-for="items in articles.slice(1)" :key="items.source.name">
    <div class="q-pa-md">
      <q-card class="my-card" flat bordered>
        <q-img
          :src="items.urlToImage"
        />

        <q-card-section>
          <div>{{formatDate(items.publishedAt)}}</div>
          <div class="text-overline text-orange-9">{{items.author}}</div>
          <div class="text-h5 q-mt-sm q-mb-xs">{{items.title}}</div>
          <div class="text-caption text-grey">{{items.description}}</div>
        </q-card-section>

        <q-card-actions>
          <q-btn flat color="dark" label="read more" @click="goToUrl(items.url)" />
        </q-card-actions>

      </q-card>
    </div>
    </div>
</div>
</template>

<script>
import {ref} from 'vue'
import news_tesla from '../api/news_tesla'
import moment from 'moment'
import {useQuasar, QSpinnerGears} from 'quasar'

export default {
  setup(){
    return {
      slide: ref(1),
      autoplay: ref(true)
    }
  },
  data() {
    return{
      berita:{},
      articles: [],
      headline: [],
    }    
  },
  async mounted(){
    const $q = useQuasar();
    try {
      this.$q.loading.show({
        spinner: QSpinnerGears,
          spinnerColor: 'info',
          spinnerSize: 140
      })
      await news_tesla.getData().then(response => {
        this.berita = response.data
        this.articles = response.data.articles
      })
      await news_tesla.getHeadLine().then(response => {
        this.headline = response.data.articles
      })
      this.$q.loading.hide()
    } catch (error) {
      this.$q.loading.hide()
      return error
    }
    
    
    
  }, 
  methods:{
    goToUrl(url){
      window.open(url);
    },
    formatDate (dateString) {
      // Format the date using a library like moment.js
      return moment(dateString).format('MMMM D, YYYY')
    }
  }
}
</script>
