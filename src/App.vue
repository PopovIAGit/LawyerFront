
<template>
  <router-view />
  <DialogComponent />
</template>

<script>
import { defineComponent } from 'vue'
import { useAppStore } from 'stores/app'
import {useDialogAlertStore} from 'stores/dialogAlert'
import {useDialogRegStore} from 'stores/dialogReg'


import WsClient from 'src/utils/WsClient'
import DialogComponent from './components/DialogComponent.vue'

export default defineComponent({
  name: 'App',

  // async для того, чтобы this.$q.ws.connect выполнилась асинхронно, дождаться соединения или ошибки соединения
  async beforeMount () {

    /** STORES **/
    this.$q.appStore = useAppStore();
    this.$q.dialogStore = useDialogAlertStore();
    this.$q.regStore = useDialogRegStore();

    /** WS **/
    this.$q.ws = new WsClient;
    try {
      // await this.$q.ws.connect('wss://83.136.232.237:3031');
      await this.$q.ws.connect('wss://sinthy.fvds.ru:3031');
    }
    catch (e) {
      console.log(e);
      return;
    }

    /** AUTH c токеном, если токен уже есть в localStorage. Добавляется туда после успешного логина. **/
    const token = localStorage.getItem('token');
    if (token) {
      this.$q.ws.call(
        'person',
        'loginWithToken',
        {
          person: {
            token
          }
        },
        // success
        (response) => {
          // приходит готовый объект юзера типа
          //
          // active: false
          // email: null
          // id: 1
          // isDeleted: false
          // name: "Super"
          // patronymic : "Super"
          // phone: "+7 (000) 000-00-00"
          // roleId: 1
          // surname: "Super"
          // token: "605eb9ad-6e2a-4a8a-a29a-81132f42c0f8"
          //
          // Сохраняем его в хранилище app юзеру
          this.$q.appStore.user = response;
          // Добавляем токен в localStorage
          localStorage.setItem('token', response.token);
          // Указываем в хранилище, что приложение готово, всё нужное сделано
          this.$q.appStore.ready = true;

          if(this.$q.appStore.user.roleId < 2){
            this.$q.ws.call(
              "person",
              "getList",
              null,
              (response) => {
                this.$q.appStore.userList = response;
              },
              (error) => {
                console.log("Делаем что то пр не входе",error);
              }
            );
          }

        },
        // error
        (error) => {
          console.log('error', error);
          localStorage.removeItem('token');
          this.$q.appStore.ready = true;
        }
      );
    }
    else {
      this.$q.appStore.ready = true;
    }

  },

  components:{
    DialogComponent,
  }

})
</script>
