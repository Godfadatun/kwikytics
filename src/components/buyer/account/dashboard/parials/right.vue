<template>
  <div>
    <q-card class="" style="">
      <q-card-section class="column flex-center">
        <!-- <q-avatar size="50px">
          <img src="https://cdn.quasar.dev/img/boy-avatar.png" alt="">
        </q-avatar> -->
        <q-btn flat no-caps class="text-weight-bolder text-h6 text-black" :to="{name: 'index'}">John<span class="text-primary"> Doe</span></q-btn>
      </q-card-section> 
      <q-separator />
      <q-separator />
      <q-card-section class="bg-info text-center q-px-none q-pt-none">
        <q-item class="flex-center" style="background: #FF8000">
          <q-item-section>
            <q-item-label class="text-white text-h6 text-weight-bolder">Loan</q-item-label>
          </q-item-section>
        </q-item>
        <div class="text-weight-bolder q-pt-xs text-caption text-green">{{ getNullLabel(loan) }}% paid</div>
        <q-item class="q-pa-none">
          <q-item-section side>
            <q-icon name="money_off" color="negative" />
          </q-item-section>
          <q-item-section>
            <q-slider
              v-model="loan"
              :min="0"
              :max="100"
              label
              :label-value="loan + '% paid'"
              color="green"
              readonly
            />
          </q-item-section>
          <q-item-section side>
            <q-icon name="attach_money" color="positive "/>
          </q-item-section>
        </q-item>
      </q-card-section>
      <!-- Thrift Savings -->
      <q-separator />
      <q-separator />         
      <q-card-section class="bg-accent text-center q-px-none q-pt-none">
        <q-item class="bg-positive flex-center">
          <q-item-section>
            <q-item-label class="text-white text-h6 text-weight-bolder">Thrift Savings</q-item-label>
          </q-item-section>
        </q-item>
        <Timer 
         starttime="Nov 5, 2018 15:37:25" endtime="Nov 8, 2020 16:37:25"  trans='{"day":"Day", "hours":"Hours", "minutes":"Minutes", "seconds":"Seconds", "expired":"Event has been expired.", "running":"Till the end of event.", "upcoming":"Till start of event.", "status": {"expired":"Expired", "running":"Running", "upcoming":"Future"}}'/>
      </q-card-section>
      <!-- Transaction Notifications -->

      <q-card-section class="q-px-none scroll"  >
        <div v-for="(item, index) in Data" :key="index">
          <q-separator />
          <q-separator />
          <q-item class="bg-white q-pl-none q-py-none"> 
            <q-item-section side class="bg-primary q-px-none">
              <Reciept :item="item"/>
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
import Timer from './partials/countdown'
import Reciept from 'components/buyer/account/Transaction/PopUps/Reciept'
export default {
  // name: 'ComponentName',
  components:{
    Timer, Reciept
  },
  data () {
    return {
      loan: 40,
      Data:[
        {source: 'Savings', action: 'Deposits', amount:'20', product:'Wallet'},
        {source: 'Savings', action: 'Withdrawal', amount:'120', product:'Wallet'},
        {source: 'Thrift', action: 'Payment', amount:'40000', product:'Thrift'},
        {source: 'Loan', action: 'Repayment', amount:'200', product:'Finance'},
        {source: 'Savings', action: 'Withdrawal', amount:'120', product:'Wallet'},
        {source: 'Thrift', action: 'Payment', amount:'40000', product:'Thrift'},
        {source: 'Loan', action: 'Repayment', amount:'200', product:'Finance'},
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
