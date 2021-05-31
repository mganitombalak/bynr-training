import pricingActions from './actions';
import pricingMutations from './mutations';
import pricingGetters from './getters';
const pricingModule = {
    namespaced: true,
    state() {
        return { price: 0, discount: 0.9 }
    },
    mutations: pricingMutations,
    actions: pricingActions,
    getters: pricingGetters
    // modules:{}    
};

export default pricingModule;