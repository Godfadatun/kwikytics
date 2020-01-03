<template>
  <div>

    <div class="row q-py-sm q-px-sm">
      <div class="text-h6 text-weight-light text-bold  ">Incoming Loan Requests</div>
      <q-space />
      <q-btn class="q-px-md" color="primary" size="sm" dense no-caps label="Details" :to="{name: 'loanRequests', params: {item:'Incoming Loan Requests'}}" />
    </div>

    <div class="row flex-center q-gutter-sm q-pa-sm">
      <div v-for="(item, index) in items" :key="index">
        <q-card flat bordered class="text-center" style="min-width: 300px">
          <q-card-section>
            <div class="text-grey-7 text-bold text-h5">₦{{item.total}}</div>
          </q-card-section>
          <q-card-section>
            <div class="text-caption">{{item.name}}</div>
          </q-card-section>
        </q-card>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {
      items: [
        {name: 'Todays Requests', total:'120,000'},
        {name: 'This Weeks Request', total:'120,000'},
        {name: 'This Months Requests', total:'120,000'},
      ]
    }
  }
}
</script>
