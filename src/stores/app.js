import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    ready: false,
    user: null,
    viewMenuState: null,
    userList: [],
    ticketList: []

  }),
  getters: {

  },
  actions: {
    set (data) {
      Object.entries(data).forEach(([key, value]) => {
        this[key] = value;
      });
    },

    /*
      выбор начального состояния бокового меню
    */
    setMenuState(state) {
      if (state === null) return;
      switch (state)
      {
        case 0:  this.viewMenuState = 10;  break;
        case 1:  this.viewMenuState = 10;  break;
        case 2:  this.viewMenuState = 10;  break;
        case 3:  this.viewMenuState = 1;  break;
      }
    },

  },
});
