<template>
  <div>
    <q-card class="">
      <q-card-section class="q-py-none">
        <q-item class="q-py-none">
          <q-item-section>
            <div class="text-bold">Baba Ijebu</div>
            <div class="text-caption">7th December, 2019</div>
          </q-item-section>
          <q-item-section side top>
            <div class="text-primary text-h4 text-bold q-py-lg">₦500</div>
          </q-item-section>
        </q-item>
        
        
      </q-card-section>
      <q-card-section  class="flex flex-center q-gutter-sm">
        <q-btn color="red" class="q-px-md" no-caps label="Card Payment" @click="()=>{dash = true; thrift = false; save = false}" />
        <q-btn color="primary" class="q-px-xl" no-caps label="Pay from Savings" @click="()=>{thrift = false; dash = false; save = true}" />
        <q-btn color="green" class="q-px-xl" no-caps label="Pay from Thrift" @click="()=>{dash = false; save = false; thrift = true}" />
      </q-card-section>
      <q-card-section>
         <creditCard v-if="dash == true" class="q-mt-md" @dasher="$emit('dasher', false)" />
         <Savings v-if="save == true" @dasher="$emit('dasher', false)" />
         <payment v-if="thrift == true" @dasher="$emit('dasher', false)"/>
      </q-card-section>
    </q-card>
    
  </div>
</template>

<script>
import creditCard from 'components/common/creditCard'
import Savings from 'components/common/Savings'
import payment from './payment'
export default {
  // name: 'ComponentName',
  components:{
    creditCard, Savings, payment
  },
  data () {
    return {
      dash: false,
      save: false,
      thrift: false,
    }
  }
}
</script>
