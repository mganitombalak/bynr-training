<template>
  <div class="mail-service">
    <i class=" fa fa-envelope"></i>
    {{userName}}
  </div>
</template>
<script>
export default {
    computed:{
        userName(){
            return this.$store?.userInfo?.email || "No Logged In Yet" ;
        }
    }
};
</script>
