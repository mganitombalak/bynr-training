
export const state = () => ({
  campaigns: []
});

export const mutations = {
  setCampaign(currentState, campaigns) {
    currentState.campaigns = campaigns;
  }
};
export const actions = {
  async nuxtServerInit(storeContext, context) {
    let result = await new CampaignService().getCampaigns();
    // console.log(context.req);
    // localstorage a erisemiyoruz.
    storeContext.dispatch('setCampaign', result);
  },
  setCampaign(storeContext, payload) {
    storeContext.commit('setCampaign', payload);
  }
};
export const getters = {
  getCampaignList(currentState) {
    return currentState.campaigns;
  }
};
