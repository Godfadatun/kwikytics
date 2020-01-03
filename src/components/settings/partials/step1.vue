<template>
  <div>
    <q-card flat class="q-pa-md flex justify-center q-gutter-x-sm">
      <q-card-section class="q-gutter-xs q-ma-none no-padding text-caption text-primary text-bold">
        <div>Company Name</div>
        <q-input outlined v-model="form.cName" type="text" dense label="Company name" />
        <div>Company Address</div>
        <q-input outlined v-model="form.cAddress" type="text" dense label="Company Address" />
        <div>Company Phone</div>
        <q-input outlined v-model="form.cPhone" type="text" dense label="Company Phone" />

      </q-card-section>
      <q-card-section class="q-gutter-sm no-padding  text-caption text-primary text-bold">
        <div>Company Email</div>
        <q-input outlined v-model="form.cEmail" type="text" dense label="Company Email" />
        <div>Company Description</div>
        <q-input outlined v-model="form.cDescription" type="textarea" dense label="Company Description" />
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {
      loading: false,
      slide: 1,
      form:{
        cName : '',
        cAddress : '',
        cPhone : '',
        cEmail : '',
        cDescription : '',
      },
      errors_list: null
    }
  }
}
</script>
