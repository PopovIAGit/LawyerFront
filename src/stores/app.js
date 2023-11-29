import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    ready: false,
    user: null,
    isRegistrationForm: false
  }),
  getters: {
    getIsRegistrationForm() {
      return this.isRegistrationForm;
    },
  },
  actions: {
    set (data) {
      Object.entries(data).forEach(([key, value]) => {
        this[key] = value;
      });
    },

    toggleRegistrationForm() {
      this.isRegistrationForm = !this.isRegistrationForm;
    },
  },
});
