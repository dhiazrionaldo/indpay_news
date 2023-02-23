<template>
  <q-layout view="hHh lpR fFf">

    <q-header reveal elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="../assets/I-HSE_ico.svg">
          </q-avatar>
          <div class="absolute-center mobile-hide">INDOPAY NEWS PORTAL</div> 
        </q-toolbar-title>

        <q-space />

         <q-input label-color="white" dark dense  v-model="text" input-class="text-right" class="row q-ml-md" label="Search news here">
          <template v-slot:append>
            <q-icon v-if="text === ''" name="search" color="white" />
            <q-icon v-else name="clear" class="cursor-pointer" @click="text = ''" />
          </template>
        </q-input>
      </q-toolbar>
      <q-tabs align="left" class="q-pa-l">
        <q-route-tab to="/" label="Favourite" />
        <q-space />
        <q-route-tab to="/" label="Business" />
        <q-space />
        <q-route-tab to="/" label="Automotives" />
        <q-space />
        <q-route-tab to="/" label="Economics" />
        <q-space />
        <q-route-tab to="/" label="Crypto" />
        <q-space />
        <q-route-tab to="/" label="Tech" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>
<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      text: ref(''),
      ph: ref(''),
      dense: ref(false)
    }
  }
}
</script>