<template>
  <div >
    <q-toolbar class="bg-primary text-white">
      <q-btn flat round dense icon="home" class="q-mr-sm" :to="{name:'account'}" />
      <q-separator dark vertical inset />
      <q-btn stretch no-caps flat label="Thrift Accounts" />

       <q-space />

      <q-btn flat round dense icon="whatshot" />
      <q-btn flat round dense icon="ion-more" />
    </q-toolbar>
    <div class="row justify-start q-pa-lg q-gutter-sm">
      <div v-for="(item, index) in items" :key="index" style="min-width:250px; min-height:200px;">
        <q-card class="my-card">
          <q-card-section class="bg-primary text-white">
            <div class="text-h6">{{item.contributionName}}</div>
            <div class="text-subtitle2">
              <div class="col-md-6 row text-caption">
                <div v-if="item.collectionDuration >= 30" class="row q-pt-sm">Every 
                  <div class="q-px-xs">{{ Math.round(item.collectionDuration/30)}}</div>
                  <div v-if="Math.round(item.collectionDuration/30) == 1">Month</div>
                  <div v-if="Math.round(item.collectionDuration/30) > 1">Months</div>
                </div>
                <div v-if="item.collectionDuration >= 7 && item.collectionDuration < 30" class="row q-pt-sm">Every 
                  <div class="q-px-xs">{{ Math.round(item.collectionDuration/7)}} </div> 
                  <div v-if="Math.round(item.collectionDuration/7) == 1">Week</div>
                  <div v-if="Math.round(item.collectionDuration/7) > 1">Weeks</div>
                </div>
                <div v-if="item.collectionDuration < 7" class="row q-pt-sm">Every
                  <div class="q-px-xs"> {{ item.collectionDuration}} </div>
                  <div v-if="item.collectionDuration == 1"> day</div>
                  <div v-if="item.collectionDuration > 1"> days</div>
                </div>
                <div class="row q-pl-xs">
                  <div class="q-pt-sm">Contribute</div>
                  <div class="text-bold q-pl-xs text-white text-h6">{{item.contributionAmount}}</div> 
                </div>
                
              </div>
              
            </div>
          </q-card-section>

          <q-card-section class="column flex-center ">
              <div class="q-pt-sm text-caption">Take home</div>
              <div class="text-primary text-bold text-h3">N{{numbers( Number(item.collectionDuration) , Number(item.contributionAmount.slice(1)))[1] - Math.round(numbers( Number(item.collectionDuration) , Number(item.contributionAmount.slice(1)))[0]) }}</div>
              <div class="q-pt-sm text-caption">on {{item.expiry}} </div>
            </q-card-section>

          <q-separator />
            
          <q-card-actions>
            <div class="text-caption">
              <div class="text-grey">Next Deposit Date</div>
              <div>6th December, 2019</div>
            </div>
            <q-space />
            <div class="q-pt-sm">
              <q-btn @click="$emit('thrifty', [false, item])" no-caps outline class="q-px-xl text-primary" size="sm" >Details</q-btn>
            </div>
            
          </q-card-actions>
        </q-card>
      </div>
    </div>
    <q-page-sticky position="bottom-right" :offset="[18, 18]" >
      <ourSummary class="gt-sm" />
      <q-fab icon="ion-ios-arrow-up" direction="up" color="primary" class="lt-md" >
        <ourSummary  />
      </q-fab>
      
    </q-page-sticky>
  </div>
</template>

<script>
import ourSummary from './summary'
export default {
  // name: 'ComponentName',
  components:{
    ourSummary
  },
  data () {
    return {
      Amount: '',
      items:[
        {expiry: '2nd December, 2020',collectionDuration: '7', contributionName: 'Baba Ijebu', contributionAmount: 'N500', expectedCollection:'N2000'},
        {expiry: '12th January, 2020',collectionDuration: '1', contributionName: 'Baba Ijebu', contributionAmount: 'N500', expectedCollection:'N15000'},
        {expiry: '31st December, 2019',collectionDuration: '3', contributionName: 'Mr john Thrift', contributionAmount: 'N500', expectedCollection:'N2000'},
        {expiry: '1st febuary, 2020',collectionDuration: '60', contributionName: 'Baba Onazi', contributionAmount: 'N500', expectedCollection:'N2000'},
        {expiry: '22nd March, 2020',collectionDuration: '17', contributionName: 'Baba Ijebu', contributionAmount: 'N500', expectedCollection:'N2000'},
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
