<template>
  <div>
    <dashboard v-if="dash == false" @dasher="dash = true"/>
    <payment v-if="dash == true" />
  </div>
</template>

<script>
import dashboard from './partials/dashboard'
import payment from 'components/common/payment' 
export default {
  // name: 'ComponentName',
  components:{
    dashboard, payment
  },
  data () {
    return {
      dash: false,
      loan: {total: 0}
    }
  }
}
</script>
