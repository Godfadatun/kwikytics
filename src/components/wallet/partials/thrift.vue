<template>
  <div>
    <q-card class="text-center q-mx-xs">
      <q-card-section class="bg-green text-white ">
        <div class="text-bold">Baba Ijebu</div>
        <div class="text-caption">7th December, 2019</div>
      </q-card-section>
      <q-card-section class="flex flex-center q-pb-none">
        <div class="text-primary text-h4 text-bold q-py-lg">₦500</div>
      </q-card-section>
      <q-separator />
      <q-card-actions align="center">
        <q-btn color="primary" outline no-caps label="Pay Now" @click="$emit('dash', true)" />
        <q-btn color="primary" outline no-caps label="Request Agent" />
      </q-card-actions>
    </q-card>
    
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {
      thriftData:{
        name: 'Baba Ijebu',
        dueDate:'17th December, 2019',
        Amount:'₦500'
      }
    }
  }
}
</script>
