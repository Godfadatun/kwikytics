<template>
  <div class="">
    <div v-if="singleAcct == true">
      <accounts v-if="thrifty == true" @thrifty="(event)=>{thrifty = event[0]; item = event[1] }"  />
      <account v-else-if="thrifty == false" :item="item" @accountsBk="thrifty = $event" />
    </div>
     <details v-if="singleAcct == false" />
    
  </div>
</template>

<script>
import accounts from './partials/accounts'
import account from './partials/account'
export default {
  // name: 'ComponentName',
  components:{
    accounts, account
  },
  data () {
    return {
      thrifty: true,
      singleAcct: true,
      item: '',
      alert: false,
      thrift: false,
      thriftPayd: false,
    }
  },

  methods: {
     dashed(e){
      this.thriftPayd = e
      this.alert = e
    },

    closer(){
      this.alert = false; this.thrift = false; this.dash = false; this.thriftPayd = false; this.save = false
    }
  },

  computed: {
    route: function(){return this.$route.name}
  },
}
</script>
