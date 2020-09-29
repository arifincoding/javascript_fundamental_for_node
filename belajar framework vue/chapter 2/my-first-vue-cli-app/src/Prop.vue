<script>
import NavLink from "./components/navLink.vue";
export default {
  name: "UseProps",
  components: {
    NavLink,
  },
};
</script>

<template>
  <div id="useProps">
    <nav>
      <!-- properti pada componet dibawah adalah cara penggunaan props yang sudah kita deklarasikan pada component NavLink yang kita import-->
      <NavLink url="/" text="Home" />
      <NavLink url="/about" text="About" />
      <NavLink url="/contact" text="Contact" />
    </nav>
  </div>
</template>
