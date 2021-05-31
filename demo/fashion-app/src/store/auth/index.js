const pricingModule = {
    namespaced:true,
    state(){
        return { price: 0, discount: 0.9 }
    },
    mutations:pricingMutations,
    actions:pricingActions,
    getters:pricingGetters
    // modules:{}    
};