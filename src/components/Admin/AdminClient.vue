<template>
  <div class="AdminClientPage">
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
              <h4>Клиенты</h4>
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
                label="Добавить клиента"
                @click="onClickAddClient"
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
    status: "active",
    tickets: 12,
  },
  {
    name: "Смирнов Сергей Викторович",
    phone: "+7(000) 000 0000",
    email: "my@mail.com",
    addres: "some addres",
    status: "unactive",
    tickets: 12,
  },
  {
    name: "Смирнов Вадим Викторович",
    phone: "+7(000) 000 0000",
    email: "my@mail.com",
    addres: "some addres",
    status: "unactive",
    tickets: 12,
  },
  {
    name: "Смирнов Иван Викторович",
    phone: "+7(000) 000 0000",
    email: "my@mail.com",
    addres: "some addres",
    status: "active",
    tickets: 12,
  },
  {
    name: "Смирнов Руслан Викторович",
    phone: "+7(000) 000 0000",
    email: "my@mail.com",
    addres: "some addres",
    status: "active",
    tickets: 12,
  },
  {
    name: "Смирнов Игорь Викторович",
    phone: "+7(000) 000 0000",
    email: "my@mail.com",
    addres: "some addres",
    status: "active",
    tickets: 12,
  },
  {
    name: "Смирнов Андрей Викторович",
    phone: "+7(000) 000 0000",
    email: "my@mail.com",
    addres: "some addres",
    status: "active",
    tickets: 12,
  },
  {
    name: "Смирнов Андрей Викторович",
    phone: "+7(000) 000 0000",
    email: "my@mail.com",
    addres: "some addres",
    status: "active",
    tickets: 12,
  },
];

export default defineComponent({
  name: "AdminClientPage",
  components: {

  },
  setup() {
    return {
      columns,
      rows,
      addClient: ref(false),
      filterName: ref(""),
      filterStatus: ref("активные"),
      personData: ref(null), // данные для отправки в форму
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

    onClickAddClient() {
          this.$q.regStore.set({
            show: true,
            title: "Добавить клиента",
            ok:{
              label:"Добавить",
              fn: () =>{
                      console.log("some data",this.$q.regStore.data),
                      this.$q.ws.call(
                        "person",
                        "add",
                        {
                          person: {
                            name: this.$q.regStore.data.name,
                            surname: this.$q.regStore.data.surname,
                            patronymic: this.$q.regStore.data.npatronymicme,
                            phone: this.$q.regStore.data.phone,
                            email: this.$q.regStore.data.email,
                            password: this.$q.regStore.data.password,
                            roleId: 3,
                          },
                        },
                        (response) => {
                          console.log("response message", response);
                        },
                        (error) => {
                          console.log(error);
                        }
                      );
                      this.$q.regStore.show = false;
                    }
                  },
                  cancel:{ }
                })
    },

    getStatusColor(status) {
      return status === "active" ? "activ-cell" : "unactiv-cell";
    },
  },
});
</script>

<style lang="scss">
.AdminClientPage {
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

      .q-input,
      .q-select {
        order: -1; /* Перемещаем в начало элементов */
        border-radius: 8px;
        border: 1px solid #d9d9d9;
        margin-right: 20px;
        min-width: 200px;
      }
    }

    .q-btn {
      order: 10; /* Перемещаем в конец элементов */
    }
  }

  .q-badge {
    align-items: center;
    justify-content: center;
    inline-size: auto;
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
