<template>
  <q-page padding class="bg-primary ">
    <!-- content -->
    <div class="text-weight-bolder text-center q-pt-xl q-pb-md text-h3 text-white">Kwik<span class="text-black">ytics</span></div>
    <q-separator spaced inset dark />
    <div class="text-weight-thin text-center q-py-xs text-h4 text-white">Settings</div>
    <div class="flex flex-center q-py-sm">
      <q-card class="flex flex-center" style="min-width: 300px; max-width: 700px">
        <q-card-section>
          <settings />
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import settings from '../components/settings/index'
export default {
  // name: 'PageName',
  components:{
    settings
  },
}
</script>
