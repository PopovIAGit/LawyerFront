<template>
  <q-page >
    <!-- <div class="row-stacked-to-horizontal">
      <div class="row">

        <div class="col-20 col-md-1">
          <div>id: {{ this.$q.appStore.user.id }}</div>
          <div>phone: {{ this.$q.appStore.user.phone }}</div>
          <div>surname: {{ this.$q.appStore.user.surname }}</div>
          <br />
          <div>user: {{ this.$q.appStore.user }}</div>
        </div>

      </div>
    </div> -->

    <q-form @submit="onSubmitForm">
            <q-btn
              class="q-btn--lg q-mt-md"
              unelevated
              color="primary"
              type="submit"
              label="считать всех пользователей"
            />
          </q-form>

          <q-form @submit="onSubmitDelForm">
            <q-input
              class="q-mb-md"
              outlined
              hide-bottom-space
              v-model="id"
              label="id for del"
            />

            <q-btn
              class="q-btn--lg q-mt-md"
              unelevated
              color="primary"
              type="submit"
              label="delet by id"
            />
          </q-form>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import ChatComponent from "src/components/ChatComponent.vue";

export default defineComponent({
  name: "IndexPage",

  setup() {
    return {
      id: ref(""),
    };
  },

  components: {
    ChatComponent,
  },

  methods: {
    onSubmitDelForm() {
      this.$q.ws.call(
        "person",
        "remove",
        {
          person: {
            id: this.id,
          },
        },
        (response) => {
          console.log("response message", response);
        },
        (error) => {
          console.log(error);
        }
      );
    },

    onSubmitForm() {
      // this.$q.ws.call(
      //   'person',
      //   'getRoleList',
      //   null,
      //   (response) => {
      //     console.log("response message", response);
      //   },
      //   (error) => {
      //     console.log("error message". error);
      //   }
      // )

      this.$q.ws.call(
        "person",
        "getList",
        null,
        (response) => {
          console.log("!!!!", response);
        },
        (error) => {
          console.log("error message".error);
        }
      );

      // this.$q.ws.call(
      //   'person',
      //   'update',
      //   {
      //     person:{
      //       id : 8,
      //       patronymic : 'Андреевич'
      //     }
      //   },
      //   (response) => {
      //     console.log("response message", response);
      //   },
      //   (error) => {
      //     console.log(error);
      //   }
      // );
    },
  },
});
</script>
