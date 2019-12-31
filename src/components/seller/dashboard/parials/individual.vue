<template>
  <div class="q-gutter-sm">
    <q-card class="row bg-primary full-width" dark>
      <q-card-section>
        <q-avatar >
          <img src="https://cdn.quasar.dev/img/boy-avatar.png" alt="">
        </q-avatar>
      </q-card-section>
      <q-card-section class="flex flex-center">
        <div class="text-bold text-h6">John Doe</div>
      </q-card-section>
      <q-space />
      <q-card-section class="flex flex-center">
        <div class="text-bold text-h6">₦200,000</div>
      </q-card-section>
    </q-card>

    <div class="flex flex-center">
      <q-card square class="" style="max-width:810px; min-width: 300px">
        <q-list separator class="rounded-borders">
          <q-expansion-item v-for="(val, index) in data" :key="index"
            :label="'Week '+val.week"
            :caption="'Paid: ₦'+val.paid+'/'+ val.Total"
            style="min-width: 300px"
            default-opened
          >

            <div class="row flex-center">
              <div v-for="(item, index) in val.items" :key="index" >
                <q-card square bordered flat class="text-center">
                  <q-card-section>
                    <div v-if="item.paid == true" class="column text-caption flex-center">Paid<q-icon size="sm" name="check" color="green" /></div>
                    <div v-if="item.unpaid == true" class="column text-caption flex-center">Unpaid<q-icon size="sm" name="close" color="red" /></div>
                    <div v-if="item.uncontacted == true" class="column text-caption flex-center">Uncontacted<q-icon size="sm" name="ion-ios-radio-button-on" /></div>
                  </q-card-section>
                  <q-card-section>
                    <div class="text-caption">{{item.date}}</div>
                  </q-card-section>
                </q-card>
              </div>
            </div>
            <q-card class="row">
              <q-card-section class="col-xs-12 col-sm-12 row">
                <div class="text-bold">Paid:</div> <q-space /><div> ₦{{val.paid}}/{{val.Total}}</div>
              </q-card-section>

              <q-card-section class="col-xs-12 col-sm-12 row">
                <div class="text-bold">Outstanding:</div> <q-space /><div> ₦{{val.Outstanding}}</div>
              </q-card-section>
              <q-card-section class="col-xs-12 col-sm-12 row">
                <div class="text-bold">Visited:</div> <q-space /><div> {{val.visited}}/{{val.days}}</div>
              </q-card-section>
              <q-card-section class="col-xs-12 col-sm-12 row">
                <div class="text-bold">Revisit:</div> <q-space /><div> {{val.revisit}}</div>
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-list>
      </q-card>
    </div>


  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {
      data:[
        {
          week: 4, paid: 1500, Outstanding: 1000, revisit: 2, visited: 5, days: 7, Total: 3500,
          items: [
            {date:'12/11/2020', paid: true, unpaid: false, uncontacted: false},
            {date:'12/11/2020', paid: false, unpaid: false, uncontacted: true},
            {date:'12/11/2020', paid: false, unpaid: false, uncontacted: true},
            {date:'12/11/2020', paid: true, unpaid: false, uncontacted: false},
            {date:'12/11/2020', paid: false, unpaid: true, uncontacted: false},
            {date:'12/11/2020', paid: true, unpaid: false, uncontacted: false},
            {date:'12/11/2020', paid: false, unpaid: true, uncontacted: false},
          ]
        },
        {
          week: 3, paid: 1500, Outstanding: 1000, revisit: 2, visited: 5, days: 7, Total: 3500,
          items: [
            {date:'12/11/2020', paid: true, unpaid: false, uncontacted: false},
            {date:'12/11/2020', paid: false, unpaid: false, uncontacted: true},
            {date:'12/11/2020', paid: false, unpaid: false, uncontacted: true},
            {date:'12/11/2020', paid: true, unpaid: false, uncontacted: false},
            {date:'12/11/2020', paid: false, unpaid: true, uncontacted: false},
            {date:'12/11/2020', paid: true, unpaid: false, uncontacted: false},
            {date:'12/11/2020', paid: false, unpaid: true, uncontacted: false},
          ]
        },
        {
          week: 2, paid: 1500, Outstanding: 1000, revisit: 2, visited: 5, days: 7, Total: 3500,
          items: [
            {date:'12/11/2020', paid: true, unpaid: false, uncontacted: false},
            {date:'12/11/2020', paid: false, unpaid: false, uncontacted: true},
            {date:'12/11/2020', paid: false, unpaid: false, uncontacted: true},
            {date:'12/11/2020', paid: true, unpaid: false, uncontacted: false},
            {date:'12/11/2020', paid: false, unpaid: true, uncontacted: false},
            {date:'12/11/2020', paid: true, unpaid: false, uncontacted: false},
            {date:'12/11/2020', paid: false, unpaid: true, uncontacted: false},
          ]
        },
        {
          week: 1, paid: 1500, Outstanding: 1000, revisit: 2, visited: 5, days: 7, Total: 3500,
          items: [
            {date:'12/11/2020', paid: true, unpaid: false, uncontacted: false},
            {date:'12/11/2020', paid: false, unpaid: false, uncontacted: true},
            {date:'12/11/2020', paid: false, unpaid: false, uncontacted: true},
            {date:'12/11/2020', paid: true, unpaid: false, uncontacted: false},
            {date:'12/11/2020', paid: false, unpaid: true, uncontacted: false},
            {date:'12/11/2020', paid: true, unpaid: false, uncontacted: false},
            {date:'12/11/2020', paid: false, unpaid: true, uncontacted: false},
          ]
        }

      ]

    }
  }
}
</script>
