<template>
  <div>
    <q-card flat v-if="individual"  class="row justify-center q-my-sm q-gutter-sm" >
      <q-card-section class="no-padding"   >
        <q-tab-panels
          v-model="date"
          animated
          transition-prev="jump-up"
          transition-next="jump-up"
          v-for="(item, index) in events[0]" :key="index"
        >

          <q-tab-panel :name="item">
            <div class="text-h4 q-mb-md">{{theName}}</div>
            <div class="text-caption q-mb-md">{{date}}</div>
            <q-item>
              <q-item-section avatar>
                <div>Paid:</div>
              </q-item-section>
              <q-space />
              <q-item-section side >
                <div>₦10,000</div>
              </q-item-section>
            </q-item>

          </q-tab-panel>
        </q-tab-panels>
      </q-card-section>
      <q-card-section class=""  >
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
            <q-btn dense round flat :icon="props.expand ? 'arrow_drop_up' : 'arrow_drop_down'" @click="()=>{props.expand = !props.expand; individual = props.expand; theName = props.row.DebtorsName; notVisited(); }" />
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
        { name: 'AgentsName', label: 'Agents Name', field: 'AgentsName', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }

      ],
      data: [
        { DebtorsName: 'John Doe', Amount: '200,000', AmountPaid: '100,000', Duration: '2 Months', Daysleft: '20 Days', Loan_type: '20% interest Loan', Phone: '08033114572', Address: '8 Address Street', email: 'one@one.com', AgentsName:'James John' },
        { name: 'Ice cream sandwich', DebtorsName: 'User Vonny', Amount: '2,000,000', AmountPaid: '100,000', Duration: '2 Months', Loan_type: '40% interest Loan', Phone: '08033114572', Address: '8 Address Street', email: 'one@one.com', AgentsName:'James John' },
        // { name: 'Eclair', RequestersName: 262, Amount: 16.0, Duration: 23, Loan_type: 6.0, Phone: 337, Address: '6%', email: '7%' },
        // { name: 'Cupcake', RequestersName: 305, Amount: 3.7, Duration: 67, Loan_type: 4.3, Phone: 413, Address: '3%', email: '8%' },
        // { name: 'Gingerbread', RequestersName: 356, Amount: 16.0, Duration: 49, Loan_type: 3.9, Phone: 327, Address: '7%', email: '16%' },
        // { name: 'Jelly bean', RequestersName: 375, Amount: 0.0, Duration: 94, Loan_type: 0.0, Phone: 50, Address: '0%', email: '0%' },
        // { name: 'Lollipop', RequestersName: 392, Amount: 0.2, Duration: 98, Loan_type: 0, Phone: 38, Address: '0%', email: '2%' },
        // { name: 'Honeycomb', RequestersName: 408, Amount: 3.2, Duration: 87, Loan_type: 6.5, Phone: 562, Address: '0%', email: '45%' },
        // { name: 'Donut', RequestersName: 452, Amount: 25.0, Duration: 51, Loan_type: 4.9, Phone: 326, Address: '2%', email: '22%' },
        // { name: 'KitKat', RequestersName: 518, Amount: 26.0, Duration: 65, Loan_type: 7, Phone: 54, Address: '12%', email: '6%' }
      ]
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



