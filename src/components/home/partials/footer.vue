<template>
  <div>
    <q-page-sticky position="bottom-right" :offset="[18, 18]" >
      <q-fab icon="ion-ios-chatbubbles" v-if="open == false" direction="up" color="primary" @click="open = true" />
    </q-page-sticky>
    <q-dialog v-model="open" seamless position="right">
      <q-card style="max-width: 300px">
        <q-card-actions vertical align="right">
          <q-btn round color="negative" flat icon="close" @click="open = false"  />
        </q-card-actions>
        <q-card-section>
          <q-chat-message
            :text="['Hello, there welcome to kwikytics, how may i help you?']"
            sent
          />
          <q-chat-message
            :text="['doing fine, how r you?']"
          />
        </q-card-section>
        <q-card-section class="no-padding">
          <q-toolbar class="bg-grey-3 text-black row">
          <q-input rounded outlined dense class="WAL__field col-grow q-mr-sm" bg-color="white" v-model="message" placeholder="Type a message" />
          <q-btn round flat icon="send" @click="open = false"  />
        </q-toolbar>
        </q-card-section>

      </q-card>
    </q-dialog>

  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {
      open : false
    }
  }
}
</script>
