<template>
  <div class="column flex-center q-gutter-sm bg-grey-3">
    <div class="text-center">
      <div class="flex-center text-weight-bolder q-pt-xl text-h3 text-black">Welcome <span class="text-primary">John Doe</span></div>
    <div class="flex-center text-weight-light text-h6 text-primary">Where do you want to start?</div>
    </div>
    
    <q-card flat class="column flex-center q-pa-none bg-grey-3">
      <q-card-section class="row flex-center q-gutter-xl q-pa-none q-ma-none">
        <q-card flat class="q-pa-lg" bordered>
          <img src="statics/slides/undraw_credit_card_payment_yb88.svg" alt="" style="height:200px; max-width:200px">
          <q-card-section class="text-center text-primary text-weight-bolder text-h6">
            <div>Transactions</div>
          </q-card-section>
        </q-card>
        <q-card flat class="q-pa-lg" bordered>
          <img src="statics/slides/undraw_Savings_dwkw.svg" alt="" style="height:200px; max-width:200px">
          <q-card-section class="text-center text-primary text-weight-bolder text-h6">
            <div>Thrift</div> 
          </q-card-section>
        </q-card>
      
        <q-card flat class="q-pa-sm" bordered>
          <img src="statics/slides/undraw_transfer_money_rywa.svg" alt="" style="height:200px; max-width:300px">
          <q-card-section class="text-center text-primary text-weight-bolder text-h6">
            <div>Loan</div>
          </q-card-section>
          <q-card-section class="row q-gutter-sm">
            <div class="column q-gutter-sm">
              <q-btn no-caps flat class="q-pa-md bg-grey-3" color="grey-3" text-color="primary" label="Request Loan" />
              <q-btn no-caps flat class="q-pa-md bg-grey-3" color="grey-3" text-color="primary" label="Repay Loan" />
              
            </div>
            <q-btn no-caps flat class="q-pa-md bg-grey-3" icon="money" color="white" text-color="primary">Loan History</q-btn>
            
          </q-card-section>
        </q-card>
        <q-card flat class="q-pa-lg" bordered>
          <img src="statics/slides/undraw_services_5tv9.svg" alt="" style="height:200px; max-width:200px">
          <q-card-section class="text-center text-primary text-weight-bolder text-h6">
            <div>Services</div>  
          </q-card-section>
        </q-card>
        
         <q-card flat class="q-pa-lg" bordered>
          <img src="statics/slides/undraw_Hello_qnas.svg" alt="" style="height:200px; max-width:200px">
          <q-card-section class="text-center text-primary text-weight-bolder text-h6">
            <div>Support</div>  
          </q-card-section>
        </q-card>
        
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
