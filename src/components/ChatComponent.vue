<template>
  <div class="chat-component">
    <q-card>
      <q-card-actions vertical>

        <div class="chat-sendMsg">
          <q-form @submit="onSubmitChatForm">
            <q-input label="Введите сообщение"></q-input>
          </q-form>
        </div>
      </q-card-actions>
    </q-card>
  </div>
</template>

<!-- <q-input
              outlined
              type="text"
              bottom-slots
              v-model="newMsg"
              label="Введите сообщение"
              dense
            >
              <q-btn round dense unelevated flat icon="send" type="submit" />
            </q-input> -->

    <!--
        <div class="q-pa-md">
          <q-infinite-scroll @load="onLoad" reverse>
            <template v-slot:loading>
              <div class="row justify-center q-my-md">
                <q-spinner color="primary" name="dots" size="40px" />
              </div>
            </template>

            <div
              v-for="(item, index) in items"
              :key="index"
              class="caption q-py-sm"
            >
              <q-badge class="shadow-1">
                {{ items.length - index }}
              </q-badge>
              Lorem ipsum .
            </div>
          </q-infinite-scroll>
        </div>      -->



    <!-- <q-chat-message
          v-for="msg in messeges"
          :key="msg.text"
          :name="msg.from"
          :text="[msg.text]"
          :sent="msg.from == 'user' ? true : false"
      /> -->


<script>
import { ref } from "vue";

export default {
  name: "ChatComponent",
  setup() {
    const items = ref([{}, {}, {}, {}, {}, {}, {}]);
    return {
      items,
      onLoad(index, done) {
        setTimeout(() => {
          items.value.splice(0, 0, {}, {}, {}, {}, {}, {}, {});
          done();
        }, 2000);
      },

      newMsg: ref(""),
      messeges: ref([
        {
          text: ref(""),
          from: ref(""),
          sentDateTime: ref(""),
        },
      ]),
    };
  },

  methods: {
    onSubmitChatForm() {
      this.messeges.push({
        text: this.newMsg,
        from: "user",
      });
      this.newMsg = "";
    },
  },
};
</script>
