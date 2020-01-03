<template>
  <div>
     <q-table
      :dense="$q.screen.lt.md"
      :data="data"
      :columns="columns"
      row-key="name"

    >

      <template v-slot:body="props">
        <!-- Monthly Row -->
        <q-tr :props="props" >
          <q-td key="desc" :props="props">
            {{ props.row.RequestersName }}
            <q-btn dense round flat :icon="props.expand ? 'arrow_drop_up' : 'arrow_drop_down'" @click="props.expand = !props.expand" />
          </q-td>
          <q-td key="Amount" :props="props">{{ props.row.Amount }}</q-td>
          <q-td key="Duration" :props="props">{{ props.row.Duration }}</q-td>
          <q-td key="Loan_type" :props="props">{{ props.row.Loan_type }}</q-td>
          <q-td key="Phone" :props="props">{{ props.row.Phone }}</q-td>
          <q-td key="Address" :props="props">{{ props.row.Address }}</q-td>
          <q-td key="email" :props="props">{{ props.row.email }}</q-td>
        </q-tr>

         <!-- Daily Row -->
        <q-tr v-show="props.expand" :props="props">
          <q-td colspan="100%">
            <div class="text-left">
              <q-item>
                <q-item-section avatar>
                  <q-avatar size="50px">
                    <img src="https://cdn.quasar.dev/img/boy-avatar.png" alt="">
                  </q-avatar>

                </q-item-section>
                <q-item-section>
                  <q-item-label>Agent Joe</q-item-label>
                  <q-item-label caption lines="2">12345678</q-item-label>
                </q-item-section>
                <q-item-section side >
                  <q-icon name="check" color="green" />
                </q-item-section>
              </q-item>
            </div>
          </q-td>
        </q-tr>

        <!-- Weekly Row -->
        <q-tr v-show="props.expand" :props="props">
          <q-td colspan="100%" >
            <div class="flex flex-center q-gutter-sm text-white">
              <q-btn no-caps class="text-center bg-primary">Queue</q-btn>
              <q-btn no-caps class="text-center bg-green">Approve</q-btn>
              <q-btn no-caps class="text-center bg-red">Reject</q-btn>
            </div>

          </q-td>
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
      selected: [],
      columns: [
        { name: 'desc', required: true, label: 'Requesters Name', align: 'left', field: row => row.RequestersName, format: val => `${val}`, sortable: true },
        // { name: 'RequestersName', align: 'center', label: 'Requesters Name', field: 'RequestersName', sortable: true },
        { name: 'Amount', label: 'Amount', field: 'Amount', sortable: true, style: 'width: 10px' },
        { name: 'Duration', label: 'Duration', field: 'Duration', sortable: true  },
        { name: 'Loan_type', label: 'Loan type', field: 'Loan_type' },
        { name: 'Phone', label: 'Phone', field: 'Phone' },
        { name: 'Address', label: 'Address', field: 'Address', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
        { name: 'email', label: 'email', field: 'email', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
      ],
      data: [
        { name: 'Frozen Yogurt', RequestersName: 'John Doe', Amount: '200,000', Duration: '2 Months', Loan_type: '20% interest Loan', Phone: '08033114572', Address: '8 Address Street', email: 'one@one.com' },
        { name: 'Ice cream sandwich', RequestersName: 'User Vonny', Amount: '2,000,000', Duration: '2 Months', Loan_type: '40% interest Loan', Phone: '08033114572', Address: '8 Address Street', email: 'one@one.com' },
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
  }
}
</script>



