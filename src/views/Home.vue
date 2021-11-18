<template>
  <HomeTop/>
  <HomeMid/>
  <HomeBottom/>
</template>

<script>
import HomeBottom from "@/components/home/HomeBottom";
import HomeMid from "@/components/home/HomeMid";
import HomeTop from "@/components/home/HomeTop";

export default {
  name: "Home",
  components: {HomeTop, HomeMid, HomeBottom},
}
</script>

<style lang="less" scoped>

</style>
