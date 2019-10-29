<template>
  <div>
    <q-card class="my-card">
      <q-card-section class="column flex-center">
        <!-- <q-avatar size="50px">
          <img src="https://cdn.quasar.dev/img/boy-avatar.png" alt="">
        </q-avatar> -->
        <q-btn flat no-caps class="text-weight-bolder text-h6 text-black" :to="{name: 'index'}">John<span class="text-primary"> Doe</span></q-btn>
      </q-card-section>
      <q-card-section class="bg-grey q-px-none">
        <q-item class="bg-white q-mt-xs"> 
          <q-item-section>
            <q-item-label class="text-negative text-bold">Loan</q-item-label>
            <q-item-label caption>Payment</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-item-label class="text-bold text-black">$500</q-item-label>
            <q-item-label caption class="text-negative ">-$20</q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="bg-white q-mt-xs"> 
          <q-item-section>
            <q-item-label class="text-negative text-bold">Savings</q-item-label>
            <q-item-label caption>Deposits</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-item-label caption class="text-positive ">+$20</q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="bg-white q-mt-xs"> 
          <q-item-section>
            <q-item-label class="text-negative text-bold">Savings</q-item-label>
            <q-item-label caption>withrawal</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-item-label caption class="text-negative">+$50</q-item-label>
          </q-item-section>
        </q-item>
      </q-card-section>
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
