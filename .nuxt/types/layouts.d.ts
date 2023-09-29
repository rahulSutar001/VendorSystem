import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "adminlayout" | "authoriselayout" | "custome" | "default" | "display" | "userlayout" | "verifierlayout"
declare module "C:/Users/dell/Desktop/sample copy- updated 15-07-2022/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}