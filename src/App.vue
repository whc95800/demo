<template>
  <Header/>
  <router-view/>
  <Footer/>
</template>

<style lang="less">
body {
  font-family: "Centra No2", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

body, div, img, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, button, textarea, p, blockquote, table, th, td {
  margin: 0;
  padding: 0;
}
</style>
<script>
import Header from "@/components/all/Header";
import Footer from "@/components/all/Footer";

export default {
  components: {Header, Footer}
}
</script>
