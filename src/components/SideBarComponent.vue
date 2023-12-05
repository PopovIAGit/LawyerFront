<template>
  <div class="sideBar-component">
    <div class="sideBar-user">
      <q-card class="my-card" flat>
        <q-card-section>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar1.jpg" />
          </q-avatar>
          <div v-if="this.$q.appStore.user.roleId == 3" class="ClientName">
            <div class="last-name">{{ this.$q.appStore.user.surname }}</div>
            <div class="first-name">{{ this.$q.appStore.user.name }}</div>
            <div class="middle-name">
              {{ this.$q.appStore.user.patronymic }}
            </div>
          </div>
          <div v-else-if="this.$q.appStore.user.roleId < 3" class="ClientName">
            <div class="last-name">{{ getRoleText() }}</div>
          </div>
        </q-card-section>
      </q-card>
    </div>
    <div class="sideBar-menu">
      <div v-if="this.$q.appStore.user.roleId == 3" class="ClientMenu">
        <q-list bordered separator>
          <q-item clickable v-ripple @click="setMenuState(1)" :class="{'active': getMenuState() === 1}">
            <q-item-section>Начальная страница</q-item-section>
          </q-item>
          <q-item clickable v-ripple @click="setMenuState(2)" :class="{'active': getMenuState() === 2}">
            <q-item-section>Тикеты</q-item-section>
          </q-item>
          <q-item clickable v-ripple @click="setMenuState(3)" :class="{'active': getMenuState() === 3}">
            <q-item-section>Архив</q-item-section>
          </q-item>
          <q-item clickable v-ripple @click="setMenuState(4)" :class="{'active': getMenuState() === 4}">
            <q-item-section>Настройки</q-item-section>
          </q-item>
        </q-list>
      </div>
      <div v-else-if="this.$q.appStore.user.roleId < 3" class="ClientMenu">
        <q-list bordered separator>
          <q-item clickable v-ripple @click="setMenuState(10)" :class="{'active': getMenuState() === 10}">
            <q-item-section>Начальная страница</q-item-section>
          </q-item>
          <q-item clickable v-ripple @click="setMenuState(11)" :class="{'active': getMenuState() === 11}">
            <q-item-section>Тикеты</q-item-section>
          </q-item>
          <q-item clickable v-ripple @click="setMenuState(12)" :class="{'active': getMenuState() === 12}">
            <q-item-section>Клиенты</q-item-section>
          </q-item>
          <q-item clickable v-ripple @click="setMenuState(13)" :class="{'active': getMenuState() === 13}">
            <q-item-section>Операторы</q-item-section>
          </q-item>
          <q-item clickable v-ripple @click="setMenuState(14)" :class="{'active': getMenuState() === 14}">
            <q-item-section>Администраторы</q-item-section>
          </q-item>
          <q-item clickable v-ripple @click="setMenuState(15)" :class="{'active': getMenuState() === 15}">
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
    return {};
  },

  methods: {
    setMenuState(state) {
      this.$q.appStore.viewMenuState = state;
    },
    getMenuState(){
        return this.$q.appStore.viewMenuState;
    },

    getRoleText() {
      const roleId = this.$q.appStore.user.roleId;
      const name = this.$q.appStore.user.name;
      switch (roleId) {
        case 0:
          return "Суперадмин " + name;
        case 1:
          return "Админ " + name;
        case 2:
          return "Оператор " + name;
        case 3:
          return "Клиент";
        default:
          return "";
      }
    },
  },
});
</script>

