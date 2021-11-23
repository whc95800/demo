<template>
  <div class="nav">
    <div class="nav-bar">
      <div class="nav-left">
        <img alt="" height="38" src="../../assets/img/logo.png" width="250"/>
      </div>
      <transition name="nav-bar-transition">
        <div v-if="navRight" class="nav-right">
          <div v-for="(item,index) in navList" :key="index" class="link"
               @click="this.$router.push({path:`/${item.link}`})">
            <a>{{ item.name }}</a>
          </div>
        </div>
      </transition>
      <transition name="nav-block-transition">
        <div v-if="navRightBlock" class="nav-right-block" @click="menuClick()">
          <span :class="middleLine"></span>
        </div>
      </transition>
    </div>
  </div>
  <transition name="top-bar-transition">
    <div v-if="topBarIsShow" class="top-bar-bg" @click="menuClick()">
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
import {onMounted, ref} from "vue";
import {navRightBlockHidden, navRightHidden} from "@/api";

export default {
  name: "Header",
  setup() {
    const navRight = ref('')
    const navRightBlock = ref('')
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

    onMounted(() => {
      window.onresize = () => {
        navRightHidden(navRight);
        navRightBlockHidden(navRightBlock);
        if (middleLine.value === "middle-line-close open") {
          middleLine.value = "middle-line-close"
          topBarIsShow.value = false
        }
      }
      window.addEventListener('resize', {navRightHidden, navRightBlockHidden}, true)
      window.removeEventListener('resize', {navRightHidden, navRightBlockHidden}, true)
    })
    return {navRight, navRightBlock, middleLine, topBarIsShow, navList, menuClick,}
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

    .nav-bar-transition {
      &-enter-from {
        transform: translateX(185%); //整体从右侧划入
      }

      &-enter-active {
        transition: all 0.5s ease .5s; //划入过渡，用 0.5s 延迟0.5s进入
      }

      &-leave-to {
        transform: translateX(185%); //整体右划出之后隐藏
      }

      &-leave-active {
        transition: all 0.5s ease-in; //划出过渡，用 0.5s
      }
    }

    .nav-left {
      height: 48px;
      margin: 4px 0;
      display: flex;
      align-items: center;
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
        background-color: transparent;

        &::before {
          transform: translateY(9px) rotate(-45deg); //上方的线逆时针旋转90°
          transition: all 0.5s ease;
        }

        &::after {
          transform: translateY(-9px) rotate(45deg); //中间的线顺时针旋转45°
          transition: all 0.5s ease;
        }
      }
    }

    .nav-block-transition {
      &-enter-from {
        opacity: 0;
        filter: alpha(opacity=0); //整体淡入
      }

      &-enter-active {
        transition: all 0.5s ease .6s; //淡入过渡，用 0.5s 延迟0.6秒进入
      }

      &-leave-to {
        opacity: 0;
        filter: alpha(opacity=0); //整体淡出
      }
      &-leave-active {
        transition: all 0.5s ease-in; //淡出过渡，用 0.5s
      }
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

</style>
