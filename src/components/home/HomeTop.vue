<template>
  <div class="home">
    <div class="units-card">
        <ul ref="tabBarRef5" class="uc-nav">
          <li v-for="(item,index) in ucNavList" :key="index"
              :ref='"tabBarRef"+index'
              :class="['uc-nav-link',activeIndex === index?'risk-active':'']"
              @click="togglePage(index)">
            <a>
              <span class="span-text">{{ item.name }}</span>
            </a>
          </li>
          <li :style="tabLighter" class="tab-highlighter"></li>
        </ul>
      <div class="com-style">
        <component :is="comName"/>
      </div>
    </div>
  </div>
</template>

<script>
import {ref, reactive, toRefs, onUnmounted, onMounted, computed} from "vue";
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
    const tabLighter = ref('')
    const state = reactive({
      tabBarRef5: null,
      tabBarRef0: null, // HOME导航栏组件
      tabBarRef1: null, // HOME导航栏组件
      tabBarRef2: null, // HOME导航栏组件
      tabBarRef3: null, // HOME导航栏组件
      tabBarRef4: null, // HOME导航栏组件
    })
    const tabBarRefProxy = ref()
    const barIndex = ref(0)

    onMounted(() => {
      widthChange()
    })

    window.addEventListener('resize', widthChange)

    onUnmounted(() => {
      window.removeEventListener('resize', widthChange)
    })

    function widthChange() {
      tabBarRefProxy.value = [
        state.tabBarRef0.offsetWidth,
        state.tabBarRef1.offsetWidth,
        state.tabBarRef2.offsetWidth,
        state.tabBarRef3.offsetWidth,
        state.tabBarRef4.offsetWidth,
        state.tabBarRef5.offsetWidth
      ]
      togglePage(barIndex.value)
    }

    function togglePage(n) {
      const allWidth = ref(tabBarRefProxy.value[5])
      const navWidth = ref(tabBarRefProxy.value[0] + tabBarRefProxy.value[1] + tabBarRefProxy.value[2] + tabBarRefProxy.value[3] + tabBarRefProxy.value[4])
      barIndex.value = n
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
      if (window.innerWidth > 620) {
        const underBarWidth = computed(() => {
          return "width:" + tabBarRefProxy.value[n] + "px;transform: translateX(" + ((allWidth.value - navWidth.value) / 2) + "px);"
        })
        tabLighter.value = underBarWidth.value
      } else {
        const underBarWidth = computed(() => {
          return "width:" + tabBarRefProxy.value[n] + "px;transform: translateX(0px);"
        })
        tabLighter.value = underBarWidth.value
      }
      activeIndex.value = n
    }

    return {ucNavList, comName, activeIndex, tabLighter, togglePage, ...toRefs(state),}
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
      z-index: 0;

      .uc-nav-link {
        list-style-type: none;
        color: #343B53;
        transition: all 0.3s ease;

        .span-text {
          font-size: 14px;
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
            height: 40px;
            line-height: 40px;
          }
        }

        .tab-highlighter {
          top: 38px;
        }
      }
    }
  }
}

</style>
