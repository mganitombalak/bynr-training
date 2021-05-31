<template>
  <div class="mail-service">
    <i class=" fa fa-envelope"></i>
    {{getFullName}}
  </div>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
    computed:{
        ...mapGetters('auth',['getFullName']),
    }
};
</script>
