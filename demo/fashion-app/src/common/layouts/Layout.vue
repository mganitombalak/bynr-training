<template> 
<TheHeader></TheHeader>
<router-view></router-view>
<!-- <router-view name="namedroute"></router-view> -->
<TheFooter></TheFooter>
</template>

<script>
import TheHeader from "../components/TheHeader";
import TheFooter from "../components/TheFooter";
export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>
// beforeUnmount(){
  //   // modal.show({component:Gani,title:"Bak gidiyorum",buttonOptions:['OK']});
  //   // modal.show({component:Hopi,title:"Hopi gidiyorum",buttonOptions:['OK']});
  // }