<template>
  <div class="card" style="width: 18rem;">
    <img class="card-img-top" :src="'https://img-morhipo.mncdn.com/'+imgUrl" :alt="title"/>
    <div class="card-body">
      <h5 class="card-title">{{title}}</h5>
      <p class="card-text">
        {{body}}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    imgUrl: {
      type: String
    },
    body: {
      type: String
    }
  }
};
</script>
