<template>
  <div class="login-component">
    <q-card>
      <q-form @submit="onSubmitLoginForm">
        <h4>Авторизация</h4>
        <q-input
          class="q-mb-md"
          outlined
          autofocus
          hide-bottom-space
          type="tel"
          v-model="phoneNumber"
          :mask="phoneMask"
          unmasked-value
          :placeholder="formattedPlaceholder"
          label="Телефон"
          @update:model-value="formatPhoneNumber"
          :rules="[(val) => val && val.length >= 0]"
        >
          <template v-slot:prepend>
            <q-icon name="phone" />
          </template>
        </q-input>
        <q-input
          class="q-mb-md"
          outlined
          hide-bottom-space
          v-model="password"
          type="password"
          label="Пароль"
          :rules="[(val) => val && val.length >= 5]"
        >
          <template v-slot:prepend>
            <q-icon name="lock" />
          </template>
        </q-input>
        <q-card-section class="text-center q-pt-none">
          <div>
            <a href="#" class="text-grey-8" style="text-decoration: none"
              >Забыли пароль?</a
            >
          </div>
        </q-card-section>
        <q-btn
          class="q-btn--lg q-mt-md"
          unelevated
          color="primary"
          type="submit"
          label="Войти"
        />

        <hr>

        <q-btn
          class="q-btn--lg q-mt-md"
          unelevated
          outlined
          disable
          color="primary"
          type="submit"
          label="Регистрация"
        />


      </q-form>
    </q-card>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "LoginComponent",
  setup() {
    return {
      phoneNumber: ref("79234046955"),
      password: ref("771665"),
      phoneMask: "+# (###) ### - ####",
    };
  },

  computed: {
    formattedPlaceholder() {
      return this.phoneMask ? `+7 (123) 456-7890` : "Маска";
    },
  },

  methods: {
    formatPhoneNumber() {
      if (this.phoneNumber.length === 1) {
        this.phoneNumber = "7";
      }
    },

    onSubmitLoginForm() {
      this.$q.ws.call(
        "person",
        "login",
        {
          person: {
            phone: this.phoneNumber,
            password: this.password,
          },
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
          localStorage.setItem("token", response.token);
        },
        // error
        (error) => {
          console.log(error);
        }
      );
    },
  },
});
</script>
