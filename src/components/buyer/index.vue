<template>
  <div>
    <dashboard v-if="route == 'account'"/>
    <Transaction v-else-if="route == 'transaction'"/>
    <accounts v-else-if="route == 'thrift'"/>
    <!-- <account v-else-if="route == 'thriftaccount'" /> -->
  </div>
</template>

<script>
import dashboard from './account/dashboard/index'
import Transaction from 'components/buyer/account/Transaction/index'
import accounts from '../buyer/account/thrift/index'
// import account from '../buyer/account/thrift/partials/account'

export default {
  // name: 'ComponentName'
  components:{
    dashboard, Transaction, accounts, 
  },
  data () {
    return {}
  },
  computed: {
    route: function(){return this.$route.name}
  },
}
</script>
