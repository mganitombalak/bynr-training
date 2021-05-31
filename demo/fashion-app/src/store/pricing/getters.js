const pricingGetters = {
    latestPrice(currentStateSnapshot) {
        return currentStateSnapshot.price * currentStateSnapshot.discount;
    }
}

export default pricingGetters;