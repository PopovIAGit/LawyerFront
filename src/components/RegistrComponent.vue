<template>
  <div class="registr-component">
    <q-card >

      <q-form @submit="onSubmitRegistrForm">

        <h4>Аторизация</h4>
        <q-input
          class="q-mb-md"
          outlined
          hide-bottom-space
          v-model="phone"
          label="Телефон"
          :rules="[ val => val && val.length >= 0 ]"
        />
        <q-input
          class="q-mb-md"
          outlined
          hide-bottom-space
          v-model="password"
          label="Пароль"
          :rules="[ val => val && val.length >= 5 ]"
        />
        <q-btn
          class="q-btn--lg q-mt-md"
          unelevated
          color="primary"
          type="submit"
          label="Войти"
        />
        <q-btn
          class="q-btn--lg q-mt-md"
          unelevated
          outlined
          color="primary"
          type="submit"
          label="Регистрация"/>
        <q-btn
        flat
        color="primary"
        label="Забыли пароль"/>
      </q-form>
    </q-card>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'RegistrComponent',
  setup () {
    return {
      phone: ref('+7 (000) 000-00-00'),
      password: ref('super'),
    }
  },

  methods: {
    onSubmitRegistrForm () {
      this.$q.ws.call(
        'person',
        'login',
        {
          person: {
            phone: this.phone,
            password: this.password
          }
        },
        // success
        (response) => {
          // приходит готовый юзера объект типа
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
        },
        // error
        (error) => {
          console.log(error);
        }
      );
    }
  }

})
</script>
