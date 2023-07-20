// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')

import { defineCustomElement } from 'vue'
import CounterView from "./components/CounterView.vue"

const element = defineCustomElement(CounterView);

customElements.define('my-counter',element);