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
        <q-card-actions align="center">
          <q-btn color="red" outline no-caps label="Repayment" @click="$emit('dasher', true)" />
        </q-card-actions>
      </q-card>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {}
  }
}
</script>
      
