<template>
  <div>
    <q-card bordered flat class="text-center" style="min-width:300px">
      <q-btn class="absolute-top-right" flat color="negative" icon="ion-ios-close"  @click="$emit('dasher', true)" />
      <q-card-section class="q-mt-sm">
        <div class="text-primary text-h4 text-bold q-pt-md">₦50,000</div>
      </q-card-section>
      <q-card-section class="q-mt-sm">
        <q-btn-dropdown color="primary" label="Thrift Accounts">
          <q-list>
            <q-item clickable v-close-popup>
              
              <q-item-section avatar >
                <q-icon color="primary" name="ion-ios-cash" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Account 1</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section avatar >
                <q-icon color="primary" name="ion-ios-cash" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Account 2</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section avatar >
                <q-icon color="primary" name="ion-ios-cash" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Account 3</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        
      </q-card-section>
      <q-separator />
      <q-card-section>
        <q-input outlined maxlength="4" v-model="text" type="text" label="PIN" />
      </q-card-section>
      <q-card-section class="flex flex-center q-pb-sm q-gutter-sm">
        <q-btn color="green" class="full-width" no-caps label="Pay" @click="$emit('dasher', true)" />
      </q-card-section>

      <!-- <q-card-actions align="center">
      </q-card-actions> -->
    </q-card>
    
  </div>
</template>

<script>
import Card from './creditCard'
export default {
  // name: 'ComponentName',
  components:{
    Card
  },
  data () {
    return {
      text:''
    }
  }
}
</script>
