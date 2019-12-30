<template>
  <div class="flex flex-center">
    <q-card class="" style="min-width: 300px; max-width: 800px">
      <q-card-section>
        <div class="text-h6">Welcome</div>
        <div class="text-indigo text-h4">How may we help you?</div>
      </q-card-section>
      <q-separator />
      <q-card-section class="no-padding">
        <q-card class="row ">
          <q-card square class="no-padding full-height col-md-4 gt-sm" style="min-height: 300px; max-height: 300px; ">
            <q-toolbar class="bg-grey-4">
              <div class="text-bold text-primary">Contacts</div>
            </q-toolbar>
            <q-list separator bordered>
              <q-item v-for="(conversation, index) in conversations" :key="conversation.id" clickable v-ripple @click="currentConversationIndex = index" class="full-width" >
                <q-item-section avatar>
                  <q-avatar  color="primary" text-color="white" :icon="conversation.avatar" />
                </q-item-section>

                <q-item-section>
                  <q-item-label lines="1">
                    {{ conversation.person }}
                  </q-item-label>
                </q-item-section>


              </q-item>

            </q-list>
          </q-card>

          <q-card square class="col-md-8 col-sm-12 col-xs-12" style="border-left: solid grey 1px; min-width: 300px" >
            <q-toolbar class="bg-grey-3 text-black">
              <q-btn round flat icon="keyboard_arrow_right" class="lt-md" >
                <q-menu fit anchor="center right" self="center left">
                    <q-toolbar class="bg-grey-4">
                      <div class="text-bold text-primary">Contacts</div>
                    </q-toolbar>

                    <q-list separator bordered>
                      <q-item v-for="(conversation, index) in conversations" :key="conversation.id" clickable v-close-popup v-ripple @click="currentConversationIndex = index">
                        <q-item-section avatar>
                          <q-avatar  color="primary" text-color="white" :icon="conversation.avatar" />
                        </q-item-section>
                        <q-item-section>
                          <q-item-label lines="1">{{ conversation.person }}</q-item-label>
                        </q-item-section>
                      </q-item>
                    </q-list>
                </q-menu>
              </q-btn>
              <q-btn round flat>
                <q-avatar color="primary" text-color="white">
                  <q-icon :name="currentConversation.avatar" size="sm" />
                </q-avatar>
              </q-btn>
              <span class="q-subtitle-1 q-pl-md">
                {{ currentConversation.person }}
              </span>
            </q-toolbar>

            <q-scroll-area style="height: 300px;">
              <div class="q-pa-md">
                <q-chat-message
                  :text="['doing fine, how r you?']"
                  bg-color="grey-4"
                />
                <q-chat-message
                  :text="['Hello, there welcome to kwikytics, how may i help you?']"
                  bg-color="primary"
                  text-color="white"
                  sent
                />

              </div>
            </q-scroll-area>

            <q-toolbar class=" absolute-bottom bg-grey-3 text-black row">
              <q-avatar class="cursor-pointer q-mr-sm" >
                <img src="https://cdn.quasar.dev/img/boy-avatar.png">
              </q-avatar>
              <q-input rounded outlined dense class="WAL__field col-grow q-mr-sm" bg-color="white" v-model="message" placeholder="Type a message" />
              <q-btn round flat icon="ion-ios-send" />
            </q-toolbar>
          </q-card>
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
      alert: false,
      message: '',
      currentConversationIndex: 0,
      conversations: [
        {
          id: 1,
          person: 'Customer Care',
          avatar: 'ion-ios-chatbubbles',
          time: '15:00',
        },
        {
          id: 2,
          person: 'Tech Support',
          avatar: 'ion-options',
          time: '16:00',
        },
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
