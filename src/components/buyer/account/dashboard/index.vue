<template>
  <div>
    <theHeader />
    <div class="row">
      <left class="col-md-9"/>
      <right class="col-md-3"/>
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
