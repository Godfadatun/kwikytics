<template>
  <div>
    <q-dialog v-model="alert">
      <q-card class="my-card">
        <q-btn flat no-caps class="text-weight-bolder text-h6 text-black" :to="{name: 'index'}">Kwik<span class="text-primary">ytics</span></q-btn>
        <q-card-section>
            <q-card bordered class="my-card">
                <q-card-section>
                    test card
                </q-card-section>
                <q-separator />
                <q-separator />
                <q-card-section>
                    <div class="text-bold">Disclaimer</div>
                    <div class="text-caption">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</div>
                </q-card-section>
            </q-card>
        </q-card-section>
      </q-card>
    </q-dialog>
      
    
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {}
  }
}
</script>
