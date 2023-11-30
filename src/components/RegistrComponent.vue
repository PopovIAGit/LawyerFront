<template>
  <div class="registr-component">
    <q-card>
      <q-card-actions vertical>
        <h4>Регистрация</h4>
        <q-form @submit="onSubmitRegistrForm">
          <q-input
            class="q-mb-md"
            outlined
            hide-bottom-space
            v-model="name"
            label="Имя"
            :rules="[(val) => val && val.length >= 3]"
          />
          <q-input
            class="q-mb-md"
            outlined
            hide-bottom-space
            v-model="surname"
            label="Фамилия"
            :rules="[(val) => val && val.length >= 3]"
          />
          <q-input
            class="q-mb-md"
            outlined
            hide-bottom-space
            v-model="patronymic"
            label="Отчество"
            :rules="[(val) => val && val.length >= 3]"
          />
          <q-input
            class="q-mb-md"
            outlined
            hide-bottom-space
            type="tel"
            v-model="phone"
            unmasked-value
            :placeholder="formattedPlaceholder"
            :mask="phoneMask"
            @update:model-value="formatPhoneNumber"
            label="Телефон"
            :rules="[(val) => val && val.length >= 5]"
          />
          <q-input
            class="q-mb-md"
            outlined
            hide-bottom-space
            type="email"
            v-model="email"
            label="Почта"
            :rules="[
              (val, rules) =>
                rules.email(val) || 'Please enter a valid email address',
            ]"
          />

          <q-toggle v-model="isDeleted" label="isDeleted" />
          <q-toggle v-model="active" label="active" />

          <q-select
            outlined
            v-model="roleId"
            :options="options"
            emit-value
            label="Role"
            :rules="[(val) => val && val.length >= 1]"
          />

          <q-input
            class="q-mb-md"
            outlined
            hide-bottom-space
            v-model="password"
            label="Пароль"
            :type="isPwd ? 'password' : 'text'"
            :rules="[(val) => val && val.length >= 5]"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
          <q-input
            class="q-mb-md"
            outlined
            hide-bottom-space
            v-model="passwordConfirm"
            label="Повторите пароль"
            :type="isPwd ? 'password' : 'text'"
            :rules="[(val) => val === password || 'Пароли должны совпадать']"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
          <q-btn
            class="q-btn--lg q-mt-md"
            unelevated
            color="primary"
            type="submit"
            label="Зарегистрироватся"
          />
        </q-form>
        <div class="containerForHrefAuth">
            <a
              href="#"
              class="containerForHrefAuthLeft"
              @click="toggleToRegistration"
              >Авторизация
            </a>
        </div>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "RegistrComponent",
  setup() {
    return {
      name: ref(""),
      surname: ref(""),
      patronymic: ref(""),
      phone: ref(null),
      email: ref(null),
      password: ref(null),
      passwordConfirm: ref(null),
      isDeleted: ref(false),
      active: ref(false),
      roleId: ref("Client"),
      phoneMask: "+# (###) ### - ####",
      options: ["SuperAdmin", "Admin", "Operator", "Client"],
      isPwd: ref(true),
    };
  },

  computed: {
    formattedPlaceholder() {
      return this.phoneMask ? `+7 (123) 456-7890` : "Маска";
    },
  },

  methods: {

    toggleToRegistration(){
      this.$q.appStore.toggleRegistrationForm();
    },

    formatPhoneNumber() {
      if (this.phone.length === 1) {
        this.phone = "7";
      }
    },

    onSubmitRegistrForm() {
       // console.log(typeof(this.password), typeof(this.passwordConfirm)    );
        if (this.password == this.passwordConfirm) {
        this.$q.ws.call(
          "person",
          "add",
          {
            person: {
              name: this.name,
              surname: this.surname,
              patronymic: this.npatronymicme,
              phone: this.phone,
              email: this.email,
              password: this.password1,
              isDeleted: this.isDeleted,
              active: this.active,
              roleId: this.options.indexOf(this.roleId),
            },
          },
          (response) => {
            console.log("response message", response);
          },
          (error) => {
            console.log(error);
          }
        );
      } else {
        console.log(
          "Пароли не совпадают",
          this.password,
          "   ",
          this.confirmPassword
        );
      }
    },
  },
});
</script>
