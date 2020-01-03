<template>
  <div>
    <q-card class="row">
      <q-card-section class="bg-primary col-md-3 col-sm-12 col-xs-12 text-white">
        <div class="absolute-top-left ">
          <q-btn class="q-pt-sm" dense size="" icon="ion-ios-arrow-round-back" flat no-caps :to="{name: 'analytics'}" />
        </div>

        <div class="text-h6 q-pa-xl text-center absolute-center gt-sm">{{item}}</div>
        <div class="text-h6 q-pa-xl text-center lt-md">{{item}}</div>

        <div class="absolute-top-right q-pl-lg">
          <div class="q-pa-sm text-bold">{{new Date().getDate()}} - {{(new Date().getMonth()) + 1}} - {{new Date().getFullYear()}}</div>
        </div>

        <div class="absolute-bottom flex flex-center">

          <q-btn-group flat>
            <q-btn no-caps v-if="route != 'debtRepayment'" :to="{name: 'debtRepayment'}" label="Debt" @click="item = 'Debt Repayment'" />
            <q-btn no-caps v-if="route != 'loanRequests'" :to="{name: 'loanRequests'}" label="Loan Req" @click="item = 'Incoming Loan Requests'" />
            <q-btn no-caps v-if="route != 'thriftDeposits'" :to="{name: 'thriftDeposits'}" label="Thrift Deposits" @click="item = 'Thrift Deposits'"  />
          </q-btn-group>
        </div>

      </q-card-section>
      <q-card-section v-if="route != 'debtRepayment'" class="flex flex-center col-md-9 col-sm-12 col-xs-12">

        <div class="text-subtitle1 text-weight-light">This Month</div>
        <q-linear-progress rounded stripe :value="progressMonth" size="20px" color="primary" class="q-mt-sm" >
          <div class="absolute-full flex flex-center">
            <q-badge color="white" text-color="primary" :label="'₦'+month+'/'+total" />
          </div>
        </q-linear-progress>

        <div class="text-subtitle1 text-weight-light">This Week</div>
        <q-linear-progress rounded stripe :value="progressWeek" size="20px" color="primary" class="q-mt-sm" >
          <div class="absolute-full flex flex-center">
            <q-badge color="white" text-color="primary" :label="'₦'+week+'/'+total" />
          </div>
        </q-linear-progress>

        <div class="text-subtitle1 text-weight-light">Today</div>
        <q-linear-progress rounded stripe :value="progressToday" size="20px" color="primary" class="q-mt-sm" >
          <div class="absolute-full flex flex-center">
            <q-badge color="white" text-color="primary" :label="'₦'+today+'/'+total" />
          </div>
        </q-linear-progress>

      </q-card-section>

      <!-- debtRepayment -->
      <q-card-section v-if="route == 'debtRepayment'" class="col-md-9 col-sm-12 col-xs-12">

        <div class="text-subtitle1 text-weight-light text-center">This Month</div>
        <q-item class="no-padding">
          <q-item-section avatar>
            <div class="text-caption">Missed Payments</div>
            <div class="text-caption">Expected Payment</div>
            <div class="text-caption">Paid Debt</div>
          </q-item-section>
          <q-item-section>
            <q-linear-progress  rounded stripe :value="progressMonth" size="15px" color="primary" class="q-my-xs" >
                <div class="text-black text-center lt-md" style="font-size:11px">{{'₦'+month+'/'+total }}</div>
            </q-linear-progress>

            <q-linear-progress  rounded stripe :value="progressMonth" size="15px" color="primary" class="q-my-xs" >
                <div class="text-black text-center lt-md" style="font-size:11px">{{'₦'+month+'/'+total }}</div>
            </q-linear-progress>
            <q-linear-progress  rounded stripe :value="progressMonth" size="15px" color="primary" class="q-my-xs" >
                <div class="text-black text-center lt-md" style="font-size:11px">{{'₦'+month+'/'+total }}</div>
            </q-linear-progress>
          </q-item-section>
          <q-item-section side class="gt-sm">
            <div class="text-caption">{{'₦'+month+'/'+total}}</div>
            <div class="text-caption">{{'₦'+month+'/'+total}}</div>
            <div class="text-caption">{{'₦'+month+'/'+total}}</div>
          </q-item-section>
        </q-item>

        <div class="text-subtitle1 text-weight-light text-center">This Week</div>
        <q-item class="no-padding">
          <q-item-section avatar>
            <div class="text-caption">Missed Payments</div>
            <div class="text-caption">Expected Payment</div>
            <div class="text-caption">Paid Debt</div>
          </q-item-section>
          <q-item-section>
            <q-linear-progress  rounded stripe :value="progressMonth" size="15px" color="primary" class="q-my-xs" >
                <div class="text-black text-center lt-md" style="font-size:11px">{{'₦'+week+'/'+total }}</div>
            </q-linear-progress>

            <q-linear-progress  rounded stripe :value="progressMonth" size="15px" color="primary" class="q-my-xs" >
                <div class="text-black text-center lt-md" style="font-size:11px">{{'₦'+week+'/'+total }}</div>
            </q-linear-progress>
            <q-linear-progress  rounded stripe :value="progressMonth" size="15px" color="primary" class="q-my-xs" >
                <div class="text-black text-center lt-md" style="font-size:11px">{{'₦'+week+'/'+total }}</div>
            </q-linear-progress>
          </q-item-section>
          <q-item-section side class="gt-sm">
            <div class="text-caption">{{'₦'+week+'/'+total}}</div>
            <div class="text-caption">{{'₦'+week+'/'+total}}</div>
            <div class="text-caption">{{'₦'+week+'/'+total}}</div>
          </q-item-section>
        </q-item>

        <div class="text-subtitle1 text-weight-light text-center">Today</div>
        <q-item class="no-padding">
          <q-item-section avatar>
            <div class="text-caption">Missed Payments</div>
            <div class="text-caption">Expected Payment</div>
            <div class="text-caption">Paid Debt</div>
          </q-item-section>
          <q-item-section>
            <q-linear-progress  rounded stripe :value="progressMonth" size="15px" color="primary" class="q-my-xs" >
                <div class="text-black text-center lt-md" style="font-size:11px">{{'₦'+today+'/'+total }}</div>
            </q-linear-progress>

            <q-linear-progress  rounded stripe :value="progressMonth" size="15px" color="primary" class="q-my-xs" >
                <div class="text-black text-center lt-md" style="font-size:11px">{{'₦'+today+'/'+total }}</div>
            </q-linear-progress>
            <q-linear-progress  rounded stripe :value="progressMonth" size="15px" color="primary" class="q-my-xs" >
                <div class="text-black text-center lt-md" style="font-size:11px">{{'₦'+today+'/'+total }}</div>
            </q-linear-progress>
          </q-item-section>
          <q-item-section side class="gt-sm">
            <div class="text-caption">{{'₦'+today+'/'+total}}</div>
            <div class="text-caption">{{'₦'+today+'/'+total}}</div>
            <div class="text-caption">{{'₦'+today+'/'+total}}</div>
          </q-item-section>
        </q-item>


      </q-card-section>
    </q-card>
    <debtRepayment  v-if="route == 'debtRepayment'"/>
    <loanRequests  v-if="route == 'loanRequests'"/>
    <thriftDeposits  v-if="route == 'thriftDeposits'"/>
  </div>
</template>

<script>
import debtRepayment from './partials/debtRepayment'
import loanRequests from './partials/loanRequests'
import thriftDeposits from './partials/thriftDeposits'
export default {
  // name: 'ComponentName',
  props:['item'],
  components:{
    debtRepayment, loanRequests, thriftDeposits
  },

  data () {
    return {
      progressMonth :  0.2,
      progressWeek :  0.5,
      progressToday :  0.8,

      today: '5,000',
      week: '15,000',
      month: '15,000',
      total: '120,000'
    }
  },
  computed: {
    route(){ return this.$route.name },
    progressLabel() {return (this.progress * 100)+'%'}
  },
}
</script>
