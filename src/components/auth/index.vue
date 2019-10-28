<template>
  <div>
    <login v-if="$route.name == 'login'"/>
    <register v-else-if="$route.name == 'register'" />
  </div>
</template>

<script>
import login from './partials/login'
import register from './partials/register'
export default {
  // name: 'PageName',
  components:{
    login, register
  },
  data () {
    return {}
  }
}
</script>
