<template>
  <div class="home">
    <div class="units-card">
      <transition name="bar-lighter-transition">
        <ul class="uc-nav">
          <li v-for="(item,index) in ucNavList" :key="index"
              :class="['uc-nav-link',activeIndex === index?'risk-active':'']" @click="togglePage(index)">
            <a>
              <span class="span-text">{{ item.name }}</span>
            </a>
          </li>
          <li :style="tabLighter" class="tab-highlighter"></li>
        </ul>
      </transition>
      <div class="com-style">
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
    const activeIndex = ref(0)
    const tabLighter = ref('transform: translateX(0); width: 111.2px;')

    function togglePage(n) {
      switch (n) {
        case 0:
          comName.value = 'HotelPicker';
          tabLighter.value = 'transform: translateX(0); width: 111.2px;'
          break;
        case 1:
          comName.value = "TicketPicker";
          tabLighter.value = 'transform: translateX(111.2px); width: 80px;'
          break;
        case 2:
          comName.value = "CarPicker";
          tabLighter.value = 'transform: translateX(191.2px); width: 111.05px;'
          break;
        case 3:
          comName.value = "ComboPicker";
          break;
        case 4:
          comName.value = "TourPicker";
      }
      activeIndex.value = n
    }

    return {ucNavList, togglePage, comName, activeIndex, tabLighter}
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
      height: 52px;
      width: 100%;
      margin-top: 12px;
      display: flex;
      justify-content: center;
      position: relative;

      .uc-nav-link {
        list-style-type: none;
        color: #343B53;
        transition: all 0.3s ease;

        .span-text {
          height: 50px;
          padding: 0 16px;
          line-height: 50px;
          user-select: none;
        }
      }

      .uc-nav-link:hover {
        box-shadow: inset 0 -2px 0 0 #343b53;
      }

      .risk-active {
        color: #3662d8;
      }

      .tab-highlighter {
        background: #3662D8;
        bottom: 0;
        height: 2px;
        left: 0;
        position: absolute;
        list-style-type: none;
        transition: all 0.3s ease;
      }

      .tab-highlighter-move {
        transform: translateX(0) scaleY(1) scaleX(1);
        width: 101.45px;
      }

      .tab-highlighter-move1 {
        transform: translateX(101.45px) scaleY(1) scaleX(1);
        width: 74px;
      }


    }

    .com-style {
      width: auto;
      height: auto;
      padding: 12px 24px;
      border-top: 1px solid #D7D4D2;
    }
  }

  @media (max-width: 620px) {
    .units-card {
      width: 100%;
      margin: 0;
      padding: 0;
      border: 0;

      .uc-nav {
        justify-content: start;
        white-space: nowrap;
        overflow-x: scroll;
        height: 40px;

        .uc-nav-link {
          font-weight: bold;

          .span-text {
            font-size: 14px;
            height: 40px;
            line-height: 40px;
          }
        }
      }
    }
  }
}

.bar-lighter-transition {
  transition: all 0.5s ease;
}
</style>
