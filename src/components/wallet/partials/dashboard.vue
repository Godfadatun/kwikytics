<template>
  <div>
    <q-card class="">
      <q-card-section class="row justify-center text-center q-px-none q-gutter-xs">
        <q-card class="bg-red text-white col-md-3 ">
          <q-card-section class="q-pb-xs">
            <div class="text-h6">₦{{loan.total}}</div>
          </q-card-section>
          <q-card-section>
            <div class="text-caption">in Debt</div>
          </q-card-section>
          <q-card-actions align="center">
            <q-btn outline v-if="loan.total == 0" disable no-caps label="Pay Loan" />
            <q-btn outline v-if="loan.total != 0" no-caps label="Pay Loan" />
            <q-btn outline no-caps label="Request Loan" />
          </q-card-actions>
        </q-card>

        <q-card class="bg-primary text-white col-md-4 ">
          <q-card-section class="q-pb-xs"> 
            <div class="text-h6">₦200,000</div>
          </q-card-section>
          <q-card-section>
            <div class="text-caption">in Savings</div>
          </q-card-section>
          <q-card-actions align="center">
            <q-btn outline no-caps label="Deposit" />
            <q-btn outline no-caps label="Withdraw" />
          </q-card-actions>
        </q-card>

        <q-card class="bg-green text-white col-md-3" style="">
          <q-card-section class="q-pb-xs">
            <div class="text-h6">₦2,000,000</div>
          </q-card-section>
          <q-card-section>
            <div class="text-caption">Incoming</div>
          </q-card-section>
          <q-card-actions align="center">
            <q-btn outline no-caps label="Pay Thrift" />
          </q-card-actions>
        </q-card>
      </q-card-section>
    </q-card>
    <div class="q-py-md text-primary text-bold">Impending Activities</div>
    <q-card class="my-card">
      <q-card-section class="row q-gutter-sm">
        <loan @dasher="$emit('dasher', true)"/>
        <thrift />
      </q-card-section>
    </q-card>
    
    
  </div>
</template>

<script>
import loan from './loan'
import thrift from './thrift'
export default {
  // name: 'ComponentName',
  components:{
    loan, thrift
  },
  data () {
    return {
      loan: {total: 0}
    }
  }
}
</script>
