<template>
  <q-page class="indexPage">
    <div class="containerForClient" v-if="this.$q.appStore.user.roleId == 3">
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
              <q-btn
                class="text-weight-bold"
                color="primary"
                @click="prompt = true"
                >Новый тикет
              </q-btn>
            </q-card-actions>
          </q-card>
        </div>

        <!-- / -->
        <q-dialog v-model="prompt" persistent>
          <q-card style="width: 700px; max-width: 80vw">
            <q-card-section>
              <div class="text-h6 text-weight-bold">Новый тикет</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              <q-select
                outlined
                v-model="model"
                :options="options"
                label="Выберите тему обращения"
                class="q-mb-sm"
              />

              <q-editor
                v-model="editor"
                class="q-mt-sm"
                :definitions="{
                  bold: { label: 'Bold', icon: null, tip: 'My bold tooltip' },
                }"
              />
            </q-card-section>

            <q-card-actions align="right" class="text-primary">
              <q-btn label="Отмена" v-close-popup color="primary" />
              <q-btn label="Создать тикет" v-close-popup color="primary" />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </div>
    </div>
    <diV class="containerForAdmin" v-if="this.$q.appStore.user.roleId <= 2">
      <div class="AdminStartPage">
        <div class="q-pa-md">
          <div class="container">
            <div class="row">
              <div class="operatorContainer">
                <div class="operatorTitle">
                  <div class="operatorOnline">
                    <q-card class="my-card" bordered>
                      <q-card-section bordered>
                        <q-item-section>
                          <q-card-section horizontal>
                            <q-item-label class="text-weight-bold text-h6"
                              >Операторы</q-item-label
                            >
                            <div class="online">
                              <q-item-label caption> Онлайн:3 </q-item-label>
                            </div>
                          </q-card-section>
                        </q-item-section>
                      </q-card-section>
                      <q-card-section horizontal>
                        <q-card-section avatar>
                          <q-avatar>
                            <img
                              src="https://cdn.quasar.dev/img/boy-avatar.png"
                            />
                            <q-badge floating rounded color="green"></q-badge>
                          </q-avatar>
                          <q-item-label caption class="q-pt-xs text-center">
                            Игорь
                          </q-item-label>
                        </q-card-section>
                        <q-card-section avatar>
                          <q-avatar>
                            <img
                              src="https://cdn.quasar.dev/img/boy-avatar.png"
                            />
                            <q-badge floating rounded color="green"></q-badge>
                          </q-avatar>
                          <q-item-label caption class="q-pt-xs text-center">
                            Игорь
                          </q-item-label>
                        </q-card-section>
                        <q-card-section avatar>
                          <q-avatar>
                            <img
                              src="https://cdn.quasar.dev/img/boy-avatar.png"
                            />
                            <q-badge floating rounded color="green"></q-badge>
                          </q-avatar>
                          <q-item-label caption class="q-pt-xs text-center">
                            Игорь
                          </q-item-label>
                        </q-card-section>
                        <q-card-section avatar>
                          <q-avatar class="custom-avatar">
                            <img
                              src="https://cdn.quasar.dev/img/boy-avatar.png"
                            />
                          </q-avatar>
                          <q-item-label caption class="q-pt-xs text-center">
                            Игорь
                          </q-item-label>
                        </q-card-section>
                        <q-card-section avatar>
                          <q-avatar class="custom-avatar">
                            <img
                              src="https://cdn.quasar.dev/img/boy-avatar.png"
                            />
                          </q-avatar>
                          <q-item-label caption class="q-pt-xs text-center">
                            Игорь
                          </q-item-label>
                        </q-card-section>
                        <q-card-section avatar>
                          <q-avatar class="custom-avatar">
                            <img
                              src="https://cdn.quasar.dev/img/boy-avatar.png"
                            />
                          </q-avatar>
                          <q-item-label caption class="q-pt-xs text-center">
                            Игорь
                          </q-item-label>
                        </q-card-section>
                      </q-card-section>
                    </q-card>
                  </div>
                </div>
              </div>
              <div class="ticketContainer">
                <div class="ticketNumber">
                  <q-card class="my-card" bordered>
                    <q-card-section class="q-pa-sm" bordered>
                      <q-item-section>
                        <q-card-section horizontal>
                          <q-item-label class="text-weight-bold text-h6"
                            >Тикеты</q-item-label
                          >
                          <div class="online">
                            <q-item-label caption> Всего:153 </q-item-label>
                          </div>
                        </q-card-section>
                      </q-item-section>
                    </q-card-section>
                    <q-card-section horizontal class="cardSectionRow">
                      <q-card>
                        <q-card-section class="q-pa-sm">
                          <div
                            class="text-h4 text-center text-weight-bold text-green"
                          >
                            8
                          </div>
                        </q-card-section>
                        <q-card-section
                          class="q-pa-sm text-green text-weight-bold"
                        >
                          открытых
                        </q-card-section>
                      </q-card>
                      <q-card>
                        <q-card-section class="q-pa-sm">
                          <div
                            class="text-h4 text-center text-weight-bold text-grey"
                            color="primary"
                          >
                            7
                          </div>
                        </q-card-section>

                        <q-card-section
                          class="q-pa-sm text-grey text-weight-bold"
                          >завершенных</q-card-section
                        >
                      </q-card>
                      <q-card>
                        <q-card-section class="q-pa-sm">
                          <div
                            class="text-h4 text-center text-weight-bold text-red"
                          >
                            7
                          </div>
                        </q-card-section>

                        <q-card-section
                          class="q-pa-sm text-red text-weight-bold"
                          >отложенных</q-card-section
                        >
                      </q-card>
                      <q-card>
                        <q-card-section class="q-pa-sm">
                          <div
                            class="text-h4 text-center text-weight-bold text-blue"
                          >
                            15
                          </div>
                        </q-card-section>

                        <q-card-section
                          class="q-pa-sm text-blue text-weight-bold"
                        >
                          ожидающих
                        </q-card-section>
                      </q-card>
                    </q-card-section>
                  </q-card>
                </div>
              </div>
            </div>
          </div>

          <q-table
            bordered
            title="Новые тикеты"
            :rows="rows"
            :columns="columns"
            :filter="filterName"
            row-key="name"
            color="primary"
          >
            <template #body-cell-status="props">
              <q-td :class="getStatusColor(props.row.status)"
                >{{ props.value }}
              </q-td>
            </template>

            <!-- <template v-slot:top>

        </template> -->
            <!-- <template v-slot:bottom>
              Шаблон для низа
          </template> -->
          </q-table>
        </div>
      </div>
      <registr-component />
    </diV>

    <!-- <div class="admin" v-if="this.$q.appStore.viewMenuState == 10">
          <AdminStartVue/>
      </div>
      <div class="admin" v-else-if="this.$q.appStore.viewMenuState == 11">
        <AdminTicketVue/>
      </div>
      <div class="admin" v-else-if="this.$q.appStore.viewMenuState == 12">
        <AdminClientVue/>
      </div>
      <div class="admin" v-else-if="this.$q.appStore.viewMenuState == 13">
        <AdminOperatorVue/>
      </div>
      <div class="admin" v-else-if="this.$q.appStore.viewMenuState == 14">
        <AdminAdminVue/>
      </div>
      <div class="admin" v-else-if="this.$q.appStore.viewMenuState == 15">
        <Settings/>
      </div > -->

    <!-- <div class="client" v-if="this.$q.appStore.viewMenuState == 1">
              <ClientStartVue/>
          </div>
          <div class="client" v-else-if="this.$q.appStore.viewMenuState == 2">
            <ClientTicket/>
          </div>
          <div class="client" v-else-if="this.$q.appStore.viewMenuState == 3">
            <ClientArchVue/>
          </div>
          <div class="client" v-else-if="this.$q.appStore.viewMenuState == 4">
            <Settings/>
          </div>
          <div class="client" v-else-if="this.$q.appStore.viewMenuState == 5">
            <ClientTicketOpen/>
          </div> -->
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";

import ChatComponent from "src/components/ChatComponent.vue";
import RegistrComponent from "src/components/RegistrComponent.vue";

const columns = [
  {
    name: "name",
    required: true,
    label: "ФИО",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "date",
    label: "Дата открытия",
    align: "left",
    field: "date",
    sortable: true,
  },
  {
    name: "topic",
    label: "Тема",
    align: "left",
    field: "topic",
    sortable: true,
  },
  { name: "status", label: "Статус", align: "left", field: "status" },
  { name: "step", label: "Этап", align: "left", field: "step" },
  { name: "operator", label: "Оператор", align: "left", field: "operator" },
  { name: "msg", label: "Сообщений", align: "left", field: "msg" },
];

const rows = [
  {
    name: "Смирнов Андрей Викторович",
    date: "14.09.2023",
    topic: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    status: "active",
    step: "обсуждение",
    operator: "Елена",
    msg: 12,
  },
  {
    name: "Попов Евгений Викторович",
    date: "14.09.2023",
    topic: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    status: "unactive",
    step: "обсуждение",
    operator: "Елена",
    msg: 42,
  },
  {
    name: "Еготов Семен Викторович",
    date: "14.09.2023",
    topic: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    status: "active",
    step: "обсуждение",
    operator: "Елена",
    msg: 36,
  },
  {
    name: "Смирнов Рамиль Викторович",
    date: "14.09.2023",
    topic: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    status: "unactive",
    step: "обсуждение",
    operator: "Семен",
    msg: 12,
  },
  {
    name: "Смирнов Андрей Викторович",
    date: "14.09.2023",
    topic: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    status: "active",
    step: "обсуждение",
    operator: "Елена",
    msg: 12,
  },
];

export default defineComponent({
  name: "IndexPage",

  setup() {
    return {
      id: ref(""),
      prompt: ref(false),
      model: ref(null),
      editor: ref(""),
      options: ["тема 1", "тема 2", "тема 3", "тема 4", "тема 5"],

      columns,
      rows,
      date1: ref("2022/02/01"),
      date2: ref("2023/02/01"),
      filterName: ref(""),
      filterStatus: ref("активные"),
    };
  },

  components: {
    ChatComponent,
    RegistrComponent,
  },

  computed: {
    statusOptions() {
      // Возможные значения статуса для q-select
      return [
        { label: "активные", value: "active" },
        { label: "не активные", value: "unactive" },
      ];
    },
  },

  methods: {
    addClient() {
      // Логика добавления новой строки
    },
    getStatusColor(status) {
      return status === "active" ? "activ-cell" : "unactiv-cell";
    },
  },
});
</script>

<style lang="scss">
</style>
