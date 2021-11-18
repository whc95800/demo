<template>
  <Header/>
  <router-view/>
  <Footer/>
</template>

<style lang="less">
body {
  margin: 0;
  padding: 0;
  font-family: "Centra No2", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}
</style>
<script>
import Header from "@/components/all/Header";
import Footer from "@/components/all/Footer";

export default {
  components: {Header, Footer}
}
</script>
