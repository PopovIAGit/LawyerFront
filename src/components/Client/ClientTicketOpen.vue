<template>
  <div class="ClientTicketOpenPages"
  @click="setMenuState(2)"
  >
      <div class="ClientTicketTitle q-pa-md">
        <h6>Тикет</h6>
      </div>
      <div class="ClientTicketCard q-pa-md">
          <q-card>
            <q-card-section>

            </q-card-section>
          </q-card>
      </div>
  </div>
</template>
<script>
export default {
  name: "ClientTicketOpenPages",
  methods: {
    setMenuState(state) {
      this.$q.appStore.viewMenuState = state;
    },
  }
}
</script>
<style lang="scss">
  .ClientTicketOpenPages{
    background-color: rgb(215, 230, 235);
    width: 100%;
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;

    .ClientTicketCard{
      display: flex;
      flex-direction: row;

    }
  }
</style>
