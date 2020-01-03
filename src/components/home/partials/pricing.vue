<template>
  <div>
    <q-card class="text-center" style="max-width: 400px; min-height: 300px">
      <q-card-section>
        <div class="text-h5 text-bold ">N10,000/Month</div>
      </q-card-section>
      <q-card-section>
        <div class="text-caption flex flex-center text-left">
          <ul>
            <li>For 0 - 500 Users</li>
            <li>15,000 SMS per month</li>
            <li>IOS, Android and Web App</li>
          </ul>
        </div>
      </q-card-section>
      <q-card-actions vertical align="center">
        <q-btn class="q-px-lg text-subtitle1" color="indigo-6" no-caps label="Check it Out" :to="{name: 'register'}" />
      </q-card-actions>
    </q-card>
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
