<template>
  <q-page class="flex flex-center" style="margin-top: -52px;">
    <q-header class="transparent">
      <q-toolbar >
        <q-btn flat dense round @click="leftDrawerOpen = !leftDrawerOpen" icon="menu" aria-label="Menu"/>

        <q-toolbar-title>
          <q-btn flat no-caps class="text-weight-bolder text-h6 text-black" :to="{name: 'index'}">Kwik<span class="text-primary">ytics</span></q-btn>
        </q-toolbar-title>

        <div>
          <q-btn color="primary" text-color="white" label="dashBoard" :to="{name: 'account'}"/>

        </div>
      </q-toolbar>
    </q-header>
  <q-img class="flex flex-center window-height" src="statics/slides/bgKpnew.svg" spinner-color="white">
  <div class="absolute-full column flex-center  q-gutter-md">
    <div class="flex-center text-weight-bolder q-pt-xl text-h3 text-white">Kwik<span class="text-primary">ytics</span></div>
    <!-- <div class="text-weight-bolder text-h3 text-white lt-md q-pt-xl">Kwik<span class="text-primary">ytics</span></div> -->
    <Auth class="col"/>
  </div>
  </q-img>
  </q-page>
</template>

<script>
import Auth from '../components/auth/index'
export default {
  // name: 'PageName',
  components:{
    Auth
  }
}
</script>
