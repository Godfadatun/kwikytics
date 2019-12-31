<template>
  <div>
    <q-card flat class="my-card row bg-primary flex-center q-gutter-sm q-pa-md">

        <div v-for="(item, index) in items" :key="index">
          <q-separator vertical color="black" />
          <q-card class="text-center q-px-lg">
            <q-card-section>
              <div class="text-h6 text-weight-light">{{item.name}}</div>
            </q-card-section>
            <q-card-section>
              <div :class="'text-bold text-h4 text-'+item.color">₦{{item.amount}}</div>
            </q-card-section>
          </q-card>
        </div>
    </q-card>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {
      items: [
        {name: 'Total Debt', amount: '200,000', color: 'red'},
        {name: 'Expected Pay Out', amount: '200,000', color: 'primary'},
        {name: 'Paid Debt', amount: '200,000', color: 'orange-8'},
        {name: 'Balance', amount: '200,000', color: 'green'}
      ]
    }
  }
}
</script>
