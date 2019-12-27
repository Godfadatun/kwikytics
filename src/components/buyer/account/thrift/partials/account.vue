<template>
  <div>
    <q-card class="row">
      <q-card-section class="bg-primary col-md-3 col-sm-12 col-xs-12 text-white">
         <div class="absolute-top-left q-pl-lg">
          <q-btn class="q-pt-sm" dense size="sm" icon="ion-ios-arrow-round-back" flat @click="$emit('accountsBk', true)" no-caps label="Accounts" />
        </div>
        <div class="text-h6 q-pa-xl">{{item.contributionName}}</div>
       
      </q-card-section>
      <q-card-section class="flex flex-center q-gutter-sm col-md-9 col-sm-12 col-xs-12">
        <q-btn style="min-width:200px" class="q-px-xl q-mt-md" no-caps color="negative"  label="End Thrift" />
        <q-btn style="min-width:200px" class="q-px-xl q-mt-md" no-caps color="green" label="Onetime Thrift" @click="dashed" />
      </q-card-section>
      <q-space />
    </q-card>
    <q-card class="my-card">
      <q-linear-progress rounded stripe :value="progress" size="20px" color="primary" class="q-mt-sm" >
        <div class="absolute-full flex flex-center">
          <q-badge color="white" text-color="primary" :label="progressLabel + ' Payed'" />
        </div>
      </q-linear-progress>
      <!-- Thrift Payment Order -->
      <q-card-section class="no-padding">
        <q-card class="row" flat>
          <q-card-section class="col-md-8 col-sm-12 col-xs-12">
            <q-list bordered separator v-for="(val, index) in Payments" :key="index" >
              <q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-item-label class="text-primary text-bold text-h6">{{item.contributionAmount }}</q-item-label>
                </q-item-section>
                <q-item-section>
                  <q-item-label caption>{{val.date}}</q-item-label>
                </q-item-section>
                <q-item-section side class="gt-sm">
                  <div class="row q-gutter-xs"> 
                    <q-btn class="justify-end" no-caps color="primary" icon="ion-cash" label="Pay Now" @click="dashed"/>
                    <q-btn class="" no-caps color="primary" icon="ion-ios-person-add" label="Req Agent" />
                  </div>
                </q-item-section>
                <q-item-section side class="lt-md" >
                  <q-btn dense class="q-my-xs q-px-sm" size="sm" no-caps color="primary" label="Pay Now" @click="dashed"/>
                  <q-btn dense class="q-my-xs q-px-sm" size="sm" no-caps color="primary" label="Req Agent" />
                </q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
          <!-- Notification -->
          <q-card-section class="q-mt-md col-md-4">
            <q-list separator>
              <q-item>
                <q-item-section >
                  <q-item-label>Date of Withrawal</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-item-label caption lines="2">25th December, 2019</q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section >
                  <q-item-label>Withdrawal Amount</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-item-label caption lines="2">{{numbers( Number(item.collectionDuration) , Number(item.contributionAmount.slice(1)))[1] - Math.round(numbers( Number(item.collectionDuration) , Number(item.contributionAmount.slice(1)))[0]) }}</q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section >
                  <q-item-label>Next Payment</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-item-label caption lines="2">{{item.contributionAmount }}</q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section >
                  <q-item-label>Next Payment Date</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-item-label caption lines="2">6th December, 2019</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
            <q-list bordered separator>
              <q-card square flat class="row">
                <q-card-section class="bg-green text-white">
                  <div class="row flex-center">
                    <q-icon name="ion-ios-person" />
                    <q-separator spaced vertical dark />
                    <div>Payed</div>
                  </div>
                </q-card-section>
                <q-card-section class="q-py-none column flex-center">
                  <div>
                    <div class="">7th December, 2019</div>
                    <div class="text-caption">on 7th December, 2019</div>
                  </div>
                </q-card-section>
              </q-card>
              <q-separator />
              <q-card square flat class="row">
                <q-card-section class="bg-green text-white">
                  <div class="row flex-center">
                    <q-icon name="ion-ios-card" />
                    <q-separator spaced vertical dark />
                    <div>Payed</div>
                  </div>
                </q-card-section>
                <q-card-section class="q-py-none column flex-center">
                  <div>
                    <div class="">7th December, 2019</div>
                    <div class="text-caption">on 7th December, 2019</div>
                  </div>
                </q-card-section>
              </q-card>
            </q-list>
          </q-card-section>
        </q-card>
      </q-card-section>
    </q-card>
    <q-dialog v-model="alert" persistent>
      <thriftPay v-if="thriftPayd == true" @dasher="closer" />
    </q-dialog>
    
    
    
  </div>
</template>

<script>
import thriftPay from 'components/wallet/partials/thriftPay'
export default {
  // name: 'ComponentName',
  props:['item'],
  components:{
    thriftPay, 
  },
  data () {
    return {
      progress: 0.4,
      Payments:[
        {date: '7th December, 2019', active: false}, {date: '14th December, 2019', active: true}, {date: '21st December, 2019', active: true}, {date: '28th December, 2019', active: true}
      ],
      thriftPayd : false,
      alert: false
    }
  },
  methods: {
    numbers(duration, contrAmount){
      var Amount = Math.round(30/duration) * contrAmount
      return [((10/3)/100) * Amount, Amount]
    },

    dashed(){
      this.thriftPayd = true
      this.alert = true
    },

    closer(){
      this.alert = false; this.thrift = false; this.dash = false; this.thriftPayd = false; this.save = false
    }
  },

  
  computed: {
    progressLabel: function () {return (this.progress * 100)+'%'}
  },
}
</script>
