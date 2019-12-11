<template>
  <div>
    <q-card class="my-card">
      <q-card-section class="q-gutter-sm">
        <q-input outlined v-model="SAmount" type="text" label="Amount" />
        <q-input outlined maxlength="4" v-model="SPin" type="text" label="PIN" />
      </q-card-section>
       <q-card-section class="flex flex-center q-pb-sm q-gutter-sm">
        <q-btn color="green" class="full-width" no-caps label="Pay" @click="$emit('dasher', true)" />
      </q-card-section>
    </q-card>
    
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {
      Spin:'',
      SAmount:'',
    }
  }
}
</script>
