<template>
  <div>
    <slot name="first"></slot>
    <slot name="second"></slot>
  </div>
</template>
<script>
export default{
  mounted(){
    // console.dir(this.$slots.first);
  }
}
</script>

