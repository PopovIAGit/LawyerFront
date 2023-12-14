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
          <q-item clickable v-ripple to="/" :class="{'active' : $route.path === '/'}" exact>
            <q-item-section>Начальная страница</q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/clientTicket" :class="{'active':  $route.path === '/clientTicket' ||  $route.path === '/clientTicketOpen'  }">
            <q-item-section>Тикеты</q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/clientArch" :class="{'active' : $route.path === '/clientArch'}">
            <q-item-section>Архив</q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/settings" :class="{'active' : $route.path === '/settings'}">
            <q-item-section>Настройки</q-item-section>
          </q-item>
        </q-list>
      </div>
      <div v-else-if="this.$q.appStore.user.roleId < 3" class="ClientMenu">
        <q-list bordered separator>
          <q-item clickable v-ripple to="/" :class="{'active' : $route.path === '/'}" exact>
            <q-item-section>Начальная страница</q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/adminTicket" :class="{'active' : $route.path === '/adminTicket'}">
            <q-item-section>Тикеты</q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/adminClient" :class="{'active' : $route.path === '/adminClient'}">
            <q-item-section>Клиенты</q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/adminOperator" :class="{'active' : $route.path === '/adminOperator'}">
            <q-item-section>Операторы</q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/adminAdmin" :class="{'active' : $route.path === '/adminAdmin'}">
            <q-item-section>Администраторы</q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/settings" :class="{'active' : $route.path === '/settings'}">
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

