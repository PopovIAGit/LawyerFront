<template>
  <div class="AdminTicketPage">
    <div class="q-pa-md">
      <q-table
        bordered
        title="Клиенты"
        :rows="rows"
        :columns="columns"
        :filter="filterName"
        row-key="name"
        color="primary"
      >
        <template #body-cell-status="props">
          <q-td :class="getStatusColor(props.row.status)">{{ props.value }} </q-td>
        </template>

        <template v-slot:top>
          <div class="container">
            <div>
              <h4>Тикеты</h4>
            </div>
            <div class="row">
              <div class="filtrInput">
                <q-input
                outlined
                dense
                debounce="300"
                color="primary"
                v-model="filterName"
                label="Поиск"
                stack-label
              >
                <template v-slot:append>
                  <q-icon name="search" />
                </template>
              </q-input>
              <q-select
                outlined
                dense
                v-model="filterStatus"
                :options="statusOptions"
                label="Статус"
                stack-label
              />
              <q-space />
              </div>

              <!-- <q-btn
                color="primary"
                :disable="loading"
                label="Добавить клиента"
                @click="addClient"
              /> -->
              <div class="dataPick">
                <q-input  v-model="date1" mask="date" :rules="['date']"  outlined dense>
                  <template v-slot:before>
                    <div>От:</div>
                  </template>
                  <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                      <q-date v-model="date1">
                        <div class="row items-center justify-end">
                          <q-btn v-close-popup label="Close" color="primary" flat />
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
              <q-input  v-model="date2" mask="date" :rules="['date']" outlined dense>
                <template v-slot:before>
                    <h7>До:</h7>
                  </template>
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                      <q-date v-model="date2">
                        <div class="row items-center justify-end">
                          <q-btn v-close-popup label="Close" color="primary" flat />
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
              </div>


            </div>
          </div>
        </template>
        <!-- <template v-slot:bottom>
              Шаблон для низа
          </template> -->
      </q-table>
    </div>
  </div>
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
  { name: "step", label: "этап", align: "left", field: "step" },
  { name: "operator", label: "Оператор", align: "left", field: "operator" },
  { name: "msg", label: "Сообщений", align: "left", field: "msg" },
];

const rows = [
  {
    name: "Смирнов Андрей Викторович",
    date: "14.09.2023",
    topic: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    status: "active",
    step: "обсуждение",
    operator: 'Елена',
    msg: 12,
  },
  {
    name: "Попов Евгений Викторович",
    date: "14.09.2023",
    topic: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    status: "unactive",
    step: "обсуждение",
    operator: 'Елена',
    msg: 42,
  },
  {
    name: "Еготов Семен Викторович",
    date: "14.09.2023",
    topic: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    status: "active",
    step: "обсуждение",
    operator: 'Елена',
    msg: 36,
  },
  {
    name: "Смирнов Рамиль Викторович",
    date: "14.09.2023",
    topic: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    status: "unactive",
    step: "обсуждение",
    operator: 'Семен',
    msg: 12,
  },
  {
    name: "Смирнов Андрей Викторович",
    date: "14.09.2023",
    topic: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    status: "active",
    step: "обсуждение",
    operator: 'Елена',
    msg: 12,
  },

];

export default defineComponent({
  name: "AdminTicketPage",

  setup() {
    return {
      columns,
      rows,
      date1: ref('2022/02/01'),
      date2: ref('2023/02/01'),
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
.AdminTicketPage {
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

      .filtrInput {
        display: flex;
        flex-direction:row;
        order: -1; /* Перемещаем в начало элементов */
        .q-input{
          margin-right: 20px;
          min-width: 200px;
          padding: 0;
        }
      }
    }

    .dataPick {
      order: 10; /* Перемещаем в конец элементов */
      display: flex;
      flex-direction:row;
      .q-input{
          margin-right: 20px;
          min-width: 200px;
          padding: 0;
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
        color: #2BCD28;
      }

      .unactiv-cell {
        // background-color:#FFCDD3;
        color: red;
      }
}
</style>
