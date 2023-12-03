<template>

  <login-component v-if="this.$q.appStore.ready && !this.$q.appStore.user && !this.$q.appStore.isRegistrationForm"/>

  <registr-component v-if="this.$q.appStore.ready && !this.$q.appStore.user && this.$q.appStore.isRegistrationForm"/>

  <q-layout view="hHh  Lpr lFf" v-if="this.$q.appStore.ready && this.$q.appStore.user">

    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title>
          LawyerChat
        </q-toolbar-title>
        
        <q-btn rounded flat icon-right="logout" no-caps label="Выйти" :ripple="false" @click="onClickLogout"/>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      side="left"
    >
      <SideBarComponent/>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>

</template>

<script>
import { defineComponent, ref } from 'vue'
import LoginComponent from 'src/components/LoginComponent.vue'
import RegistrComponent from 'src/components/RegistrComponent.vue'
import SideBarComponent from 'src/components/SideBarComponent.vue'


export default defineComponent({
  name: 'MainLayout',

  components: {
    LoginComponent,
    RegistrComponent,
    SideBarComponent
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  },

  methods: {
    onClickLogout () {
      this.$q.ws.call(
        'person',
        'logout',
        null,
        // success
        (response) => {
          this.logout();
        },
        // error
        (error) => {
          this.logout();
        }
      );
      localStorage.removeItem('token');
      this.$q.appStore.user = null;
    }
  }
})
</script>
