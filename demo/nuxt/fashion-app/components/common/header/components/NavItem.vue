<template>
<li class="nav-item" :class="{'dropdown':isDropdown}"  v-on-hover-show>
  <nuxt-link :to="url" class="nav-link" :class="{'dropdown-toggle':isDropdown}" aria-current="page">{{title}}</nuxt-link>
  <ul v-if="isDropdown" class="dropdown-menu" aria-labelledby="navbarDropdown">
  <template v-for="(childItem,index) in subItems">
        <li :key="'subnav_'+index"><nuxt-link class="dropdown-item" :to="childItem.url">{{childItem.name}}</nuxt-link></li>
  </template>
  </ul>
</li>
</template>
<script>
export default{
  data(){
   return {isOpen:false}
  },
  props:{
    title:{
      type:String,
      required:true
    },
    url:{
      type:String,
      required:true
    },
    disabled:{
      type:Boolean,
      required:false,
      default(){return false}
    },
    subItems:{
      type:Array,
      required:false
    },
  },
  computed:{
    isDropdown(){
      return Array.isArray(this.subItems) &&this.subItems.length>0;
    }
  }
}
</script>
