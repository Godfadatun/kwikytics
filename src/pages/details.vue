<template>
  <q-page padding>
     <myLayout >
      <Details slot="LayoutContent" :item="item"/>
    </myLayout>
    <!-- content -->

  </q-page>
</template>

<script>
import Details from '../components/seller/Details/index'
import myLayout from '../components/home/partials/layout'
export default {
  // name: 'PageName',
  props:['item'],
  components:{
    Details, myLayout
  },

  computed: {
    route(){ return this.$route.name }
  },
}
</script>
