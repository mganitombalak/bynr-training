<template>
  <div>
    <p>Kampanyalar Page Component:</p>
    <nuxt-child />
    <button @click="decrement">{{'<< Previous'}}</button>
    <button @click="increment">{{'Next >>'}}</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      kampanyaId: 0
    };
  },
  methods: {
    increment(){
      this.kampanyaId+=1;
      this.$router.push(`/kampanyalar/${this.kampanyaId}`);
    },
    decrement(){
      this.kampanyaId-=1;
      this.$router.push(`/kampanyalar/${this.kampanyaId}`);
    }
  }
};
</script>
