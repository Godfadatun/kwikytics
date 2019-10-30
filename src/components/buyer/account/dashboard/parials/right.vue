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
         starttime="Nov 5, 2018 15:37:25" endtime="Nov 8, 2019 16:37:25"  trans='{"day":"Day", "hours":"Hours", "minutes":"Minutes", "seconds":"Seconds", "expired":"Event has been expired.", "running":"Till the end of event.", "upcoming":"Till start of event.", "status": {"expired":"Expired", "running":"Running", "upcoming":"Future"}}'/>
      </q-card-section>
      <!-- Transaction Notifications -->

      <q-card-section class="q-px-none">
        <q-separator />
        <q-item class="bg-white q-pl-none q-py-none"> 
          <q-item-section side class="bg-primary q-px-none">
             <q-btn flat no-caps color="primary" text-color="white" label="Reciept" />
          </q-item-section>
          <q-item-section class="q-px-xs">
            <q-item-label class="text-negative text-bold">Loan</q-item-label>
            <q-item-label caption>Payment</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-item-label class="text-bold text-black">$500</q-item-label>
            <q-item-label caption class="text-negative ">-$20</q-item-label>
          </q-item-section>
        </q-item>
        <q-separator />
        <q-separator />
        <q-item class="bg-white q-pl-none q-py-none"> 
          <q-item-section side class="bg-primary q-px-none">
             <q-btn flat no-caps color="primary" text-color="white" label="Reciept" />
          </q-item-section>
          <q-item-section class="q-px-xs">
            <q-item-label class="text-negative text-bold">Savings</q-item-label>
            <q-item-label caption>Deposits</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-item-label caption class="text-positive ">+$20</q-item-label>
          </q-item-section>
        </q-item>
        <q-separator />
        <q-separator />
        <q-item class="bg-white q-pl-none q-py-none"> 
          <q-item-section side class="bg-primary q-px-none">
             <q-btn flat no-caps color="primary" text-color="white" label="Reciept" />
          </q-item-section>
          <q-item-section class="q-px-xs">
            <q-item-label class="text-negative text-bold">Savings</q-item-label>
            <q-item-label caption>withrawal</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-item-label caption class="text-negative">+$50</q-item-label>
          </q-item-section>
        </q-item>
        <q-separator />
      </q-card-section>
    </q-card>
    
  </div>
</template>

<script>
import Timer from './partials/countdown'
export default {
  // name: 'ComponentName',
  components:{
    Timer
  },
  data () {
    return {
      loan: 40,
    }
  },
   methods: {
    getNullLabel (val) {
      return val === null ? 'null' : val
    }
  }
}
</script>
