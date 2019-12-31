<template>
  <div>
    <div v-if="route == 'analytics'">
      <q-btn color="primary" label="Individual" :to="{name: 'individual'}"/>
      <sellerHeadrer />
      <left class="q-py-md"/>
      <center class="q-py-md" />
      <right class="q-py-md" />
    </div>
    <div v-if="route == 'individual'">
      <individual class="q-py-md" />

    </div>

  </div>
</template>

<script>
import sellerHeadrer from './parials/header'
import left from './parials/left'
import right from './parials/right'
import center from './parials/center'
import individual from './parials/individual'
export default {
  // name: 'ComponentName',
  components:{
    sellerHeadrer, left, right, center, individual
  },
  data () {
    return {}
  },
  computed: {
    route(){return this.$route.name}
  },
}
</script>
