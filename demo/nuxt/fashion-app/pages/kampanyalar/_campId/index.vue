<template>
  <p>Kampanya : {{ $route.params.campId }}</p>
</template>
<script>
export default {
  validate(context) {
    return /^\d*$/.test(context.params.campId);
  }
};
</script>
