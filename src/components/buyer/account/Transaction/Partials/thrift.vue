
<template>
  <div>
    <q-card class="" style="">
      
      <!-- Transaction Notifications -->

      <q-card-section class="q-px-none">
        <div v-for="(item, index) in Data" :key="index">
          <q-separator />
          <q-separator />
          <q-item class="bg-white q-pl-none q-py-none"> 
            <q-item-section side class="bg-primary q-px-none">
              <q-btn flat no-caps color="primary" text-color="white" label="Reciept" />
            </q-item-section>
            <q-item-section class="q-px-xs">
              <q-item-label class="text-negative text-bold">{{item.source}}</q-item-label>
              <q-item-label caption>{{item.action}}</q-item-label>
            </q-item-section>
            <q-item-section side >
              <q-item-label v-if="item.action == 'Withdrawal'" caption class="text-negative">-{{item.amount}}</q-item-label>
              <q-item-label v-if="item.action != 'Withdrawal'" caption class="text-positive">+{{item.amount}}</q-item-label>
            </q-item-section>
          </q-item>
        </div>
        
        <q-separator />
      </q-card-section>
    </q-card>
    
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  
  data () {
    return {
      loan: 40,
      Data:[
        {source: 'Savings', action: 'Deposits', amount:'20', product:'Wallet'},
        {source: 'Savings', action: 'Withdrawal', amount:'120', product:'Wallet'},
        {source: 'Thrift', action: 'Payment', amount:'40000', product:'Thrift'},
        {source: 'Loan', action: 'Repayment', amount:'200', product:'Finance'},
      ]
    }
  },
   methods: {
    getNullLabel (val) {
      return val === null ? 'null' : val
    }
  }
}
</script>
