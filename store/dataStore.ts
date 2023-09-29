import { defineStore } from "pinia";
import { object, string } from "superstruct";

export const useDataStore = defineStore('data', {
    state: () => ({
        sharedata: "Rahul DS",
        cookiedata: {}
    }),
    actions: {
        setsahredcookie(data : Object) {
            this.cookiedata = data
        },
    },

    getters: {
        getcookie: (state) => state
    }
})