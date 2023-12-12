<template>
  <q-page class="ClientTicketPage">
    <div class="ClientTicketLable q-pa-md">
      <q-card flat class="my-card">
        <q-card-section>
          <div class="text-h4 text-weight-bold">Тикеты</div>
        </q-card-section>

        <q-card-actions class="q-pa-md">
          <q-btn-toggle
            v-model="model"
            toggle-color="primary"
            color="white"
            text-color="black"
            :options="[
              { label: 'Открытые', value: 'one' },
              { label: 'Закрытые', value: 'two' },
            ]"
          />
        </q-card-actions>
      </q-card>
    </div>
    <div class="ClientTicketTable q-pl-md">
      <q-table
        :rows="rows"
        :columns="columns"
        class="q-ma-md ellipsis"
        row-key="name"
        @row-click="setMenuState(5)"
      >
        <template #body-cell-operator="props">
          <q-td>
            <div class="q-gutter-xs">
              <q-avatar>
                <img
                  src="https://cdn.quasar.dev/img/boy-avatar.png"
                  alt="Avatar"
                />
              </q-avatar>
              <q-label class="q-ml-md">{{ props.value }}</q-label>
            </div>
          </q-td>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
const columns = [
  {
    name: "openDate",
    required: true,
    label: "Дата открытия",
    align: "left",
    format: (val) => `${val}`,
    field: "openDate",
    sortable: true,
  },
  {
    name: "title",
    align: "center",
    label: "Название",
    field: "title",
    sortable: true,
    align: "left",
  },
  {
    name: "operator",
    label: "Консультант",
    field: "operator",
    sortable: false,
    align: "left",
  },
];

const rows = [
  {
    openDate: "14 сентября, 2022",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui repellendus quae amet,quaerat totam obcaecati!  Inventore ducimus fugiat officia veritatis!",
    operator: "Ира",
  },
  {
    openDate: "14 сентября, 2022",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui repellendus quae amet,quaerat totam obcaecati!  Inventore ducimus fugiat officia veritatis! ",
    operator: "Аня",
  },
  {
    openDate: "14 сентября, 2022",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui repellendus quae amet,quaerat totam obcaecati!  Inventore ducimus fugiat officia veritatis! ",
    operator: "Света",
  },
  {
    openDate: "14 сентября, 2022",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui repellendus quae amet,quaerat totam obcaecati!  Inventore ducimus fugiat officia veritatis! ",
    operator: "Марина",
  },
];

export default defineComponent({
  name: "ClientTicketPages",
  setup() {
    return {
      model: ref("one"),
      columns,
      rows,
    };
  },
  methods: {

  },
});
</script>
<style lang="scss">
.ClientTicketPage {
  background-color: rgb(215, 230, 235);
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  .my-card {
    background-color: rgb(215, 230, 235);
  }

  .ClientTicketLable {
  }

  .ClientTicketTable {
  }

  .my-card-text {
    width: 100%;
    max-width: 250px;
  }
}
</style>
