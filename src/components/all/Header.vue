<template>
  <div class="nav">
    <div class="nav-bar">
      <div class="nav-left">
        <img id="logo" alt="" src="../../assets/img/logo.png"/>
      </div>
      <transition>
        <div class="nav-right">
          <div v-for="(item,index) in navList" :key="index" class="link"
               @click="this.$router.push({path:`/${item.link}`})">
            <a>{{ item.name }}</a>
          </div>
        </div>
      </transition>
      <div class="nav-right-block" @click="menuClick()">
        <span :class="middleLine"></span>
      </div>
    </div>
  </div>
  <transition name="top-bar-transition">
    <div v-show="topBarIsShow" class="top-bar-bg" @click="menuClick()">
      <div class="top-bar-box">
        <img alt="" class="logo-img" height="44" src="../../assets/img/logo.png" width="328"/>
        <div v-for="(item,index) in navList" :key="index" class="link-box"
             @click="this.$router.push({path:`/${item.link}`})">
          <a>{{ item.name }}</a>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import {onMounted, onUnmounted, ref} from "vue";

export default {
  name: "Header",
  setup() {
    const middleLine = ref("middle-line-close")
    const topBarIsShow = ref(false)
    const navList = ref([
      {name: "ホーム", link: ""},
      {name: "コンセプト", link: "concept"},
      {name: "ホテル一覧", link: "hotels"},
      {name: "お問い合わせ", link: "contact"},
    ])

    function menuClick() {
      if (middleLine.value === "middle-line-close") {
        middleLine.value = "middle-line-close open"
      } else middleLine.value = "middle-line-close"
      topBarIsShow.value = !topBarIsShow.value
    }

    function menuSwitch() {
      if (topBarIsShow.value === true) {
        topBarIsShow.value = !topBarIsShow.value
        middleLine.value = "middle-line-close"
      }
    }

    onMounted(() => {
      window.addEventListener('resize', menuSwitch)
    })

    onUnmounted(() => {
      window.removeEventListener('resize', menuSwitch)
    })

    return {middleLine, topBarIsShow, navList, menuClick,}
  }
}
</script>

<style lang="less" scoped>
.nav {
  height: auto;
  box-shadow: 0 1px 0 0 rgba(0, 11, 38, 0.12);
  display: flex;
  justify-content: center;
  background-color: #343434;
  .nav-bar {
    width: 1186px;
    padding-left: 24px;
    padding-right: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .nav-left {
      height: 48px;
      margin: 4px 0;
      display: flex;
      align-items: center;

      #logo {
        height: 38px;
      }

      @media (max-width: 810px) {
        #logo {
          height: 30px;
        }
      }
    }

    .nav-right {
      height: 72px;
      display: flex;
      align-items: center;
      overflow: hidden;

      .link {
        height: 72px;
        color: #d6d6d7;
        font-size: 14px;
        text-align: center;
        line-height: 72px;
        margin: 0 25px;
        cursor: pointer;
        transition: all 0.5s ease-in-out;
      }
      .link:hover {
        color: #ffffff;
        transition: all 0.5s ease;
      }
    }
    .nav-right-block {
      display: none;
      width: 30px;
      height: 30px;
      left: 100%;
      margin-right: 8px;
      z-index: 10;
      opacity: 100;

      .middle-line-close {
        display: block;
        width: 25px;
        height: 3px;
        top: 14px;
        border-radius: 3px;
        background-color: #d6d6d7;
        position: relative;
        transition: all 0.5s ease;
        margin: auto;

        &::before { //前一条线
          content: "";
          position: absolute;
          width: 25px;
          height: 3px;
          bottom: 9px;
          border-radius: 3px;
          background-color: #d6d6d7;
          transition: all 0.5s ease;
        }

        &::after { //后一条线
          content: "";
          position: absolute;
          width: 25px;
          height: 3px;
          top: 9px;
          border-radius: 3px;
          background-color: #d6d6d7;
          transition: all 0.5s ease;
        }
      }

      .open {
        background-color: transparent; //中间的线变透明

        &::before {
          transform: translateY(9px) rotate(-45deg); //上方的线向下移动9并且逆时针旋转45°
          transition: all 0.5s ease;
        }

        &::after {
          transform: translateY(-9px) rotate(45deg); //下方的线向上移动9并且顺时针旋转45°
          transition: all 0.5s ease;
        }
      }
    }

    @media (max-width: 810px) {
      .nav-right {
        display: none;
      }

      .nav-right-block {
        display: block;
      }
    }
  }
}

.top-bar-bg {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(52, 53, 53, 0.9);

  .top-bar-box {
    color: rgba(214, 214, 215, 1);
    font-size: 60px;
    text-align: center;

    .logo-img {
      margin-top: 36px;
    }

    .link-box {
      font-size: 14px;
      height: 80px;
      width: 60%;
      line-height: 80px;
      margin: auto;
      text-align: center;
      box-shadow: 0 1px 0 0 #ffff;
      transition: all 0.5s ease-in-out;
      cursor: pointer;
    }

    .link-box:hover {
      color: white;
      transition: all 0.5s ease;
    }
  }
}

.top-bar-transition {
  &-enter-from {
    transform: translateY(-100%); //整体划入之前隐藏在最上侧
  }

  &-enter-active {
    transition: all 0.5s ease; //划入过渡，用 0.5s
  }

  &-leave-to {
    transform: translateY(-100%); //整体划出之后隐藏在最上侧
  }

  &-leave-active {
    transition: all 0.5s ease-in; //划出过渡，用 0.5s
  }
}
</style>
