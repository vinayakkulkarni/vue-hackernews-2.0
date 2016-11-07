// polyfill Promise
require('es6-promise').polyfill()

// setup Sentry for client-side error tracking
import Vue from 'vue'
import Raven from 'raven-js'
import RavenVue from 'raven-js/plugins/vue'

Raven
  .config('https://3e4707b9e6f44859b0114d26ec5539a5@sentry.io/112601')
  .addPlugin(RavenVue, Vue)
  .install()

import { app, store } from './app'

// prime the store with server-initialized state.
// the state is determined during SSR and inlined in the page markup.
store.replaceState(window.__INITIAL_STATE__)

// actually mount to DOM
app.$mount('#app')
