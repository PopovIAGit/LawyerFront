<template>
<!-- бесконечный скрол!!! -->
  <div style="background: lightgray">
    <q-chat-message
        v-for="msg in messeges"
        :key="msg.text"
        :name="msg.from"
        :text="[msg.text]"
        :sent="msg.from == 'user' ? true : false"
      />

      <q-form @submit="onSubmitChatForm">
        <q-input
          outlined
          type="text"
          bottom-slots
          v-model="newMsg"
          label="Введите сообщение"
          dense
        >
        <q-btn
              round
              dense
              unelevated
              flat
              icon="send"
              type="submit" />

        </q-input>
      </q-form>
  </div>

</template>

<script>
export default {
  name: "ChatComponent",
  setup() {
    return {
      newMsg: "",
      messeges: [
        {
          text: "",
          from: "",
          sentDateTime : "",
        }
      ],
    };
  },

  methods: {
      onSubmitChatForm(){
          console.log(this.messeges);
          this.messeges.push({
            text: this.newMsg,
            from: "user"
          })
      }

  },
};
</script>
