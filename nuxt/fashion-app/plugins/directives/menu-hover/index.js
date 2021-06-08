import Vue from 'vue';

Vue.directive('on-hover-show', {
  bind: (el, vnode, bind) => {
    el.addEventListener('mouseenter', () => {
      let childElementContainer = el.querySelector("ul");
      if (childElementContainer) {
        childElementContainer.classList.add('show');
        childElementContainer.addEventListener('mouseleave', () => {
          childElementContainer.classList.remove('show');
        });
      }
    });
  }
})
