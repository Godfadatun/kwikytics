<template>
  <div>
    <topheader />
    <intro />
    <services />
    <!-- <thrift />
    <transaction />
    <loan /> -->
    <mobile />
    <bottomfooter />

  </div>
</template>

<script>
import topheader from './partials/header'
import intro from './partials/intro'
import services from './partials/services'
import thrift from './partials/thrift'
import transaction from './partials/transaction'
import loan from './partials/loan'
import mobile from './partials/mobile'
import bottomfooter from './partials/footer'
export default {
  // name: 'ComponentName',
  components:{
    topheader, intro, services, thrift, transaction, loan, mobile, bottomfooter
  },
  data () {
    return {

    }
  }
}
</script>
