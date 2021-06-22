export const state = () => ({
  campaigns: []
});

export const mutations = {
  setCampaign(currentState, campaigns) {
    currentState.campaigns = campaigns;
  }
};
export const actions = {
  // setCampaign: {
  //   root: true,
  //   handler(currentContext, payload) {
  //     currentContext.commit('setCampaign', payload);
  //   }
  // }
  setCampaign(currentContext,payload) {
    currentContext.commit('setCampaign', payload);
  }
};
export const getters = {
  getCampaignList(currentState) {
    return currentState.campaigns;
  }
};
