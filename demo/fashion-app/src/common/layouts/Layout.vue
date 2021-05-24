<template> 
<TheHeader></TheHeader>
<router-view></router-view>
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
