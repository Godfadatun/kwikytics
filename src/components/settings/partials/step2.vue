<template>
  <div>
    <q-card class=" q-gutter-x-sm ">
      <q-card-section class="q-ma-none text-caption text-primary text-bold">
        <div class="text-h6">Pick your Company's Color</div>
        <div class="flex justify-center q-gutter-x-sm">
          <div>
            <div>Primary Color</div>
            <q-color v-model="hex" style="max-width: 300px"/>
          </div>
          <div>
            <div>Secondary Color</div>
            <q-color v-model="hex1" style="max-width: 300px"/>
          </div>
        </div>

      </q-card-section>
       <q-card-section class="q-ma-none text-caption text-primary text-bold">
         <div class="text-h6">Pick your Company's Logo</div>
         <div class="flex justify-center q-gutter-x-sm">
          <div>
            <div>Dark Logo</div>
            <q-uploader url="http://localhost:4444/upload" label="Restricted to images" accept=".jpg, image/*" style="max-width: 250px"/>
          </div>
          <div>
            <div>Light logo</div>
            <q-uploader url="http://localhost:4444/upload" label="Restricted to images" accept=".jpg, image/*" style="max-width: 250px"/>
          </div>
        </div>
      </q-card-section>
    </q-card>

  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {
      hex: '#FF00FF',
      hex1: '#0051ff'
    }
  }
}
</script>
