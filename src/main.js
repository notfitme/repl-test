import { createApp, h } from 'vue'
import { Repl, ReplStore } from '@vue/repl'
import '@vue/repl/style.css'
import importMap from './srcfiles/importMap.js'
import AppRaw from './srcfiles/App.vue?raw'
import MainLoadingRaw from './srcfiles/MainLoading.vue?raw'
import MainRaw from './srcfiles/Main.vue?raw'
import constRaw from './srcfiles/const.js?raw'

const App = {
  setup() {
    const store = new ReplStore()

    const importMapRaw = JSON.stringify(importMap, null, 2)

    store.setFiles({
      'App.vue': AppRaw,
      'import-map.json': importMapRaw,
      'Main.vue': MainLoadingRaw,
      'const.js': constRaw,
    })

    setTimeout(() => {
      store.setFiles({
        'App.vue': AppRaw,
        'import-map.json': importMapRaw,
        'Main.vue': MainRaw,
        'const.js': constRaw,
      })
    }, 1000)


    return () =>
      h(Repl, {
        store,
        ssr: false,
        sfcOptions: {
          script: {
            inlineTemplate: true
          }
        },
        showCompileOutput: true,
        showImportMap: true
      })
  }
}

createApp(App).mount('#app')
