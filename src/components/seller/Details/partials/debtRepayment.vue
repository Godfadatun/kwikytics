<template>
  <div>
    <q-card flat v-if="individual"  class="row justify-center q-my-sm " >
      <q-card-section class="no-padding" style="min-width:300px"  >
        <q-card class="full-height">
          <q-tab-panels
            v-model="date"
            animated
            transition-prev="jump-up"
            transition-next="jump-up"
            v-for="(item, index) in events[0]" :key="index"
          >

            <q-tab-panel :name="item">
              <div class="bg-primary q-pa-sm text-white">
                <div class="text-h4 q-mb-md">{{theName[0]}} </div>
                <div class="text-caption q-mb-md">{{date}}<q-space /> Total Paid: {{theName[1]}}</div>
              </div>
              <div >
                <q-item class="q-px-none">
                  <q-item-section avatar>
                    <div>Todays Pay:</div>
                  </q-item-section>
                  <q-space />
                  <q-item-section side >
                    <div>₦{{val.paid}}</div>
                  </q-item-section>
                </q-item>
                <q-separator />
                <q-item class="q-px-none">
                  <q-item-section avatar>
                    <div>Outstanding:</div>
                  </q-item-section>
                  <q-space />
                  <q-item-section side >
                    <div>₦{{val.Outstanding}}/{{val.Total}}</div>
                  </q-item-section>
                </q-item>
                <q-separator />
                <q-item class="q-px-none">
                  <q-item-section avatar>
                    <div>Revisit:</div>
                  </q-item-section>
                  <q-space />
                  <q-item-section side >
                    <div>{{val.revisit}}/{{val.days}}</div>
                  </q-item-section>
                </q-item>
                <q-separator />
                <q-item class="q-px-none">
                  <q-item-section avatar>
                    <div>Visited:</div>
                  </q-item-section>
                  <q-space />
                  <q-item-section side >
                    <div>{{val.visited}}/{{val.days}}</div>
                  </q-item-section>
                </q-item>
              </div>
            </q-tab-panel>
          </q-tab-panels>
        </q-card>


      </q-card-section>
      <q-card-section class="no-padding"  >
        <div>
          <q-date
            v-model="date"
            :events="events[0]"
            event-color="teal"
            :options="visited"
          />
        </div>
      </q-card-section>
    </q-card>

    <q-table
      :dense="$q.screen.lt.md"
      :data="data"
      :columns="columns"
      row-key="name"

    >

      <template v-slot:body="props">
        <!-- Monthly Row -->
        <q-tr :props="props">
          <q-td key="desc" :props="props">
            {{ props.row.DebtorsName }}
            <q-btn dense round flat :icon="props.expand ? 'arrow_drop_up' : 'arrow_drop_down'" @click="()=>{props.expand = !props.expand; individual = props.expand; theName = [props.row.DebtorsName, props.row.AmountPaid ]; notVisited(); }" />
          </q-td>
          <q-td key="Amount" :props="props">{{ props.row.Amount }}</q-td>
          <q-td key="AmountPaid" :props="props">{{ props.row.AmountPaid }}</q-td>
          <q-td key="Duration" :props="props">{{ props.row.Duration }}</q-td>
          <q-td key="Daysleft" :props="props">{{ props.row.Daysleft }}</q-td>
          <q-td key="Loan_type" :props="props">{{ props.row.Loan_type }}</q-td>
          <q-td key="Phone" :props="props">{{ props.row.Phone }}</q-td>
          <q-td key="Address" :props="props">{{ props.row.Address }}</q-td>
          <q-td key="email" :props="props">{{ props.row.email }}</q-td>
          <q-td key="AgentsName" :props="props">{{ props.row.AgentsName }}</q-td>
        </q-tr>
      </template>

    </q-table>

  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {
      date: new Date().getFullYear() + '/0' + (new Date().getMonth() + 1)+ '/0' + new Date().getDate(),
      events: [ ['2020/01/01', '2020/01/05', '2020/01/06', '2020/01/03', '2020/01/11', '2020/01/16'],[true, false, true, false, false, true] ],
      individual: false,
      theName: '',
      visited: ['2020/01/01', '2020/01/02', '2020/01/03', '2020/01/04', '2020/01/05','2020/01/06', '2020/01/07', '2020/01/08', '2020/01/09', '2020/01/10','2020/01/11', '2020/01/12', '2020/01/13', '2020/01/14', '2020/01/15'],
      columns: [
        { name: 'desc', required: true, label: 'Debtors Name', align: 'left', field: row => row.DebtorsName, format: val => `${val}`, sortable: true },
        // { name: 'RequestersName', align: 'center', label: 'Requesters Name', field: 'RequestersName', sortable: true },
        { name: 'Amount', label: 'Amount', field: 'Amount', sortable: true, style: 'width: 10px' },
        { name: 'AmountPaid', label: 'Amount Paid', field: 'AmountPaid', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
        { name: 'Duration', label: 'Duration', field: 'Duration', sortable: true  },
        { name: 'Daysleft', label: 'Days Left', field: 'Daysleft', sortable: true  },
        { name: 'Loan_type', label: 'Loan type', field: 'Loan_type' },
        { name: 'Phone', label: 'Phone', field: 'Phone' },
        { name: 'Address', label: 'Address', field: 'Address', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
        { name: 'email', label: 'email', field: 'email', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
        { name: 'AgentsName', label: 'Account Officer', field: 'AgentsName', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }

      ],
      data: [
        { DebtorsName: 'John Doe', Amount: '200,000', AmountPaid: '100,000', Duration: '2 Months', Daysleft: '20 Days', Loan_type: '20% interest Loan', Phone: '08033114572', Address: '8 Address Street', email: 'one@one.com', AgentsName:'James John' },
        { name: 'Ice cream sandwich', DebtorsName: 'User Vonny', Amount: '2,000,000', AmountPaid: '100,000', Duration: '2 Months', Loan_type: '40% interest Loan', Phone: '08033114572', Address: '8 Address Street', email: 'one@one.com', AgentsName:'James John' },
      ],
      val: {paid: 1500, Outstanding: 1000, revisit: 2, visited: 5, days: 15, Total: 3500,}
    }
  },
  mounted() {
    consol.log(notVisited())
  },
  methods: {
    // visited(date){
    //   return date >= '2020/01/01' && date <= '2020/01/15'
    // },
    notVisited(){
      return this.visited.filter((x) => !this.events[0].includes(x))
    }
  },

}
</script>



