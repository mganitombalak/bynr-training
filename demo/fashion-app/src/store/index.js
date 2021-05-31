import { createStore } from 'vuex';
import pricingModule from '../store/pricing';

const store = createStore({
    modules:{
        pricing:pricingModule
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