<template>
  <div class="AdminOperatorPage">
    <div class="q-pa-md">
      <q-table
        bordered
        title="Операторы"
        :rows="rows"
        :columns="columns"
        :filter="filterName"
        row-key="name"
        color="primary"
      >
        <template v-slot:top>
          <div class="container">
            <div>
              <h4>Операторы</h4>
            </div>
            <div class="row">
              <q-input
                outlined
                dense
                debounce="300"
                color="primary"
                v-model="filterName"
                label="Поиск"
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
              />
              <q-space />
              <q-btn
                color="primary"

                :disable="loading"
                label="Добавить оператора"
                @click="addClient"
              />
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
    name: "phone",
    label: "Телефон",
    align: "left",
    field: "phone",
    sortable: true,
  },
  {
    name: "email",
    label: "Email",
    align: "left",
    field: "email",
    sortable: true,
  },
  { name: "addres", label: "Адрес", align: "left", field: "addres" },
  { name: "status", label: "Статус", align: "left", field: "status" },
  { name: "tickets", label: "Тикетов", align: "left", field: "tickets" },
];

const rows = [
  {
    name: "Смирнов Андрей Викторович",
    phone: "+7(000) 000 0000",
    email: "my@mail.com",
    addres: "some addres",
    status: "activ",
    tickets: 12,
  },
  {
    name: "Смирнов Сергей Викторович",
    phone: "+7(000) 000 0000",
    email: "my@mail.com",
    addres: "some addres",
    status: "activ",
    tickets: 12,
  },
  {
    name: "Смирнов Вадим Викторович",
    phone: "+7(000) 000 0000",
    email: "my@mail.com",
    addres: "some addres",
    status: "activ",
    tickets: 12,
  },
  {
    name: "Смирнов Иван Викторович",
    phone: "+7(000) 000 0000",
    email: "my@mail.com",
    addres: "some addres",
    status: "activ",
    tickets: 12,
  },
  {
    name: "Смирнов Руслан Викторович",
    phone: "+7(000) 000 0000",
    email: "my@mail.com",
    addres: "some addres",
    status: "activ",
    tickets: 12,
  },
  {
    name: "Смирнов Игорь Викторович",
    phone: "+7(000) 000 0000",
    email: "my@mail.com",
    addres: "some addres",
    status: "activ",
    tickets: 12,
  },
  {
    name: "Смирнов Андрей Викторович",
    phone: "+7(000) 000 0000",
    email: "my@mail.com",
    addres: "some addres",
    status: "activ",
    tickets: 12,
  },
  {
    name: "Смирнов Андрей Викторович",
    phone: "+7(000) 000 0000",
    email: "my@mail.com",
    addres: "some addres",
    status: "activ",
    tickets: 12,
  },
];

export default defineComponent({
  name: "AdminOperatorPage",

  setup() {
    return {
      columns,
      rows,

      filterName: ref(""),
      filterStatus: ref("активные"),
    };
  },

  computed: {
    statusOptions() {
      // Возможные значения статуса для q-select
      return [
        { label: "активные", value: "activ" },
        { label: "не активные", value: "unactiv" },
      ];
    },
  },

  methods: {
    addClient() {
      // Логика добавления новой строки
    },
  },
});
</script>

<style lang="scss">
.AdminOperatorPage {
  background-color: #d0d0d6;
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

          .q-input,
          .q-select {
            order: -1; /* Перемещаем в начало элементов */
            border-radius: 8px;
            border: 1px solid #D9D9D9;
            margin-right: 20px;
            min-width: 200px;
        }
          }

    .q-btn {
      order: 10; /* Перемещаем в конец элементов */
    }
  }



  h4 {
    text-align: left;
    /* сверху | справа | снизу | слева */
    margin: 10px 0 10px auto;
    font-weight: 700;
    font-size: 36px;
    line-height: normal;
  }

}
</style>
