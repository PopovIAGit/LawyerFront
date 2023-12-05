<template>
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
                    <q-card-section avatar>
                      <q-avatar class="custom-avatar">
                        <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                      </q-avatar>
                      <q-item-label caption class="q-pt-xs text-center">
                        Игорь
                      </q-item-label>
                    </q-card-section>
                    <q-card-section avatar>
                      <q-avatar class="custom-avatar">
                        <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                      </q-avatar>
                      <q-item-label caption class="q-pt-xs text-center">
                        Игорь
                      </q-item-label>
                    </q-card-section>
                    <q-card-section avatar>
                      <q-avatar class="custom-avatar">
                        <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
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
                    <q-card-section class="q-pa-sm text-green text-weight-bold">
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

                    <q-card-section class="q-pa-sm text-grey text-weight-bold"
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

                    <q-card-section class="q-pa-sm text-red text-weight-bold"
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

                    <q-card-section class="q-pa-sm text-blue text-weight-bold">
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
  <h1>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, nisi.
    Consequatur, repellendus! Nesciunt, maiores iusto!
  </h1>
</template>
<script>
import { defineComponent, ref } from "vue";

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
  name: "AdminStartPage",

  setup() {
    return {
      columns,
      rows,
      date1: ref("2022/02/01"),
      date2: ref("2023/02/01"),
      filterName: ref(""),
      filterStatus: ref("активные"),
    };
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
.AdminStartPage {
  background-color: rgb(215, 230, 235);
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;

  .container {
    display: flex;
    flex-direction: column;
    width: 100%;

    .row {
      display: flex;
      align-items: center;
      justify-content: space-between; /* Выравнивание по краям */

      .operatorContainer {
        display: flex;
        flex-direction: row;
        order: -1; /* Перемещаем в начало элементов */
        .operatorOnline {
          max-height: 160px;
          .q-card {
            height: 150px;
          }
        }
      }

      .ticketContainer {
        order: 10;
        /* Перемещаем в конец элементов */
        display: flex;
        flex-direction: row;
        .ticketNumber {
          max-height: 160px;
          .cardSectionRow {
            height: 110px;
          }
        }
      }
    }
  }

  h4 {
    text-align: left;
    /* сверху | справа | снизу | слева */
    margin: 20px 0 20px auto;
    font-weight: 700;
    font-size: 36px;
    line-height: normal;
  }

  .activ-cell {
    // background-color: #DCEDC8;
    color: #2bcd28;
  }

  .unactiv-cell {
    // background-color:#FFCDD3;
    color: red;
  }

  .online {
    margin: 0;
    display: flex;
    flex-direction: row;

    .q-item-label {
      margin: 0;
    }
  }

  .my-card {
    max-width: 650px;
    min-width: auto;
    margin-bottom: 10px;
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
