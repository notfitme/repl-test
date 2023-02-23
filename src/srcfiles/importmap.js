const version = '3.2.45'

export default {
    imports: {
        'vue': `https://unpkg.com/@vue/runtime-dom@${version}/dist/runtime-dom.esm-browser.js`,
        '@vue/runtime-dom': `https://unpkg.com/@vue/runtime-dom@${version}/dist/runtime-dom.esm-browser.js`,
        '@vue/compiler-sfc': `https://unpkg.com/@vue/compiler-sfc@${version}/dist/compiler-sfc.esm-browser.js`,
        '@vue/server-renderer': `https://unpkg.com/@vue/server-renderer@${version}/dist/server-renderer.esm-browser.js`,
        'pinia': 'http://localhost:3303/pinia.es.js'
        // 'pinia': 'https://esm.sh/pinia@2.0.32'
        // 'pinia': 'https://www.unpkg.com/pinia@2.0.32/dist/pinia.esm-browser.js'
      }
}