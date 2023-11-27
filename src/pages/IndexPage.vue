<template>
  <q-page class="flex flex-center">
    <div style="width:400px">
      <div>id: {{ this.$q.appStore.user.id }}</div>
      <div>phone: {{ this.$q.appStore.user.phone }}</div>
      <div>surname: {{ this.$q.appStore.user.surname }}</div>
      <br>
      <div>user: {{ this.$q.appStore.user }}</div>

      <q-form @submit="onSubmitForm">
        <q-btn
          class="q-btn--lg q-mt-md"
          unelevated
          color="primary"
          type="submit"
          label="Создать"
        />
      </q-form>



    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage',

  methods:{
    onSubmitForm (){
      /*this.$q.ws.call(
        'person',
        'getRoleList',
        null,
        (response) => {
          console.log("response message", response);
        },
        (error) => {
          console.log("error message". error);
        }
      )*/
     this.$q.ws.call(
        'person',
        'add',
        {
          person:{
            name : 'Иван',
            surname : 'Попов',
            patronymic : 'Андреевич',
            phone : '79234046955',
            email :  'my@mail.tr',
            password : '771665',
            isDeleted: 'false',
            active:'true',
            roleId: '3'
          }
        },
        (response) => {
          console.log("response message", response);
        },
        (error) => {
          console.log(error);
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

        // this.$q.ws.call(
        //   'person',
        //   'remove',
        //   {
        //     person:{
        //       id : 8
        //     }
        //   },
        //   (response) => {
        //     console.log("response message", response);
        //   },
        //   (error) => {
        //     console.log(error);
        //   }
        // );
    }
  }
})
</script>
