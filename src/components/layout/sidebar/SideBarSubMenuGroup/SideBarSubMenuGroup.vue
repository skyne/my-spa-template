<template>
  <li
    class="treeview"
    :class="classObject"
    @click="isActive = !isActive"
  >
    <slot name="link" />
    <ul class="treeview-menu">
      <slot />
    </ul>
  </li>
</template>
<script>
export default {
  name: 'SideBarSubMenuGroupView',
  props: {
    link: Object
  },
  data: () => {
    console.log(this.link);
    return {
      isActive: false
    };
  },
  computed: {
    classObject() {
      return {
        active: this.isActive
      };
    }
  }
};
</script>
