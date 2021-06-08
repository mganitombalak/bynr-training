<template>
<div>
  <Header></Header>
  <Nuxt/>
  <Footer></Footer>
</div>
</template>
<script>
import Header from '../components/common/header/header';
import Footer from '../components/common/footer';
export default {
  components:{Header,Footer}
}
</script>
