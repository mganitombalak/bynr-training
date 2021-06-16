<template>
  <div class="d-flex flex-column">
    Kampanya List
    <template v-for="(campaign, index) in campaigns">
      <CampaignItem
        :key="'camp_' + index"
        :title="campaign.SloganTitle || ''"
        :imgUrl="campaign.HomePageBanner"
        :body="campaign.SloganText"
      ></CampaignItem>
    </template>
  </div>
</template>
<script>
import CampaignService from "../../services/campaign/service";
import CampaignItem from "../../components/common/campaign/CampaingItem.vue";
export default {
  data() {
    return { campaigns: [] };
  },
  components: {
    CampaignItem
  },
  asyncData(context) {
    // this.$route.params.id X
    if (!process.client) {
      console.dir(context.req);
    }
    const campaignService = new CampaignService();
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let result = campaignService.getCampaigns();
        resolve({ campaigns: result });
        // reject("Olaylay olaylar");
      }, 100);
    }).catch(e=>context.error(e));
  }
};
</script>
