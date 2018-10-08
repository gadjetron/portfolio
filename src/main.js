import Vue from 'vue'
import PortfolioApp from './PortfolioApp.vue'

Vue.config.productionTip = false

new Vue({
    render (h) {
            return h(PortfolioApp);
        }
    }
).$mount('#app');
