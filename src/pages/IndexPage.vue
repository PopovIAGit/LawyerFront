<template>
  <q-page class="indexPage">
    <div class="containerForClient" v-if = "this.$q.appStore.viewMenuState < 10">
          <div class="client" v-if="this.$q.appStore.viewMenuState == 1">
              <ClientStartVue/>
          </div>
          <div class="client" v-else-if="this.$q.appStore.viewMenuState == 2">
            <ClientTicket/>
          </div>
          <div class="client" v-else-if="this.$q.appStore.viewMenuState == 3">
            <ClientArchVue/>
          </div>
          <div class="client" v-else-if="this.$q.appStore.viewMenuState == 4">
            <Settings/>
          </div>
          <div class="client" v-else-if="this.$q.appStore.viewMenuState == 5">
            <ClientTicketOpen/>
          </div>
    </div>
    <diV class="containerForAdmin" v-if = "this.$q.appStore.viewMenuState >=10">
      <div class="admin" v-if="this.$q.appStore.viewMenuState == 10">
          <AdminStartVue/>
      </div>
      <div class="admin" v-else-if="this.$q.appStore.viewMenuState == 11">
        <AdminTicketVue/>
      </div>
      <div class="admin" v-else-if="this.$q.appStore.viewMenuState == 12">
        <AdminClientVue/>
      </div>
      <div class="admin" v-else-if="this.$q.appStore.viewMenuState == 13">
        <AdminOperatorVue/>
      </div>
      <div class="admin" v-else-if="this.$q.appStore.viewMenuState == 14">
        <AdminAdminVue/>
      </div>
      <div class="admin" v-else-if="this.$q.appStore.viewMenuState == 15">
        <Settings/>
      </div >

    </diV>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import ChatComponent from "src/components/ChatComponent.vue";
import AdminStartVue from "src/components/Admin/AdminStart.vue";
import AdminTicketVue from "src/components/Admin/AdminTicket.vue";
import AdminClientVue from "src/components/Admin/AdminClient.vue";
import AdminAdminVue from "src/components/Admin/AdminAdmin.vue";
import ClientTicket from "src/components/Client/ClientTicket.vue";
import Settings from "src/components/Settings.vue";
import ClientStartVue from "src/components/Client/ClientStart.vue";
import ClientArchVue from "src/components/Client/ClientArch.vue";
import AdminOperatorVue from "src/components/Admin/AdminOperator.vue";
import ClientTicketOpen from "src/components/Client/ClientTicketOpen.vue";


export default defineComponent({
  name: "IndexPage",

  setup() {
    return {
      id: ref(""),
    };
  },

  components: {
    ChatComponent,
    AdminStartVue,
    AdminTicketVue,
    AdminOperatorVue,
    AdminClientVue,
    AdminAdminVue,
    ClientTicket,
    ClientStartVue,
    ClientArchVue,
    ClientTicketOpen,
    Settings
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

      // this.$q.ws.call(
      //   "person",
      //   "getList",
      //   null,
      //   (response) => {
      //     console.log("!!!!", response);
      //   },
      //   (error) => {
      //     console.log("error message".error);
      //   }
      // );
    },
  },
});
</script>
