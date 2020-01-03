<template>
  <div>
    <q-card square flat class="row flex-center q-px-none" >
      <!-- <q-img class="col-md-6 col-xs-12 col-sm-12 q-ma-lg" src="statics/images/checkout.svg"  spinner-color="white" style="max-height: 500px; max-width: 600px" /> -->
      <q-card-section class="Column flex-center q-py-xl q-my-xs text-primary text-center q-gutter-sm col-md-6 col-xs-12 col-sm-12 bg-grey-4">
        <div class="text-h4 text-bold q-pt-xl">Let you and your customer track your Thrift Contributions</div>
        <div class="text-h6 text-weight-light">Every time of collection from your customer is an instant deposit</div>
        <q-btn class="q-px-lg text-subtitle1" color="indigo-6" no-caps label="View our Thrift Options" :to="{name: 'register'}" />
      </q-card-section>
      <q-card-section class="Column flex-center q-py-xl q-my-xs text-primary text-center q-gutter-sm col-md-6 col-xs-12 col-sm-12">
        <div class="text-h4 text-bold q-pt-xl">Track your agents, repayments</div>
        <div class="text-h6 text-weight-light">Make loan repayment easier to track and colllect easily</div>
        <q-btn class="q-px-lg text-subtitle1" color="indigo-6" no-caps label="Set Up a Loan Account" :to="{name: 'register'}" />
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
