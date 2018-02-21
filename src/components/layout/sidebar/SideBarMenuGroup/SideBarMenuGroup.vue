<template>
    <ul class="sidebar-menu">
        <li class="header">Main Navigation</li>
        <slot />
    </ul>
</template>
<script>
export default {
  name: 'SidebarMenuGroup',
  props: ['link']
};
</script>
