import CampaignService from "../services/campaign/service";
export const state = () => ({
  global: null
});

export const actions = {
  async nuxtServerInit(storeContext, context) {
    let result = await new CampaignService().getCampaigns();
    storeContext.dispatch("campaign/setCampaign", result);
  },
};
