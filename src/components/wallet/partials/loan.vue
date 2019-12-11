<template>
  <div>
    <q-card class="text-center" style="max-width:300px">
        <q-card-section class="bg-red text-white ">
          <div class="text-bold">Loan</div>
          <div class="text-caption">7th December, 2019</div>
        </q-card-section>
        <q-card-section class="column flex-center q-pb-none">
          <div class="text-primary text-h4 text-bold q-pt-md">₦50,000</div>
          <div class="text-red text-caption q-pb-sm">Due -5 days</div>
        </q-card-section>
        <q-separator />
        <q-card-actions  v-if="dashed == false" align="center">
          <q-btn color="red" outline no-caps label="Repayment" @click="dashed = true" />
        </q-card-actions>
        
        <q-card-section v-if="dashed == true" class="flex flex-center q-gutter-sm">
          <q-btn color="green" class="" no-caps label="Pay from Thrift" @click="$emit('thrifter', true)" />
          <q-btn color="red" class="q-px-md" no-caps label="Card Payment" @click="$emit('dasher', true)" />
          <q-btn color="primary" class="q-px-xl" no-caps label="Pay from Savings" @click="$emit('saver' , true)" />
        </q-card-section>
      </q-card>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {
      dashed: false
    }
  },
  methods: {
    dasher(){
      // this.$emit('dasher', true)
      this.dashed = true
    }
    
  },
}
</script>
      
