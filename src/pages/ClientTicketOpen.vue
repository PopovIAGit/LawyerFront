<template>
  <div class="ClientTicketOpenPages">
    <div class="ClientTicketTitle q-pa-md">
      <h4>Тикет N6</h4>
    </div>
    <div class="ClientTicketCard q-pa-md">
      <q-card class="MyCard">
        <q-card-section horizontal>
          <q-card-section>
            <q-card-section>
              <div class="text-h4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                reprehenderit optio quasi fugiat veniam illo, ab ex quod
                mollitia, omnis nobis in amet magni ut ipsam quis.
              </div>
            </q-card-section>
            <q-separator horizontal />
            <q-card-section>
              <div class="status">Статус: Открытый</div>
            </q-card-section>
            <q-separator horizontal />
            <q-card-section>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                reprehenderit optio quasi fugiat veniam illo, ab ex quod
                mollitia, omnis nobis in amet magni ut ipsam quis. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Dolorem
                reprehenderit optio quasi fugiat veniam illo, ab ex quod
                mollitia, omnis nobis in amet magni ut ipsam quis. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Dolorem
                reprehenderit optio quasi fugiat veniam illo, ab ex quod
                mollitia, omnis nobis in amet magni ut ipsam quis. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Dolorem
                reprehenderit optio quasi fugiat veniam illo, ab ex quod
                mollitia, omnis nobis in amet magni ut ipsam quis.
              </div>
            </q-card-section>
          </q-card-section>
          <q-separator vertical />
          <q-card-section class="q-pa-md">
            <div class="AvatarContainer">
              <div class="AvatarAvatar">
                <div>
                  <q-avatar size="80px">
                    <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                    <q-badge floating rounded color="green"></q-badge>
                  </q-avatar>
                </div>
                <div>
                  Алена
                </div>
              </div>

              <q-card-actions vertical class="justify-around q-pa-xs">
                <q-btn color="primary" stretch label="Открыть чат" />
                <q-btn
                  color="primary"
                  label="Закрыть тикет"
                  @click="setMenuState(2)"
                />
                <h6 class="text-h6 text-weight-bold">Документы</h6>
                <q-virtual-scroll
                  style="max-height: 300px"
                  :items="heavyList"
                  separator
                  v-slot="{ item, index }"
                >
                  <q-item :key="index" dense>
                    <q-item-section>
                      <q-item-label>
                        #{{ index }} - {{ item.label }}
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                </q-virtual-scroll>
              </q-card-actions>
            </div>
          </q-card-section>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";


const maxSize = 20;
const heavyList = [];

for (let i = 0; i < maxSize; i++) {
  heavyList.push({
    label: "Документ " + (i + 1),
  });
}

console.log(heavyList);

export default defineComponent({
  name: "ClientTicketOpenPages",
  setup() {
    return {
      heavyList,
      myGlobalVariable: false
    };
  },

  methods: {
    setMenuState(state) {
      this.$q.appStore.viewMenuState = state;
    },
  },
});
</script>
<style lang="scss">
.ClientTicketOpenPages {
  background-color: rgb(215, 230, 235);
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;

  .ClientTicketCard {
    display: flex;
    flex-direction: row;

    .MyCard {
      width: 100%;
      max-width: 1600px;

      .AvatarContainer {
        min-width: 250px;
        .AvatarAvatar {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          div {
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }
    }
  }
}
</style>
