<template>
  <div class="sideBar-component">
    <div class="sideBar-user">
      <q-card class="my-card" flat>
        <q-card-section>
          <q-avatar size="10rem">
            <img src="https://cdn.quasar.dev/img/avatar1.jpg" />
          </q-avatar>
          <div v-if="this.$q.appStore.user.roleId == 3" class="ClientName">
            <span class="last-name">{{ this.$q.appStore.user.surname }}</span>
            <span class="first-name">{{ this.$q.appStore.user.name }}</span>
            <span class="middle-name">{{
              this.$q.appStore.user.patronymic
            }}</span>
          </div>
          <div v-else-if="this.$q.appStore.user.roleId < 3" class="ClientName">
            <span class="last-name"> {{ getRoleText() }}</span>
          </div>
        </q-card-section>
      </q-card>
    </div>
    <div class="sideBar-menu">
      <div v-if="this.$q.appStore.user.roleId == 3" class="ClientMenu">
        <q-list bordered separator>
        <q-item clickable v-ripple>
          <q-item-section>Начальная страница</q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section>Тикеты</q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section>Архив</q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section>Настройки</q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section>Настройки профиля</q-item-section>
        </q-item>
      </q-list>
      </div>
      <div v-else-if="this.$q.appStore.user.roleId < 3" class="ClientMenu">
        <q-list bordered separator>
        <q-item clickable v-ripple>
          <q-item-section>Начальная страница</q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section>Тикеты</q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section>Клиенты</q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section>Операторы</q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section>Администраторы</q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section>Настройки</q-item-section>
        </q-item>
      </q-list>
      </div>


    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "SideBarComponent",
  setup() {

    return {

    };
  },

  methods: {
    getRoleText() {
      const roleId = this.$q.appStore.user.roleId;
      const name = this.$q.appStore.user.name;
      switch (roleId) {
        case 0:
          return 'Суперадмин '+ name;
        case 1:
          return 'Админ '+ name;
        case 2:
          return 'Оператор ' + name;
        case 3:
          return 'Клиент';
        default:
          return '';
      }
    },

  },
});
</script>

