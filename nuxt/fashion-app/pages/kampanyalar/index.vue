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
import CampaignService from "../../services/campaign/service";
// import CampaignItem from "../../components/common/campaign/CampaingItem.vue";
// import {mapActions} from 'vuex';
export default {
  // data() {
  //   return { campaigns: [] };
  // },
  head(){
    return {
      title:'Morhipo | Kampanyalar'
    }
  },
  loading:false,
  middleware:['log'],
  // components: {
  //   CampaignItem
  // },
  // methods:{
  //   // ...mapActions:('kampayanlar',['toogle'])
  // }
  computed: {
    campaignList() {
      return this.$store.getters.getCampaignList;
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
  // asyncData(context) {
  //   // this.$route.params.id X
  //   // if (!process.client) {
  //   //   console.dir(context.req);
  //   // }
  //   const campaignService = new CampaignService();
  //   return new Promise((resolve, reject) => {
  //     setTimeout(async () => {
  //       let result = await campaignService.getCampaigns();
  //       resolve({ campaigns: result });
  //       // reject("Olaylay olaylar");
  //     }, 100);
  //   }).catch(e => context.error(e));
  // }
};
</script>
