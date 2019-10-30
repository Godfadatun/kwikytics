<template>
  <div class="column flex-center bg-grey-3">
    <div class="text-center">
      <div class="flex-center text-weight-bolder q-pt-lg text-h3 text-black">Welcome <span class="text-primary">John Doe</span></div>
    <div class="flex-center text-weight-light text-h6 text-primary">Where do you want to start?</div>
    </div>
    
    <q-card flat class="  bg-grey-3">
      <q-card-section class="row justify-center q-gutter-xl q-px-sm q-ma-none ">
        <q-card flat class="q-pa-sm q-ma-xs" bordered style="max-width:300px">
          <img src="statics/slides/undraw_credit_card_payment_yb88.svg" alt="" >
          <q-card-section class="text-center text-primary text-weight-bolder text-h6">
            <div>Transactions</div>
          </q-card-section>
          <q-card-section class="row q-gutter-sm q-px-xs">
            <div class="column q-gutter-sm col-xs-12 col-sm-12 col-md-6">
              <q-btn flat stack color="primary" no-caps  class="q-pa-xs bg-grey-3 text-left">
                <q-icon size="24px" name="ion-done-all" />
                <div class="q-px-sm">All</div>
              </q-btn>
              <q-btn flat stack color="primary" no-caps  class="q-pa-xs bg-grey-3 text-left">
                <q-icon size="24px" name="ion-ios-send" />
                <div class="q-px-sm">Sent</div>
              </q-btn>
              <q-btn flat stack color="primary" no-caps  class="q-pa-xs bg-grey-3 text-left">
                <q-icon size="24px" name="ion-download" />
                <div class="q-px-sm">Recieved</div>
              </q-btn>
            </div>
            <q-btn no-caps stack flat size="26px" class="q-pa-md bg-grey-3 col-xs-12 col-sm-12 col-md-5 " color="white" text-color="primary">
              <div class="text-h3">0</div>
              <div class="text-caption">Transaction</div>
            </q-btn>
          </q-card-section>
        </q-card>

        <q-card flat class="q-pa-sm q-ma-xs" bordered style="max-width:300px">
          <img src="statics/slides/undraw_Savings_dwkw.svg" alt="" >
          <q-card-section class="text-center text-primary text-weight-bolder text-h6">
            <div>Thrift</div> 
          </q-card-section>
          <q-card-section class="row q-gutter-sm q-px-xs">
            <div class="column q-gutter-sm col-xs-12 col-sm-12 col-md-6">
              <q-btn no-caps flat class="q-pa-md bg-grey-3" color="grey-3" text-color="primary" stack icon="ion-ios-wallet">Deposit History</q-btn>
              <q-btn no-caps flat class="q-pa-md bg-grey-3" color="grey-3" text-color="primary" stack icon="account_balance">Accounts</q-btn>
            </div>
            <q-btn no-caps flat class="q-pa-md bg-grey-3 col-xs-12 col-sm-12 col-md-5 text-h6" label="$1000" color="white" text-color="positive"><div class="text-primary text-caption">Incoming funds</div></q-btn>
          </q-card-section>
        </q-card>
      
        <q-card flat class="q-pa-sm q-ma-xs" bordered style="max-width:300px">
          <img src="statics/slides/undraw_transfer_money_rywa.svg" alt="" >
          <q-card-section class="text-center text-primary text-weight-bolder text-h6">
            <div>Loan</div>
          </q-card-section>
          <q-card-section class="row q-gutter-sm q-px-xs">
            <div class="column q-gutter-sm col-xs-12 col-sm-12 col-md-6">
              <q-btn no-caps flat class="q-pa-md bg-grey-3" color="grey-3" text-color="primary" label="Request Loan" />
              <q-btn no-caps flat class="q-pa-md bg-grey-3" color="grey-3" text-color="primary" label="Repay Loan" />
            </div>
            <q-btn no-caps flat class="q-pa-md bg-grey-3 col-xs-12 col-sm-12 col-md-5" icon="money" color="white" text-color="primary">Loan History</q-btn>
          </q-card-section>
        </q-card>

        <q-card flat class="q-pa-sm q-ma-xs" bordered style="max-width:300px">
          <img src="statics/slides/undraw_services_5tv9.svg" alt="" >
          <q-card-section class="text-center text-primary text-weight-bolder text-h6">
            <div>Services</div>  
          </q-card-section>
          <q-card-section class="row q-gutter-sm q-px-xs">
            <div class="column q-gutter-sm col-xs-12 col-sm-12 col-md-6">
              <q-btn no-caps flat class="q-pa-md bg-grey-3" color="grey-3" text-color="primary" label="Request Loan" />
              <q-btn no-caps flat class="q-pa-md bg-grey-3" color="grey-3" text-color="primary" label="Repay Loan" />
            </div>
            <q-btn no-caps flat class="q-pa-md bg-grey-3 col-xs-12 col-sm-12 col-md-5" icon="money" color="white" text-color="primary">Loan History</q-btn>
          </q-card-section>
        </q-card>
        
         <q-card flat class="q-pa-sm q-ma-xs" bordered style="max-width:300px">
          <img src="statics/slides/undraw_Hello_qnas.svg" alt="" >
          <q-card-section class="text-center text-primary text-weight-bolder text-h6">
            <div>Support</div>  
          </q-card-section>
          <q-card-section class="row q-gutter-sm q-px-xs">
            <div class="column q-gutter-sm col-xs-12 col-sm-12 col-md-6">
              <q-btn no-caps flat class="q-pa-md bg-grey-3" color="grey-3" text-color="primary" label="Request Loan" />
              <q-btn no-caps flat class="q-pa-md bg-grey-3" color="grey-3" text-color="primary" label="Repay Loan" />
            </div>
            <q-btn no-caps flat class="q-pa-md bg-grey-3 col-xs-12 col-sm-12 col-md-5" icon="money" color="white" text-color="primary">Loan History</q-btn>
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
