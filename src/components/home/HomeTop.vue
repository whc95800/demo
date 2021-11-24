<template>
  <div class="home">
    <div class="units-card">
      <div class="uc-nav">
        <div class="uc-nav-link">
          <span v-for="(item,index) in ucNavList" :key="index">{{ item.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name: "HomeTop",
  setup() {
    const ucNavList = ref([
      {name: "宿・ホテル", key: "hotel"},
      {name: "航空券", key: "ticket"},
      {name: "レンタカー", key: "car"},
      {name: "航空券＋宿泊", key: "combo"},
      {name: "現地ツアー", key: "tour"},
    ]);

    return {ucNavList}
  }
}
</script>

<style lang="less" scoped>
.home {
  height: auto;
  display: flex;
  justify-content: center;

  .units-card {
    width: 1172px;
    height: auto;
    margin: 40px 24px;
    padding: 0 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 7px;
    border: 1px solid #D7D4D2;
    transition: all 0.5s ease;
  }

  .uc-nav {
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #D7D4D2;
    margin-top: 12px;
  }

  .uc-nav-link {
    height: 100%;
    display: flex;
    justify-content: center;

    span {
      display: block;
      padding: 0 16px;
      line-height: 350%;
    }
  }
}
</style>
