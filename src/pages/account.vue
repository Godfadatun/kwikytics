<template>
  <q-page class="bg-grey-3 q-pr-none">
    <!-- content -->
    <myLayout >
      <buyer slot="LayoutContent"/>
    </myLayout>
  </q-page>
</template>

<script>
import myLayout from '../components/home/partials/layout'
import buyer from '../components/buyer/index'
export default {
  // name: 'PageName',
  components:{
    myLayout, buyer
  }
}
</script>
