<template>
  <div>
    <topheader />
    <intro />
    <services />
     <mobile />
    <thrift />
    <loan />
    <transaction />
    <bottomfooter />
    <thefooter />
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
import thefooter from './partials/thefooter'
export default {
  // name: 'ComponentName',
  components:{
    topheader, thefooter, intro, services, thrift, transaction, loan, mobile, bottomfooter
  },
  data () {
    return {

    }
  }
}
</script>
