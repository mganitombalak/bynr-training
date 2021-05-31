const pricingActions={
    addPrice(actionContext, data) {
        // actionContext.commit('log');
        actionContext.commit('addPrice', data);
    }
}
export default pricingActions;