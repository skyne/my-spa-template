<template>
    <li v-on:click="isActive = !isActive" class="treeview" v-bind:class="classObject">
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
    classObject: function () {
        return {
            active: this.isActive,
        };
    }
  }
};
</script>
