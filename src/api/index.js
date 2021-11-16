export function navHidden(navRight,navRightBlock){
    if (window.innerWidth < 850) {
        navRight.value = "nav-right hidden";
        navRightBlock.value = "nav-right-block";
    }else {
        navRight.value = "nav-right";
        navRightBlock.value = "nav-right-block hidden";
    }
}
