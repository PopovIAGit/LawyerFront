<template>
  <div class="ClientStartPage">
    <div class="ClientContainer">
      <q-card class="my-card">
        <q-card-section class="q-pa-md">
          <div class="text-h4 text-weight-bold">Операторы онлайн</div>
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

        <q-card-actions class="q-pa-md">
          <q-btn class="text-weight-bold " color="primary"  @click="prompt = true">Новый тикет </q-btn>
        </q-card-actions>
      </q-card>
    </div>

      <!-- / -->
      <q-dialog v-model="prompt" persistent >
      <q-card  style="width: 700px; max-width: 80vw;">
        <q-card-section>
          <div class="text-h6 text-weight-bold ">Новый тикет</div>
        </q-card-section>

        <q-card-section class="q-pt-none" >
          <q-select outlined v-model="model" :options="options" label="Выберите тему обращения" class="q-mb-sm"/>

          <q-editor
            v-model="editor"
            class="q-mt-sm"
            :definitions="{
              bold: {label: 'Bold', icon: null, tip: 'My bold tooltip'}
      }"
    />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn label="Отмена" v-close-popup color="primary"/>
          <q-btn label="Создать тикет" v-close-popup color="primary"/>
        </q-card-actions>
      </q-card>
    </q-dialog>

  </div>
</template>
<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ClientStartPage",

  setup () {
    return {
      prompt: ref(false),
      model: ref(null),
      editor: ref(''),
      options: [
        'тема 1', 'тема 2', 'тема 3', 'тема 4', 'тема 5'
      ]

    }
  }
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
