<template>
  <div class="ClientStartPage">
    <div class="ClientContainer">
      <q-card class="my-card">
        <q-card-section class="q-pa-sm">
          <div class="text-h6">Операторы онлайн</div>
        </q-card-section>
        <q-card-section horizontal>
          <q-card-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
              <q-badge floating rounded color="green"></q-badge>
            </q-avatar>
            <q-item-label caption class="q-pt-xs text-center">
              Игорь
            </q-item-label>
          </q-card-section>
          <q-card-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
              <q-badge floating rounded color="green"></q-badge>
            </q-avatar>
            <q-item-label caption class="q-pt-xs text-center">
              Игорь
            </q-item-label>
          </q-card-section>
          <q-card-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
              <q-badge floating rounded color="green"></q-badge>
            </q-avatar>
            <q-item-label caption class="q-pt-xs text-center">
              Игорь
            </q-item-label>
          </q-card-section>
        </q-card-section>
        <q-separator dark />

        <q-card-actions>
          <q-btn class="text-weight-bold" color="primary">Новый тикет </q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ClientStartPage",
});
</script>
<style lang="scss">
.ClientStartPage {
  background-color: rgb(215, 230, 235);
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  .ClientContainer {
    padding: 16px;

    .my-card {
    }
  }

  .custom-avatar {
    position: relative;
  }

  .custom-avatar::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    background-color: rgba(
      0,
      0,
      0,
      0.4
    ); /* Adjust the transparency and color of the mask as desired */
    z-index: 10;
  }

  .custom-avatar img {
    position: relative;
    z-index: 1;
  }
}
</style>
