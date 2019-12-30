<template>
  <div >
    <q-toolbar :class="'text-white bg-'+color">
      <q-btn v-if="tab == 'thrifts'" stretch no-caps flat label="Thrifts" />
      <q-btn v-if="tab == 'loans'" stretch no-caps flat label="Loans" />
      <q-space />
      <q-tabs v-model="tab" dense class="text-white " indicator-color="transparent" align="right" inline-label>
        <q-tab  v-if="tab == 'loans'" no-caps name="thrifts" label="Thrifts" @click="color = 'primary'" ><q-icon name="ion-ios-arrow-forward" /></q-tab>
        <q-tab  v-if="tab == 'thrifts'" no-caps name="loans" label="Loans" @click="color = 'green'" ><q-icon name="ion-ios-arrow-forward" /></q-tab>
      </q-tabs>
    </q-toolbar>

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="thrifts">
        <thrifts class="gt-sm" />
        <thrifts class="flex-center full-width lt-md" :size="'full-width'" />
      </q-tab-panel>

      <q-tab-panel name="loans">
        <loans class="gt-sm" :width="'300px'" />
        <loans class="flex-center full-width lt-md" :size="'full-width'" />
      </q-tab-panel>
    </q-tab-panels>
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
      color: 'primary',
      tab: 'thrifts',
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
