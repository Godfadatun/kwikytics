<template>
  <div >
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h4 text-primary text-center text-weight-bolder">Sign Up</div>
      </q-card-section>
      <q-card-section>
        <q-card flat class="q-pa-md flex flex-center q-gutter-md">
      
          <q-card-section class="q-gutter-xs q-ma-none q-pa-none">
            
           <div>
            <ul v-if="Array.isArray(errors_list)">
              <li v-for="error in errors_list" :key="error.id" class="text-negative">{{ error }}</li>
            </ul>
            <ul v-else>
              <li v-if="errors_list" class="text-negative">{{ errors_list }}</li>
            </ul>
          </div>

          <div class="row q-gutter-lg">
            <div><div class="col-xs-12 col-sm-12 text-caption text-primary text-bold">FIRST NAME</div><q-input filled  input-class="text-primary"  v-model="form.firstname" name="firstname" v-validate="'required'" dense  class="col-xs-12 col-sm-12 col-md-6"/></div>
            <div><div class="col-xs-12 col-sm-12 text-caption text-primary text-bold">LAST NAME</div><q-input filled input-class="text-primary" v-model="form.lastname" name="lastname" v-validate="'required'" dense  class="col-xs-12 col-sm-12 col-md-6"/></div>
          </div>
          <!-- <q-input outlined v-model="form.username" name="username" v-validate="'required'" dense label="Username" class="full-width"/> -->
          <div class="text-caption text-primary text-bold q-mt-md">EMAIL</div><q-input filled input-class="text-primary" input-style="width: 64%" v-model="form.email" dense name="email"  class="full-width"/>
          <div class="text-caption text-primary text-bold q-mt-md">PASSWORD</div><q-input filled input-class="text-primary" input-style="width: 64%" v-model="form.password" name="password" v-validate="'required'" type="password" dense  class="full-width"/>
          <div class="text-caption text-primary text-bold q-mt-md">PASSWORD VALIDATION</div><q-input filled input-class="text-primary" input-style="width: 64%" v-model="form.confirm_password" name="password_confirmation" v-validate="'required'" type="password" dense  class="full-width"/>
          <q-btn class="q-mt-md q-px-lg" color="primary" no-caps label="Sign Up" @click="register" :loading="loading">

            <template v-slot:loading>
              <q-spinner-facebook /> Registering
            </template>
          </q-btn>
          </q-card-section>
           <q-separator vertical class="gt-sm"/> 
          <q-card-section class="q-gutter-sm q-ma-none q-pa-none text-primary text-center">
            <div>
              <q-btn class="text-caption q-pr-sm" no-caps color="primary">
                <q-icon name="fab fa-facebook-f" /> <q-separator vertical="" spaced=""/> Login with facebook
              </q-btn>
            </div>
            <div>
              <q-btn class="text-caption q-pr-lg" no-caps color="negative">
                <q-icon  name="fab fa-google-plus-g" /> <q-separator vertical="" spaced=""/>   Login with google
              </q-btn>
            </div>

            <div class="flex flex-center">
              <q-btn no-caps="" color="primary" flat label="Login" :to="{name: 'login'}"/> |
              <q-btn no-caps="" color="primary" flat label="Forgot Password" :to="{name: 'forgotPassword'}"/> 
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
       slide: 1,
      loading: false,
      form:{
        name: '',
        phone: '',
        username: '',
        email: '',
        password: '',
        confirm_password: '',
      },
      errors_list: null
    }
  },
  

  methods: {
    async register(){
      this.errors_list = null

      let error = await this.$validator.validateAll();
      if (!error) {
        this.errors_list = this.errors.all();
        return;
      }

      this.loading = true;
      try{
        let data = await this.$axios.post(process.env.API+'/api/signup', this.form);
        if (data.data.status == 'error') {
           this.errors_list = data.data.data
           this.loading = false;
           return
        }
        this.$q.localStorage.set('bwc-token', data.data.token_type +" "+ data.data.access_token);
        this.$q.notify({message: 'Registration successful', color: 'primary'});
        this.$store.commit('auth/user', data.data.user);
        this.clearForm();
        this.$router.push({name: 'feed'});
        this.loading = false;
      }catch(error){
        this.errors_list = 'Something went wrong: Please try again';
        this.loading = false;
      }

    },

    clearForm(){
        this.form.name = '';
        this.form.phone = '';
        this.form.user_name = '';
        this.form.email = '';
        this.form.password = '';
        this.form.confirm_password = '';
    }
  },
}
</script>
