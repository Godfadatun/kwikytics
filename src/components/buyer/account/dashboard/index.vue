<template>
  <div class="bg-grey-3">
    <theHeader />
    <div class="row ">
      <left class="col-sm-12 col-xs-12 col-md-9"/>
      <right class="col-sm-12 col-xs-12 col-md-3 q-px-sm q-py-sm"/>
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
    return {}
  }
}
</script>
