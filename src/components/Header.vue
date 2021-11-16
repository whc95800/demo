<template>
  <div class="nav">
    <div class="nav-bar">
      <div class="nav-left">
        <img src="../assets/img/logo.png" height="38" width="250" alt=""/>
      </div>
      <div :class="navRight">
        <div>ホーム</div>
        <div>コンセプト</div>
        <div>ホテル一覧</div>
        <div>アクセス</div>
        <div>お問い合わせ</div>
      </div>
      <div :class="navRightBlock" @click="menuClick()">
        <div :class="middleLine"></div>
      </div>
    </div>
  </div>
  <transition name="top-bar-transition">
    <div class="top-bar-bg" v-if="sidebarIsShow" @click="menuClick()">
      <div class="top-bar-box">
        <div>ホーム</div>
        <div>コンセプト</div>
        <div>ホテル一覧</div>
        <div>アクセス</div>
        <div>お問い合わせ</div>
      </div>
    </div>
  </transition>
</template>

<script>
import {ref,onMounted} from "vue";
import {navHidden} from "@/api";
export default {
  name: "Header",
  setup() {
    const navRight = ref("")
    const navRightBlock = ref("")
    const middleLine = ref("middle-line-close")
    const sidebarIsShow = ref(false)
    const sidebarBgc = ref("")
    function menuClick(){
      if(middleLine.value === "middle-line-close"){
        middleLine.value = "middle-line-close open"
        sidebarIsShow.value = true
        sidebarBgc.value = "sidebar-bgc in"
        setTimeout(() =>{
          sidebarBgc.value = "sidebar-bgc out"
        },500);

      }else {
        middleLine.value = "middle-line-close"
        sidebarIsShow.value = false
      }
    }
    onMounted(() => {
      window.onresize = () => {
        navHidden(navRight,navRightBlock);
        if(middleLine.value === "middle-line-close open"){
          middleLine.value = "middle-line-close"
          sidebarIsShow.value = false
          sidebarBgc.value = "sidebar-bgc in"
        }
      };
      window.addEventListener('resize', navHidden(navRight,navRightBlock), true)
      window.removeEventListener('resize', navHidden, true)
    })
    return{navRight,navRightBlock,middleLine,sidebarIsShow,sidebarBgc,menuClick}
  }
}
</script>

<style lang="less" scoped>
.nav{
  height: auto; /*no*/
  box-shadow: 0 1px 0 0 rgba(0, 11, 38, 0.12);/*no*/
  display: flex;
  justify-content: center;
  background-color: #343434;
  .nav-bar{
    width: 1180px; /*no*/
    padding-left:24px;/*no*/
    display: flex;
    justify-content: space-between;
    align-items: center;
    .nav-left{
      height: 48px;/*no*/
      margin: 4px 0;/*no*/
      display: flex;
      align-items: center;
    }
    .nav-right{
      height: 72px;/*no*/
      display: flex;
      align-items: center;
      overflow: hidden;
      div{
        color: #d6d6d7;
        font-size: 14px; /*no*/
        text-align: center;
        margin: 0 25px;  /*no*/
      }
    }
    .nav-right-block{
      width: 30px;/*no*/
      height: 30px;/*no*/
      margin-right: 8px;/*no*/
      z-index: 10;
      .middle-line-close {
        display: inline-block;
        line-height: 15px;/*no*/
        width: 25px;/*no*/
        height: 3px;/*no*/
        top: 5px;/*no*/
        border-radius: 3px;/*no*/
        background-color: #d6d6d7;
        position: relative;
        transition: all 1s ease;
        &::before {  //前一条线
          content: "";
          position: absolute;
          width: 25px;/*no*/
          height: 3px;/*no*/
          bottom: 9px;/*no*/
          border-radius: 3px;/*no*/
          background-color: #d6d6d7;
          transition: all 1s ease;
        }
        &::after {  //后一条线
          content: "";
          position: absolute;
          width: 25px;/*no*/
          height: 3px;/*no*/
          top: 9px;/*no*/
          border-radius: 3px;/*no*/
          background-color: #d6d6d7;
          transition: all 1s ease;
        }
      }
      .open {
        transform: rotate(45deg);/*no*/  //中间的线顺时针旋转45°
        transition: all 1s ease;
        &::before {
          bottom: 0;
          transform: rotate(-90deg);/*no*/ //上方的线逆时针旋转90°
          transition: all 1s ease;
        }
        &::after {
          opacity: 0; //底部的线隐藏
        }
      }
    }
    .hidden{
      display: none;
    }
  }
}

.top-bar-transition {
  &-enter{
    transform: translateY(-100%);  //整体划入之前隐藏在最上侧
  }
  &-enter-active {
    transition: all 1s ease;  //划入过渡，用时1s
  }
  &-leave-to {
    transform: translateY(-100%); //整体划出之后隐藏在最上侧
  }
  &-leave-active {
    transition: all 1s ease-in; //划出过渡，用时1s
  }
}
.top-bar-bg{
  position: fixed;
  top: 0;
  transform: translateY(0%);
  left: 0;
  width: 100%;
  height: 100%;
  .top-bar-box{
    color: #d6d6d7;
    background-color: #343434;
    font-size: 60px;
    div{
      height: 200px;
      line-height:200px;
      margin: auto;
      text-align: center;
      box-shadow: 0 1px 0 0 rgb(64, 64, 64);/*no*/
    }
  }
}


</style>
