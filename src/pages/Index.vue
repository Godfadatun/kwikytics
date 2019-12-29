<template>
  <q-page>

  <!-- <div style="margin-top: -70px">
    <q-carousel v-model="slide" height="400">
      <q-carousel-slide :name="1" img-src="statics/slides/bgKpnew.svg" class="column no-wrap flex-center">
         <div class="text-black text-bold">
            <div class="text-h2 text-bold text-center">kwikytics</div>
            <div class="text-center q-mt-md" style="max-width: 400px">
            <p class="text-italic text-center">Ease of Transactions</p>
            </div>
          </div>
      </q-carousel-slide>
    </q-carousel>
  </div>

 <div>
    <q-card flat style="border-top-right-radius: 50px; border-top-left-radius: 50px; margin-top: -50px">
      <q-card-section class="text-center q-gutter-md">
          <div class="col-12">
            <q-btn color="primary" no-caps=""  label="Login" :to="{name: 'login'}" style="min-width: 300px;"/>
          </div>
          <div class="col-12">
            <q-btn color="primary" no-caps=""  label="Register" :to="{name: 'register'}" style="min-width: 300px;"/>
          </div>
      </q-card-section>
    </q-card>
  </div> -->
  <div>
    
    <Front />
  </div>


  </q-page>
</template>

<script>
import Front from '../components/home/index'
export default {
  name: 'PageIndex',
  components:{
    Front
  },
  data() {
    return {
      slide: 1,
      tab: 'feed'
    }
  },
  computed: {
    userData: function(){return this.$store.getters['auth/user']},
  },
}
</script>
