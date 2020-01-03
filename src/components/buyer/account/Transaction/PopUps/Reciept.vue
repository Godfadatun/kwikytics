<template>
  <div>
    <q-btn flat no-caps color="primary" text-color="white" label="Reciept" @click="alert = true" />
    <q-dialog v-model="alert">
      <q-card class="q-pa-sm" style="min-height: 300px">
        
        <q-list bordered separator>
          <q-item clickable v-ripple>
            <q-item-section avatar="">
              <div class="text-weight-bolder text-h6 text-black" :to="{name: 'index'}">k<span class="text-primary">y</span>-{{item.product}}</div>
            </q-item-section>
            <q-space />
            <q-item-section side>
              <q-item-label v-if="item.action == 'Withdrawal'" class="text-negative text-bold">-{{item.amount}}</q-item-label>
              <q-item-label v-if="item.action != 'Withdrawal'" class="text-positive text-bold">+{{item.amount}}</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section avatar="">
              <q-item-label caption>Status</q-item-label>
              <q-item-label caption>Purpose</q-item-label>
            </q-item-section>
            <q-space />
            <q-item-section side>
              <q-item-label class="text-positive ">Successful</q-item-label>
              <q-item-label class="text-black">{{item.source}} {{item.action}}</q-item-label>
              
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple class="flex flex-center">
            <q-item-label caption>02/12/2019, 09:33 </q-item-label>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section avatar="">
              <q-item-label caption>Transaction number</q-item-label>
            </q-item-section>
            <q-space />
            <q-item-section side>
              <q-item-label caption class="text-positive ">1243332839238</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>

        <q-card-section class="text-center q-py-xl">
          <div class="text-bold text-grey-8">Reciept</div>
        </q-card-section>
        <q-card-section class="text-center q-py-none ">
          <div class="text-grey-8">
           <q-btn no-caps class="text-weight-light full-width text-caption text-weight-bold" color="primary" text-color="white">Get your Reciept</q-btn>
          </div>  
        </q-card-section>
        <q-card-section class="text-center q-py-none ">
           <div class="text-caption text-grey-8"> Need help? <q-btn align="left" flat no-caps class="text-weight-light text-caption text-black q-px-none" :to="{name: 'index'}">Chat with kwik<span class="text-primary">ytics</span></q-btn></div>
        </q-card-section>
      </q-card>
    </q-dialog>
      
    
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  props:['item'],
  data () {
    return {
      alert: false,
    }
  }
}
</script>
