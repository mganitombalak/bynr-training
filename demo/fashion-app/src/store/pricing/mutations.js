const pricingMutations ={
    addPrice(currentStateSnapshot, data) {
        currentStateSnapshot.price += data.newPrice;
    },
}

// module.exports={
//     pricingMutations:pricingMutations;  CommonJS/ RequireJs
// }

export default pricingMutations;  // ES MODULE