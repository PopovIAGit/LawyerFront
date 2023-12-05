<template>
  <div class="ClientTicketPage">
    <div class="ClientTicketLable q-pa-md">
      <q-card flat class="my-card">
        <q-card-section>
          <div class="text-h4 text-weight-bold ">Тикеты</div>
        </q-card-section>

        <q-card-actions class="q-pa-md">
          <q-btn-toggle
              v-model="model"
              toggle-color="primary"
              color = "white"
              text-color="black"
              :options="[
                {label: 'Открытые', value: 'one'},
                {label: 'Закрытые', value: 'two'}
              ]"
    />
        </q-card-actions>
      </q-card>
    </div>
    <div class="ClientTicketTable q-pa-md"></div>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ClientTicketPages",
  setup () {
    return {
      model: ref("one")
    }
  }
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
  .my-card{
    background-color: rgb(215, 230, 235);
  }


  .ClientTicketLable {
  }

  .ClientTicketTable {
  }
}
</style>
