<template>
  <div>
    <q-card class="q-pa-sm">
      <q-tab-panels class="q-px-sm" v-model="tab" >
        <q-tab-panel class="q-pa-xs" name="loans">
          <q-card class="bg-primary">
            <q-btn flat class="text-left" round color="primary" text-color="white" icon="ion-ios-return-left" :to="{name:'account'}" />
            <q-card-section class="text-center bg-primary q-pb-xl">
              <div class="text-bold text-white">Savings</div>
              <div class="text-bold text-h6 text-white">N100,000</div>
            </q-card-section>
          </q-card>
        </q-tab-panel>

        <q-tab-panel class="q-pa-xs" name="savings">
          <q-card class="bg-primary">
            <q-btn flat class="text-left" round color="primary" text-color="white" icon="ion-ios-return-left" :to="{name:'account'}" />
            <q-card-section class="text-center bg-primary q-pb-xl">
              <div class="text-bold text-white">Money Owed</div>
              <div class="text-bold text-h6 text-white">N100,000</div>
            </q-card-section>
          </q-card>
        </q-tab-panel>

        <q-tab-panel class="q-pa-xs" name="thrift">
          <q-card class="bg-primary">
            <q-btn flat class="text-left" round color="primary" text-color="white" icon="ion-ios-return-left" :to="{name:'account'}" />
            <q-card-section class="text-center bg-primary q-pb-xl">
              <div class="text-bold text-white">Money Escrow</div>
              <div class="text-bold text-h6 text-white">N100,000</div>
            </q-card-section>
          </q-card>
        </q-tab-panel>
      </q-tab-panels>

      <q-tabs v-model="tab" dense class="text-grey q-pt-none" active-color="primary" indicator-color="primary" align="justify" narrow-indicator >
        <q-tab name="loans" label="Loans" />
        <q-tab name="savings" label="Savings" />
        <q-tab name="thrift" label="Thrift" />
      </q-tabs>

      <q-tab-panels class="q-px-sm" v-model="tab" >
        <q-tab-panel name="loans">
          <div class="text-h6">loans</div>
          <Loans />
        </q-tab-panel>

        <q-tab-panel name="savings">
          <div class="text-h6">savings</div>
          <Savings />
        </q-tab-panel>

        <q-tab-panel name="thrift">
          <div class="text-h6">thrift</div>
          <Thrift />
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
    
    
  </div>
</template>

<script>
import Loans from './Partials/loans'
import Savings from './Partials/savings'
import Thrift from './Partials/thrift'
export default {
  // name: 'ComponentName',
  components:{
    Thrift, Savings, Loans
  },
  data () {
    return {
      tab: 'savings',
    }
  }
}
</script>
