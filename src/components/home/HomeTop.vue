<template>
  <div class="home">
    <div class="units-card">
      <div class="uc-nav">
        <a v-for="(item,index) in ucNavList" :key="index" class="uc-nav-link" @click="togglePage(index)">
          <span>{{ item.name }}</span>
        </a>
      </div>
      <div style="width: auto;height: auto;padding: 12px 24px">
        <component :is="comName"/>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";
import HotelPicker from "@/components/home/hometop/HotelPicker";
import TicketPicker from "@/components/home/hometop/TicketPicker";
import CarPicker from "@/components/home/hometop/CarPicker";
import ComboPicker from "@/components/home/hometop/ComboPicker";
import TourPicker from "@/components/home/hometop/TourPicker";


export default {
  name: "HomeTop",
  components: {HotelPicker, CarPicker, TicketPicker, ComboPicker, TourPicker},
  setup() {
    const ucNavList = ref([
      {name: "宿・ホテル"},
      {name: "航空券"},
      {name: "レンタカー"},
      {name: "航空券＋宿泊"},
      {name: "現地ツアー"},
    ])
    const comName = ref('HotelPicker')

    function togglePage(n) {
      switch (n) {
        case 0:
          comName.value = 'HotelPicker';
          break;
        case 1:
          comName.value = "TicketPicker";
          break;
        case 2:
          comName.value = "CarPicker";
          break;
        case 3:
          comName.value = "ComboPicker";
          break;
        case 4:
          comName.value = "TourPicker";
      }
    }

    return {ucNavList, togglePage, comName}
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
    margin: 48px 24px;
    padding: 0 14px;
    align-items: center;
    border-radius: 7px;
    border: 1px solid #D7D4D2;
    transition: all 0.5s ease;

    .uc-nav {
      width: 100%;
      height: 52px;
      margin-top: 12px;
      display: flex;
      justify-content: center;
      border-bottom: 1px solid #D7D4D2;
    }

    .uc-nav-link {
      transition: all 80ms linear;

      span {
        height: 50px;
        color: #3E445BFF;
        padding: 0 16px;
        line-height: 50px;
      }
    }

    .uc-nav-link:hover {
      border-bottom: 2px solid #343434;
    }
  }

  @media (max-width: 575px) {
    .units-card {
      width: 100%;
      margin: 0;
      padding: 0;
      border: 0;

      .uc-nav {
        justify-content: space-between;
        white-space: nowrap;
        overflow-x: scroll;

        .uc-nav-link {
          font-weight: bold;
        }
      }
    }
  }
}
</style>
