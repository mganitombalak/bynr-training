<template>
  <button id="btnInc" @click="arttir"></button>
  <div>{{ sayi }} {{text}}</div>
</template>
<script>
import { computed,inject } from "vue";
// import { useStore } from "vuex";
export default {
  setup() {
    const store = inject('hipoStore') // useStore()
    const sayi = computed(() => store.state.sayi);
    const text = computed(() => store.state.text);
    const arttir = () => {
      store.commit("arttir");
    };
    return {
      sayi,
      text,
      arttir,
    };
  },
};
</script>