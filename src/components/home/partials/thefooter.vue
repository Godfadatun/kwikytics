<template>
  <div>
    <q-card flat class="row flex-center q-pa-md bg-indigo-10">
      <q-card-section class="Column flex-center text-white  q-gutter-sm col-md-4 col-xs-12 col-sm-12">
        <q-btn flat no-caps dense class="text-weight-bolder text-h6" :to="{name: 'index'}">Kwik<span class="text-primary">ytics</span></q-btn>
        <div class="q-pl-xs">@2019 Kwikytics</div>
      </q-card-section>
      <q-card-section class="Column flex-center text-primary text-center q-gutter-sm col-md-4 col-xs-12 col-sm-12">
        <div  class="row q-gutter-sm no-wrap">
          <q-btn size="md" color="primary" text-color="white" icon="fab fa-facebook-f" />
          <q-btn size="md" color="primary" text-color="white" icon="fab fa-instagram" />
          <q-btn size="md" color="primary" text-color="white" icon="fab fa-twitter" />
        </div>
      </q-card-section>

      <q-card-section class="Column text-white q-gutter-sm col-md-4 col-xs-12 col-sm-12">
        <div class="text-h6">Contact Us</div>
        <div>4 Barnawa Close, Off Challawa Crescent, Barnawa, Kaduna, Nigeria.</div>
        <div>(+234)-0813-561-3409</div>
      </q-card-section>

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
