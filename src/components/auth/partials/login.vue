<template>
  <div >
    <q-card>
      <q-card-section>
        <div class="text-h4 text-primary text-center text-weight-bolder">Login</div>
      </q-card-section>
      <q-card-section>
        <q-card flat class="q-pa-md flex flex-center q-gutter-md">

          <q-card-section class="q-gutter-xs q-ma-none q-pa-none text-center">

            <div>
              <ul v-if="Array.isArray(errors_list)">
                <li v-for="error in errors_list" :key="error.id" class="text-negative">{{ error }}</li>
              </ul>
              <ul v-else>
                <li v-if="errors_list" class="text-negative">{{ errors_list }}</li>
              </ul>
            </div>

            <div class="text-caption text-primary text-bold text-left">EMAIL</div><q-input filled input-class="text-primary" v-model="form.email" dense label="Email" name="login-id" v-validate="'required'" />
            <div class="text-caption text-primary text-bold text-left">PASSWORD</div><q-input filled input-class="text-primary" v-model="form.password" type="password" name="password"  v-validate="'required'" dense label="Password" />
            <q-btn class="q-mt-md q-px-lg" color="primary" no-caps label="Login" @click="login" :loading="loading">

              <template v-slot:loading>
                <q-spinner-facebook /> Login in
              </template>
            </q-btn>
          </q-card-section>
           <!-- <q-separator vertical class="gt-sm"/>  -->
          <q-card-section class="q-gutter-sm q-ma-none q-pa-none text-center">
            <div>
              <q-btn class="text-caption q-pr-sm" no-caps color="primary">
                <q-icon name="fab fa-facebook-f" /> <q-separator vertical spaced/> Login with facebook
              </q-btn>
            </div>
            <div>
              <q-btn class="text-caption q-pr-lg" no-caps color="negative">
                <q-icon  name="fab fa-google-plus-g" /> <q-separator vertical spaced/>   Login with google
              </q-btn>
            </div>
            <div class="flex flex-center text-primary">
              <q-btn no-caps color="primary" flat label="Sign Up" :to="{name: 'register'}"/> |
              <q-btn no-caps color="primary" flat label="Forgot Password" :to="{name: 'forgotPassword'}"/>
            </div>
          </q-card-section>
        </q-card>
      </q-card-section>
    </q-card>


  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {
      loading: false,
      slide: 1,
      form:{
        email: '',
        password: '',
      },
      errors_list: null
    }
  },

  methods: {
    async login(){
      this.errors_list = null;
      let error = await this.$validator.validateAll();
      if (!error) {
        this.errors_list = this.errors.all()
        return
      }

      this.loading = true;
      try{
          let data = await this.$axios.post(process.env.API+'/api/login', this.form);
          this.$q.notify({message: 'Login successful', color: 'primary'})
          this.$q.localStorage.set('bwc-token', data.data.token_type +" "+ data.data.access_token);
          this.$store.commit('auth/user', data.data.user);
          this.form.email = '';
          this.form.password = '';
          this.$router.push({name: 'feed'});
          this.loading = false;
      }catch(error){
        this.errors_list = 'Error: Please check your login-id or password';
        this.loading = false;
         return
      }
    }
  },
}
</script>
