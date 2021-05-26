<template>
  <div>
    <slot name="first"></slot>
    <slot name="second"></slot>
  </div>
</template>
<script>
export default{
  inject:['key'],
  mounted(){
    console.dir(this.$slots.first);
  }
}
</script>

