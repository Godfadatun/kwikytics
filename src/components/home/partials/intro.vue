<template>
  <div>
    <q-card flat class="row flex-center q-pa-md">
      <q-card-section class="Column flex-center text-primary text-center q-gutter-sm col-md-6 col-xs-12 col-sm-12">
        <div class="text-h4 text-bold">Track your Micro Transactions Anywhere, Anytime</div>
        <div class="text-h6">From Thrifts, Deposits, withdrawals to Loans...</div>
        <q-btn class="q-px-lg text-subtitle1" color="indigo-6" no-caps label="Check it Out" :to="{name: 'register'}"  />
      </q-card-section>
      <q-space />
      <q-img class="col-md-6 col-xs-12 col-sm-12 q-ma-lg" src="statics/images/intro.svg"  spinner-color="white" style="max-height: 500px; max-width: 600px" />
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
