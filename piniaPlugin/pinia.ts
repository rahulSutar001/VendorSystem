// import {createPinia} from 'pinia'

// export default createPinia()

import { useDataStore } from '~~/store/dataStore'


export default defineNuxtPlugin(({$pinia}) => {
    return {
        provide: {
            store: useDataStore($pinia)
        }
    }
} )