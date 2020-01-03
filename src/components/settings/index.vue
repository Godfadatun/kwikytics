

<template>
<div>
   <q-card square flat bordered class="column flex-center bg-blue-grey-1">

    <q-card-section class="column flex-center q-pt-xl">
      <div class="text-h5 text-grey-9" style="font-weight:600">{{name}}</div>
      <div class="text-subtitle text-weight-light q-pt-xs">{{subName}}</div>
    </q-card-section>

    <q-card-section>
      <q-stepper flat v-model="step" ref="stepper" contracted color="primary" class="bg-blue-grey-1" style="max-width: 800px;" >
        <q-step :name="1" icon="check" :done="step > 1" :header-nav="step > 1" style="border:blue" >
            <step1 />
            <q-stepper-navigation class="flex flex-center">
            <q-btn class="q-px-lg q-py-sm" @click="() => { done1 = true; step = 3; name = 'Style your App'; subName = 'Pick your Color and images'}" color="primary" no-caps label="Continue" />
            </q-stepper-navigation>
        </q-step>

        <q-step :name="3" icon="none" :done="step > 3" :header-nav="step > 3" >
            <step2 />
            <q-stepper-navigation class="flex flex-center">
              <q-btn no-caps flat @click="() => {step = 1; name = 'Upload Documents'}" icon="ion-ios-arrow-round-back" color="black" label="Go Back" class="q-ml-sm" />
              <q-btn class="q-px-lg q-py-sm" @click="() => { done3 = true; step = 4; name = 'Confirmation'; subName = 'We are pleased to confirm your loan application.' }" color="primary" no-caps label="Continue" />
            </q-stepper-navigation>
        </q-step>
        <q-step :name="4" icon="none" :header-nav="step > 4">
            <step4 />
            <q-stepper-navigation class="flex flex-center">
              <q-btn  color="primary" no-caps @click="() => {done4 = true; update_tab()}" label="Go to your Account" :to="{name: 'account'}"/>
            </q-stepper-navigation>
        </q-step>

    </q-stepper>
    </q-card-section>


  </q-card>
</div>

</template>

<script>
import step1 from './partials/step1'
import step2 from './partials/step2'
import step4 from './partials/step4'
export default {
  // name: 'ComponentName',
  components:{
    step1, step2, step4
  },
  data () {
    return {
      name: 'Your Companies Bio',
      subName:'Complete the form below to Customize your App',
      step: 1,
      done1: false,
      done2: false,
      done3: false,
      done4: false,
    }
  },
  methods: {
      update_tab(){
          this.$emit('tab_changer', 'dashboard')
      }
  },
   computed: {
      route: function(){return this.$route.name}
  },
}
</script>

<style>
</style>
