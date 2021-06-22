<template>
  <div class="d-flex flex-column">
    Kampanya List
    <!-- <p v-if="$fetchState.pending">Loading.....</p> -->
    <!-- <template v-else v-for="(campaign, index) in campaignList"> -->
    <template v-for="(campaign, index) in campaignList">
      <CampaignItem
        :key="'camp_' + index"
        :title="campaign.SloganTitle || ''"
        :imgUrl="campaign.HomePageBanner"
        :body="campaign.SloganText"
      ></CampaignItem>
    </template>

    <!-- <button @click="$fetch"></button> -->
  </div>
</template>
<script>
// import CampaignService from "../../services/campaign/service";
// import CampaignItem from "../../components/common/campaign/CampaingItem.vue";
// import {mapActions} from 'vuex';
import axios from "axios";
export default {
  // data() {
  //   return { campaigns: [] };
  // },
  head() {
    return {
      title: "Morhipo | Kampanyalar"
    };
  },
  loading: false,
  middleware: ["log"],
  // components: {
  //   CampaignItem
  // },
  // methods:{
  //   // ...mapActions:('kampayanlar',['toogle'])
  // }
  computed: {
    campaignList() {
      return this.$store.getters["campaign/getCampaignList"];
    }
  },
  // created() {
  //   // this.$store.dispatch("setCampaign", this.campaigns);
  // },
  // async fetch(context) {
  //   console.dir(this.$fetchState);
  //   console.log(process.client);
  //   let result =await new CampaignService().getCampaigns();
  //   context.store.commit("setCampaign", result);
  // },
  // fetchOnServer:true,
  // fetchDelay:
  asyncData(context) {
    if (!process.client) {
      // console.dir(context.req.headers?.cookie);
      if (context.req.headers?.cookie) {
        let authToken = context.req.headers.cookie.split("=")[1];
        let requestHeader = {
          headers: {
            'Authorization': `Bearer ${authToken}`
          }
        };
        axios.post("http://www.morhipo.com", { token: authToken },{headers:requestHeader})
        .then(r=>console.log('Morhipo pinged!'))
        .catch(e=> console.log(`${e.message} Morhipo responded ping with error with token ${authToken}`));
      }
    }
    return Promise.resolve();
  }
};
</script>
