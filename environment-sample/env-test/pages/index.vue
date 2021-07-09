<template>
  <div>
    <p>Enviroment Variables</p>
    <p>Base API URL:{{baseUrl}}</p>
  </div>
</template>

<script>
export default {
  computed:{
    baseUrl() {
        return process.env.baseUrl;
    }
  }
};
</script>
