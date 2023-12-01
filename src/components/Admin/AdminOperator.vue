<template>
  <div class="AdminOperatorPage">
    <div class="q-pa-md">
    <q-table
      flat bordered
      title="Операторы"
      :rows="rows"
      :columns="columns"
      row-key="name"
      dark
      color="amber"
    />
  </div>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";

const columns = [
{
    name: 'name',
    required: true,
    label: 'ФИО',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'phone', label: 'Телефон', field: 'phone', sortable: true },
  { name: 'email', label: 'Email', field: 'email', sortable: true },
  { name: 'addres', label: 'Адрес', field: 'addres' },
  { name: 'status', label: 'Статус', field: 'status' },
  { name: 'tickets', label: 'Тикетов', field: 'tickets' }
]

const rows = [
  {
    name: 'Frozen Yogurt',
    phone: 159,
    email: 6.0,
    addres: 24,
    status: 4.0,
    tickets: 87

  },
  {
    name: 'Ice cream sandwich',
    phone: 159,
    email: 6.0,
    addres: 24,
    status: 4.0,
    tickets: 87
  }]

export default defineComponent({
  name: "AdminOperatorPage",

  setup () {
    return {
      columns,
      rows
    }
  }
})
</script>

<style lang="scss">

</style>
