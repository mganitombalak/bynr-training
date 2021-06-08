<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <nuxt-link to="/">Morhipo</nuxt-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <template v-for="(menuItem,index) in menu">
            <NavItem :key="'nav_'+index"
            :title="menuItem.name"
            :url="menuItem.url"
            :sub-items="menuItem.category"/>
          </template>
        </ul>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>
<script>
import MenuService from "../../../services/menu/service";
import NavItem from './components/NavItem';
export default {
  components:{
    NavItem
  },
  data() {
    return { menu: {} };
  },
  created() {
    let menuService = new MenuService();
    this.menu = menuService.getMenuItems();
  }
};
</script>
