<template>
  <div>

    <q-card flat class="row q-pa-md text-primary bg-grey-2">
      <q-card-section class="flex flex-center col-md-4 col-xs-12 col-sm-12">
        <div class="text-h2 gt-sm text-bold">Our Rates</div>
        <div class="text-h4 lt-md text-bold">Our Rates</div>
      </q-card-section>
      <q-card class="flex flex-center q-gutter-sm col-md-6 col-xs-12 col-sm-12 bg-grey-2 text-primary">

          <price1 />
          <price2 />

      </q-card>
    </q-card>
  </div>
</template>

<script>
import price1 from './pricing'
import price2 from './pricing1'
export default {
  // name: 'ComponentName',
  components:{
    price1, price2
  },
  data () {
    return {}
  }
}
</script>
