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
  middleware: ["auth","log"], // Middleware run as it is ordered. SIRA ONEMLI
  components: { Header, Footer },
};
</script>
