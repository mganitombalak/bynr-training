<template>
    <p>SHOP PAGE</p>
</template>

<script>
export default{
    created(){
        console.log('component created');
        console.log(`param: ${this.$route.params.id}`);
        console.log(`query: ${this.$route.query.test}`);
    }
}
</script>
