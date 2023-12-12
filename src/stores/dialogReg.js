import { defineStore } from "pinia";

export const useDialogRegStore = defineStore("reg", {
  state: () => ({
    show: false,
    title: "",
    text: "",
    html: "",
    ok: undefined,
    cancel: undefined,
    data: null,
    role: undefined,
  }),
  getters: {}, //
  actions: {
    set(data) {
      Object.entries(data).forEach(([key, value]) => {
        this[key] = value;
      });
    },
    hide() {
      console.log("hide");
      this.show = false;
      this.title = "";
      this.text = "";
      this.html = "";
      this.ok = undefined;
      this.cancel = undefined;
      this.data = null;
      this.role = undefined;
    },
  },
});
