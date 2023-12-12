<template>
  <!-- <div class="registr-component">
    <q-card square class="no-shadow">
      <q-card-actions vertical class="no-shadow">
        <h4>Добавить клиента</h4>
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
            :rules="[val => !val || rules.email(val) || 'Пожалуйста введите корретный адрес электронной почты']"
          />

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
            label="Добавить"
            v-close-popup = "isDataTransmit"
          />
          <q-btn flat label="Отмена" color="primary" v-close-popup />
        </q-form>
      </q-card-actions>
    </q-card>
  </div> -->

  <q-dialog
    class="registr-component"
    v-model="this.$q.regStore.show"
    @before-hide="this.$q.regStore.hide()"
  >
    <q-card square class="no-shadow q-dialog__content">
      <q-card-actions vertical class="no-shadow">
        <div class="text-h6 q-mb-md q-mt-md">{{ this.$q.regStore.title }}</div>
        <q-form @submit="onSubmitRegistrForm">
          <q-input
            class="q-mb-md"
            outlined
            hide-bottom-space
            v-model="name"
            label="Имя"
            lazy-rules="ondemand"
            :rules="[(val) => val && val.length >= 3 ||
                'Пожалуйста введите имя']"
          />
          <q-input
            class="q-mb-md"
            outlined
            hide-bottom-space
            v-model="surname"
            label="Фамилия"
            lazy-rules="ondemand"
            :rules="[(val) => val && val.length >= 3 ||
                'Пожалуйста введите фамилию']"
          />
          <q-input
            class="q-mb-md"
            outlined
            hide-bottom-space
            v-model="patronymic"
            label="Отчество"
            lazy-rules="ondemand"
            :rules="[(val) => !val || val && val.length >= 3||
                'Пожалуйста введите отчество']"
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
            lazy-rules="ondemand"
            :rules="[(val) => val && val.length >= 10 ||
                'Пожалуйста введите номер телефона']"
          />
          <q-input
            class="q-mb-md"
            outlined
            hide-bottom-space
            type="email"
            v-model="email"
            label="Почта"
            lazy-rules="ondemand"
            :rules="[
              (val) =>
                !val ||
                rules.email(val) ||
                'Пожалуйста введите корретный адрес электронной почты',
            ]"
          />
          <template v-if="this.$q.regStore.role">
            <q-select
            outlined
            v-model="roleId"
            :options="options"
            emit-value
            label="Role"
            :rules="[(val) => val && val.length >= 1]"
          />
          </template>

          <q-input
            class="q-mb-md"
            outlined
            hide-bottom-space
            v-model="password"
            label="Пароль"
            :type="isPwd ? 'password' : 'text'"
            lazy-rules="ondemand"
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
            lazy-rules="ondemand"
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
          <template v-if="this.$q.regStore.cancel">
            <q-btn
              flat
              class="q-btn--lg q-ma-md"
              :label="
                this.$q.regStore.cancel.label
                  ? this.$q.regStore.cancel.label
                  : 'ОТМЕНА'
              "
              :color="this.$q.regStore.cancel && this.$q.regStore.cancel.color ? this.$q.regStore.cancel.color : 'primary'"
              v-close-popup
            />
          </template>
          <q-btn
            class="q-btn--lg q-ma-md"
            unelevated
            :color="this.$q.regStore.ok && this.$q.regStore.ok.color ? this.$q.regStore.ok.color : 'primary'"
            type="submit"
            :label="
              this.$q.regStore.ok && this.$q.regStore.ok.label
                ? this.$q.regStore.ok.label
                : 'OK'
            "
            v-close-popup="!this.$q.regStore.ok || !this.$q.regStore.ok.fn"
          />
        </q-form>
      </q-card-actions>
    </q-card>
  </q-dialog>
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
      phone: ref(""),
      email: ref(""),
      password: ref(""),
      passwordConfirm: ref(""),
      phoneMask: "+# (###) ### - ####",
      options: ["SuperAdmin", "Admin", "Operator", "Client"],
      isPwd: ref(true),
      isDataTransmit: ref(false),
    };
  },

  props: {
    person: {
      type: Object,
      default: null,
    },
  },
  mounted() {
    if (this.person) {
      this.fillFormFields(this.person);
    }
  },
  computed: {
    formattedPlaceholder() {
      return this.phoneMask ? `+7 (123) 456-7890` : "Маска";
    },
  },

  methods: {
    formatPhoneNumber() {
      if (this.phone.length === 1) {
        this.phone = "7";
      }
    },

    onSubmitRegistrForm() {
      if (this.password == this.passwordConfirm) {
        console.log("1");
        const formData = {
          name: this.name,
          surname: this.surname,
          patronymic: this.npatronymicme,
          phone: this.phone,
          email: this.email,
          password: this.password,
          roleId: this.options.indexOf(this.roleId),
        };
        this.name = this.surname = this.npatronymicme = this.phone = this.email = this.password = this.passwordConfirm = "";
          this.$q.regStore.data = formData;
          this.$q.regStore.ok.fn();
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
