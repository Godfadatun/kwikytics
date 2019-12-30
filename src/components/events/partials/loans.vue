<template>
  <div class="row justify-start q-py-lg q-px-sm q-gutter-sm">
      <div v-for="(item, index) in items" :key="index" :class="size" :style="'min-width:250px; min-height:200px; max-width:' + width">
        <q-card class="my-card">
          <q-card-section class="bg-green text-white text-center">
            <div class="text-h6">{{item.contributionName}}</div>
          </q-card-section>
           <q-card-section class="column flex-center ">
            <div class="q-pt-sm text-caption">Get</div>
            <div class="text-primary text-bold text-h4">N{{item.amount}}</div>

          </q-card-section>
          <q-card-section class="bg-green text-white text-center q-pa-none">
            <div class="q-pt-sm text-caption">Interest of</div>
            <div class="text-bold text-h5">{{item.interest}}%</div>
            <div class="q-pt-sm text-caption">Pay in {{item.collectionDuration}}{{item.interval}}</div>
          </q-card-section>

          <q-card-actions align="center" class="bg-green ">
            <q-btn size="sm" @click="$emit('thrifty', [false, item])" no-caps class="q-px-xl text-green text-bold" color="white"  >Get Loan</q-btn>
            <q-btn size="sm" @click="$emit('singleAcct', [false, item])" no-caps class="q-px-xl text-negative" color="negative" icon="ion-trash" />
          </q-card-actions>
        </q-card>
      </div>
    </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  props:['size', 'width'],
  data () {
    return {
      Amount: '',
      items:[
        {amount: '1,000,000', interval:'month' ,interest: 1, collectionDuration: '7', contributionName: 'Baba Ijebu', contributionAmount: 'N500', expectedCollection:'N2000'},
        {amount: '100,000', interval:'year' ,interest: 10, collectionDuration: '1', contributionName: 'Baba Ijebu', contributionAmount: 'N500', expectedCollection:'N15000'},
        {amount: '20,000,000', interval:'month' ,interest: 11, collectionDuration: '3', contributionName: 'Mr john Thrift', contributionAmount: 'N500', expectedCollection:'N2000'},
        {amount: '50,000', interval:'weeks' ,interest: 5, collectionDuration: '60', contributionName: 'Baba Onazi', contributionAmount: 'N500', expectedCollection:'N2000'},
        {amount: '600,000', interval:'weeks' ,interest: 18, collectionDuration: '17', contributionName: 'Baba Ijebu', contributionAmount: 'N500', expectedCollection:'N2000'},
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
