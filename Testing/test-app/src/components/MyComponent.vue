<template>
  <button id="btnInc" @click="arttir"></button>
  <div>{{ sayi }} {{text}}</div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
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
