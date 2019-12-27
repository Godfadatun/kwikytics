<template>
  <div >
    <q-toolbar class="bg-primary text-white">
      <q-btn stretch no-caps flat label="Thrifts" />
    </q-toolbar>
     <thrifts class="gt-sm" />
     <thrifts class="flex-center full-width lt-md" :size="'full-width'" />
    
    <q-toolbar class="bg-green text-white">
      <q-btn stretch no-caps flat label="Loans" />
    </q-toolbar>
    <loans class="gt-sm" :width="'300px'" />
    <loans class="flex-center full-width lt-md" :size="'full-width'" />
    
  </div>
</template>

<script>
import ourSummary from './partials/summary'
import loans from './partials/loans'
import thrifts from './partials/thrifts'
export default {
  // name: 'ComponentName',
  components:{
    ourSummary, loans, thrifts
  },
  data () {
    return {
      Amount: '',
      items:[
        {collectionDuration: '7', contributionName: 'Baba Ijebu', contributionAmount: 'N500', expectedCollection:'N2000'},
        {collectionDuration: '1', contributionName: 'Baba Ijebu', contributionAmount: 'N500', expectedCollection:'N15000'},
        {collectionDuration: '3', contributionName: 'Mr john Thrift', contributionAmount: 'N500', expectedCollection:'N2000'},
        {collectionDuration: '60', contributionName: 'Baba Onazi', contributionAmount: 'N500', expectedCollection:'N2000'},
        {collectionDuration: '17', contributionName: 'Baba Ijebu', contributionAmount: 'N500', expectedCollection:'N2000'},
      ]
    }
  },

  methods: {
    numbers(duration, contrAmount){
      var Amount = Math.round(30/duration) * contrAmount
      return [((10/3)/100) * Amount, Amount]
    }
  },
}
</script>
