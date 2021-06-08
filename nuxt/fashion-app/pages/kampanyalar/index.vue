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
  asyncData(context, callback) {
    const campaignService = new CampaignService();
    setTimeout(() => {
      let result=campaignService.getCampaigns();
      callback(null,{
        campaigns:result
      });
    }, 100);
  }
};
</script>
