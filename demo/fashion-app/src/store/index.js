import { createStore } from 'vuex';
import pricingModule from '../store/pricing';
import authModule from '../store/auth';

const store = createStore({
    modules:{
        pricing:pricingModule,
        auth:authModule
    },
    state() {
        return {
            products: [],
            shopComponent: {
                total: 0,
                items: []
            },
        };
    },
    mutations: {
        log() {
            console.log('mutation triggered by action');
        }
    },
    actions: {
        // demo(state,commit,contextRoot,contextRootGetters){}
    },
    getters: {}
});

export default store;