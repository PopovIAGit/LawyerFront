<template>

  <login-component v-if="this.$q.appStore.ready && !this.$q.appStore.user"/>


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
        <q-chip v-if ="this.$q.appStore.user.roleId < 3" icon="chat" color="primary" text-color="white">Новых сообщений в чате: 10</q-chip>
        <q-chip v-if ="this.$q.appStore.user.roleId < 3" icon="notifications" color="primary" text-color="white">Новых уведомлений: 5</q-chip>
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
import SideBarComponent from 'src/components/SideBarComponent.vue'


export default defineComponent({
  name: 'MainLayout',

  components: {
    LoginComponent,
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
          this.$q.dialogStore.set({
            show: true,
            title: "Выйти из системы?",
            text: "Подтвердите выход из системы",
            ok:{
              label:"Выйти",
              fn: () =>{
                localStorage.removeItem('token');
                this.$q.appStore.user = null;
                this.$q.dialogStore.show = false;
              }
            },
            cancel:{}
          })
    }
  }
})
</script>
