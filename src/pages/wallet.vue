<template>
  <q-page padding>
    <!-- content -->
     <myLayout >
      <wallet slot="LayoutContent"/>
    </myLayout>
    
  </q-page>
</template>

<script>
import myLayout from '../components/home/partials/layout'
import wallet from '../components/wallet/index'
export default {
  // name: 'PageName',
  components:{
    wallet, myLayout
  }
}
</script>
