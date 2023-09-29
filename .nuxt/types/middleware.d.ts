import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "C:/Users/dell/Desktop/sample copy- updated 15-07-2022/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}