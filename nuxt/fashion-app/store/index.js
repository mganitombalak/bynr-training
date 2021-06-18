import Vuex from 'vuex';
import CampaignService from '../services/campaign/service';

const createStore = () => {
  return new Vuex.Store({
    state: {
      campaigns: []
    },
    mutations: {
      setCampaign(state, campaigns) {
        state.campaigns = campaigns;
      }
    },
    actions: {
      async nuxtServerInit(storeContext, context) {
        let result = await new CampaignService().getCampaigns();
        // console.log(context.req);
        storeContext.dispatch('setCampaign',result);
      },
      setCampaign(storeContext, payload) {
        storeContext.commit('setCampaign', payload);
      }
    },
    getters: {
      getCampaignList(state) {
        return state.campaigns;
      }
    }
  })
}

export default createStore;
