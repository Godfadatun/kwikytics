<template>
  <div>
    <q-header bordered class="bg-white text-primary">
      <q-toolbar>
       <q-toolbar-title>
          <q-btn flat no-caps class="text-weight-bolder text-h6 text-black gt-sm" :to="{name: 'index'}">Kwik<span class="text-primary">ytics</span></q-btn>
          <q-btn flat no-caps class="text-weight-bolder q-px-none text-black lt-md" :to="{name: 'index'}">Kwik<span class="text-primary">ytics</span></q-btn>
        </q-toolbar-title>


        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn color="primary" no-caps size="sm"  label="Login" :to="{name: 'login'}">
            <q-tooltip>Login</q-tooltip>
          </q-btn>
          <q-btn color="primary" flat no-caps size="sm"  label="Sign Up" :to="{name: 'register'}">
            <q-tooltip>Don't have an account? Register </q-tooltip>
          </q-btn>

        </div>
      </q-toolbar>
    </q-header>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {
      leftDrawerOpen: false,
      miniState: false,
      search: '',
    }
  }
}
</script>
