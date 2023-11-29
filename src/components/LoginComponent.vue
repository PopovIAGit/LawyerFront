<template>
  <div class="login-component">
    <q-card>
      <q-card-actions vertical>
        <q-form @submit="onSubmitLoginForm">
          <h4>Вход</h4>
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
            :rules="[(val) => val && val.length >= 11]"
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
            :type="isPwd ? 'password' : 'text'"
            label="Пароль"
            :rules="[(val) => val && val.length >= 5]"
          >
            <template v-slot:prepend>
              <q-icon name="lock" />
            </template>
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
          <q-card-section class="text-center q-pt-none">
          </q-card-section>
          <q-btn
            class="q-btn--lg q-mt-md"
            unelevated
            color="primary"
            type="submit"
            label="Войти"
          />
        </q-form>
        <div class="containerForHrefReg">
              <span>
                <a
                  href="#"
                  class = "containerForHrefRegLeft"
                  @click="forgotPassword"
                  >Забыли пароль?
                </a>
              </span>

              <span>
                <a
                  href="#"
                  class = "containerForHrefRegRight"
                  @click="toggleToRegistration"
                  >Регистрация
                </a>
              </span>
            </div>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({


  name: "LoginComponent",
  setup() {

    return {
      phoneNumber: ref("79234046955"), //TODO обнулить
      password: ref("771665"), //TODO обнулить
      phoneMask: "+# (###) ### - ####",
      isPwd: ref(true),
    };
  },

  computed: {
    formattedPlaceholder() {
      return this.phoneMask ? `+7 (123) 456-7890` : "Маска";
    },
  },

  methods: {
    forgotPassword(){
      console.log("заглушка");
    },

    formatPhoneNumber() {
      if (this.phoneNumber.length === 1) {
        this.phoneNumber = "7";
      }
    },

    toggleToRegistration(){
      this.$q.appStore.toggleRegistrationForm();
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
