<template>
  <div>
     <q-card class="WAL__layout shadow-3" >
      <q-header elevated>
        <q-toolbar class="bg-grey-3 text-black">
          <q-btn
            round
            flat
            icon="keyboard_arrow_left"
            class="WAL__drawer-open q-mr-sm"
            @click="leftDrawerOpen = true"
          />

          <q-btn round flat>
            <q-avatar>
              <img :src="currentConversation.avatar">
            </q-avatar>
          </q-btn>

          <span class="q-subtitle-1 q-pl-md">
            {{ currentConversation.person }}
          </span>

          <q-space/>

          <q-btn round flat icon="search" />
          <q-btn round flat>
            <q-icon name="attachment" class="rotate-135" />
          </q-btn>
          <q-btn round flat icon="more_vert">
            <q-menu auto-close :offset="[110, 0]">
              <q-list style="min-width: 150px">
                <q-item clickable>
                  <q-item-section>Contact data</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Block</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Select messages</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Silence</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Clear messages</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Erase messages</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </q-toolbar>
      </q-header>

      <q-drawer v-model="leftDrawerOpen" show-if-above bordered :breakpoint="690" >
        <q-toolbar class="bg-grey-3">
          <q-avatar class="cursor-pointer">
            <img src="https://cdn.quasar.dev/app-icons/icon-128x128.png" />
          </q-avatar>

          <q-space />

          <q-btn round flat icon="message" />
          <q-btn round flat icon="more_vert">
            <q-menu auto-close :offset="[110, 8]">
              <q-list style="min-width: 150px">
                <q-item clickable>
                  <q-item-section>New group</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Profile</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Archived</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Favorites</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Settings</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Logout</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>

          <q-btn
            round
            flat
            icon="close"
            class="WAL__drawer-close"
            @click="leftDrawerOpen = false"
          />
        </q-toolbar>

        <q-toolbar class="bg-grey-2">
          <q-input rounded outlined dense class="WAL__field full-width" bg-color="white" v-model="search" placeholder="Search or start a new conversation">
            <template slot="prepend">
              <q-icon name="search" />
            </template>
          </q-input>
        </q-toolbar>


      </q-drawer>

      <q-page-container class="bg-grey-2">
        <router-view />
      </q-page-container>

      <q-footer>
        <q-toolbar class="bg-grey-3 text-black row">
          <q-btn round flat icon="insert_emoticon" class="q-mr-sm" />
          <q-input rounded outlined dense class="WAL__field col-grow q-mr-sm" bg-color="white" v-model="message" placeholder="Type a message" />
          <q-btn round flat icon="mic" />
        </q-toolbar>
      </q-footer>
    </q-card>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {
      leftDrawerOpen: false,
      search: '',
      message: '',
      currentConversationIndex: 0,
      conversations: [
        {
          id: 1,
          person: 'Razvan Stoenescu',
          avatar: 'https://cdn.quasar.dev/team/razvan_stoenescu.jpeg',
          caption: 'I\'m working on Quasar!',
          time: '15:00',
          sent: true
        },
        {
          id: 2,
          person: 'Dan Popescu',
          avatar: 'https://cdn.quasar.dev/team/dan_popescu.jpg',
          caption: 'I\'m working on Quasar!',
          time: '16:00',
          sent: true
        },
        {
          id: 3,
          person: 'Jeff Galbraith',
          avatar: 'https://cdn.quasar.dev/team/jeff_galbraith.jpg',
          caption: 'I\'m working on Quasar!',
          time: '18:00',
          sent: true
        },
        {
          id: 4,
          person: 'Allan Gaunt',
          avatar: 'https://cdn.quasar.dev/team/allan_gaunt.png',
          caption: 'I\'m working on Quasar!',
          time: '17:00',
          sent: true
        }
      ]
    }
  },
  computed: {
    currentConversation () {
      return this.conversations[this.currentConversationIndex]
    }
  }
}
</script>
