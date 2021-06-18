<template>
  <div>
    <Header></Header>
    <Nuxt />
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "../components/common/header/header";
import Footer from "../components/common/footer";
export default {
  middleware: ["auth"],
  components: { Header, Footer },
};
</script>
