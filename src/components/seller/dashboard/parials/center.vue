<template>
  <div>
    <q-card flat class="my-card">
      <q-card-section>
        <div class="text-h5 text-weight-light text-bold q-pl-sm q-py-sm text-center">Debt Repayment</div>
          <div class="row flex-center q-gutter-sm q-pa-sm">
            <div v-for="(item, index) in items" :key="index">
              <q-card flat class="text-center bg-blue-5" dark style="min-width: 300px">
                <q-card-section>
                  <div class="text-uppercase">{{item.name}}</div>
                </q-card-section>
                <q-separator color="white" style="height: 2px" />
                <q-card-section>
                  <div class="text-bold text-h5">₦{{item.data.missed.total}}</div>
                  <div class="">{{item.data.missed.name}}</div>
                </q-card-section>
                <q-card-section>
                  <div class="text-bold text-h5">₦{{item.data.expected.total}}</div>
                  <div class="">{{item.data.expected.name}}</div>
                </q-card-section>
                <q-card-section>
                  <div class="text-bold text-h5">₦{{item.data.paid.total}}</div>
                  <div class="">{{item.data.paid.name}}</div>
                </q-card-section>
              </q-card>
            </div>
          </div>
      </q-card-section>
      <q-card-actions align="center" >
        <q-btn class="q-px-xl" color="blue-5" outline no-caps label="Details" :to="{name: 'debtRepayment', params: {item:'Debt Repayment'}}"  />
      </q-card-actions>
    </q-card>



  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {
      items: [
        {data: {
          missed: { name: 'Missed Payments', total:'100,000' },
          expected:{ name: 'Expected Payment', total:'120,000' },
          paid:{ name: 'Paid Debt', total:'120,000' }
        }, name: 'today'},

        {data: {
          missed: { name: 'Missed Payment', total:'10,000' },
          expected:{ name: 'Expected Payments', total:'300,000' },
          paid:{ name: 'Paid Debt', total:'710,000' }
        }, name: 'This week'},
        {data: {
          missed: { name: 'Missed Payment', total:'1,200,000' },
          expected:{ name: 'Expected Payments', total:'1,400,000' },
          paid:{ name: 'Paid Debt', total:'120,000' }
        }, name: 'This Month'},
      ]
    }
  }
}
</script>
