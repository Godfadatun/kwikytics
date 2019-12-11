<template>
  <div class="flex flex-center">
    <q-card bordered flat class="text-center" style="min-width:300px">
      <q-card-section class="q-mt-sm">
        <q-btn-dropdown color="primary" label="Dropdown Button">
          <q-list>
            <q-item clickable v-close-popup>
              
              <q-item-section avatar >
                <q-icon color="primary" name="ion-card" />
              </q-item-section>
              <q-item-section>
                <q-item-label> 
                  1### #### #### 8476</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section avatar >
                <q-icon color="primary" name="ion-card" />
              </q-item-section>
              <q-item-section>
                <q-item-label>1### #### #### 8476</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section avatar >
                <q-icon color="primary" name="ion-card" />
              </q-item-section>
              <q-item-section>
                <q-item-label>1### #### #### 8476</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        
      </q-card-section>
      <q-separator />
      <q-card-section class="column flex-center q-pb-none">
        <q-input v-model="CNumtext" type="text" label="Card Number" />
        <q-input v-model="CNametext" type="text" label="Card Name" />
        <q-input v-model="CCvvtext" type="text" label="CVV" />
        <q-input v-model="CMonthtext" type="text" label="MM / YY" />
        <q-input v-model="CPintext" type="text" label="PIN" />
      </q-card-section>
      
      <q-card-actions align="center">
        <q-btn color="primary" class="full-width" outline no-caps label="Done" @click="$emit('dasher', true)" />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {
      CNumtext : '',
      CNametext : '',
      CCvvtext : '',
      CMonthtext : '',
      CPintext : '',
    }
  }
}
</script>
