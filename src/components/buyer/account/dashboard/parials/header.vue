<template>
  <div>
    <q-toolbar class="bg-blue">
     
        <q-toolbar-title class="q-py-sm">
          <div class="text-white">
            <q-btn flat no-caps class="text-caption text-weight-bolder text-white" :to="{name: 'index'}">All</q-btn>
            <q-btn flat no-caps class="text-caption text-weight-bolder text-white" :to="{name: 'index'}">Recieved</q-btn>
            <q-btn flat no-caps class="text-caption text-weight-bolder text-white" :to="{name: 'index'}">Sent</q-btn>
          </div>
        </q-toolbar-title>

        <div class="text-white">
          <div>Total Balance:$1000</div>
        </div>
      </q-toolbar>
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
