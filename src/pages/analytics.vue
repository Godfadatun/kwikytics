<template>
  <q-page >
    <!-- content -->
     <myLayout >
      <events slot="LayoutContent"/>
    </myLayout>
  </q-page>
</template>

<script>
import myLayout from '../components/home/partials/layout'
import events from '../components/seller/dashboard/index'
export default {
  // name: 'PageName',
  components:{
    events, myLayout
  }
}
</script>
