<template>
  <div>
    <q-header elevated class="bg-white text-primary">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"

          aria-label="Menu"
          class="text-primary lt-md"
        />

       <q-toolbar-title>
          <q-btn flat no-caps class="text-weight-bolder text-h6 text-black gt-sm" :to="{name: 'index'}">Kwik<span class="text-primary">ytics</span></q-btn>
        </q-toolbar-title>



        <q-input class="GPL__toolbar-input" dense standout="bg-primary" v-model="search" placeholder="Search">
          <template v-slot:prepend>
            <q-icon v-if="search === ''" name="search" />
            <q-icon v-else name="clear" class="cursor-pointer" @click="search = ''" />
          </template>
        </q-input>

        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn round dense flat color="grey-8" icon="notifications">
            <q-badge color="red" text-color="white" floating>
              2
            </q-badge>
            <q-tooltip>Notifications</q-tooltip>
          </q-btn>
          <q-btn round flat>
            <q-avatar size="26px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <q-tooltip>Account</q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
      :mini="!leftDrawerOpen || miniState"
      @click.capture="drawerClick"
      :width="200"
      :breakpoint="500"
    >
      <q-list>
        <q-item clickable v-ripple header :to="{name: 'index'}">
          <q-item-section avatar>
            <q-avatar size="24px" class="text-bold lt-md" color="primary" text-color="black">k<span class="text-white">y</span></q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label class="lt-md text-left text-weight-bolder text-h6 text-black" :to="{name: 'index'}">Kwik<span class="text-primary">ytics</span></q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple :to="{name: 'account'}">
          <q-item-section avatar>
            <q-icon name="ion-home" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Dashboard</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple :to="{name: 'wallet'}">
          <q-item-section avatar>
            <q-icon name="ion-ios-wallet" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Wallet</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple :to="{name: 'event'}">
          <q-item-section avatar>
            <q-icon name="chat" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Events</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple :to="{name: 'analytics'}">
          <q-item-section avatar>
            <q-icon name="ion-ios-pulse" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Analytics</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple :to="{name: 'support'}">
          <q-item-section avatar>
            <q-icon name="record_voice_over" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Support</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>

       <div class="q-mini-drawer-hide absolute" style="top: 58px; right: -17px">
          <q-btn
            dense
            round
            unelevated
            color="white"
            icon="chevron_left"
            @click="miniState = true"
            text-color="primary"
          />
        </div>
    </q-drawer>

    <q-page-container style="width: 100%; padding: 0px" class="q-pa-none">
      <slot name="LayoutContent" ></slot>
      <!-- <router-view /> -->
    </q-page-container>
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
  },
   methods: {
    drawerClick (e) {
      // if in "mini" state and user
      // click on drawer, we switch it to "normal" mode
      if (this.miniState) {
        this.miniState = false

        // notice we have registered an event with capture flag;
        // we need to stop further propagation as this click is
        // intended for switching drawer to "normal" mode only
        e.stopPropagation()
      }
    }
  }
}
</script>
