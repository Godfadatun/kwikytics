<template>
  <div class="bg-grey-3">
    <theHeader />
    <div class="row ">
      <left class="col-sm-12 col-xs-12 col-md-9"/>
      <right class="col-sm-12 col-xs-12 col-md-3 lt-md"/>
      <q-drawer class="col-sm-12 col-xs-12 col-md-3 gt-sm"
        side="right"
        v-model="leftDrawerOpen"
        show-if-above
        elevated
        :width="300"
        :breakpoint="100"
      >
      <q-scroll-area class="fit">
        <right class=""/>
      </q-scroll-area>
    </q-drawer>
    </div>
    
  </div>
</template>

<script>
import theHeader from './parials/header'
import right from './parials/right'
import left from './parials/left'
export default {
  // name: 'ComponentName'
  components:{
    theHeader, right, left
  },
  data () {
    return {
      leftDrawerOpen: false,
    }
  }
}
</script>
