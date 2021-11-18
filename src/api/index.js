//Header 自适应
export function navHidden(navRight, navRightBlock) {
    if (window.innerWidth < 760) {
        navRight.value = false;
        navRightBlock.value = true;
    } else {
        navRight.value = true;
        navRightBlock.value = false;
    }
}

//HomeTop 自适应
export function unitsCardHidden(unitsCard) {
    if (window.innerWidth < 760) {
        unitsCard.value = "active:false";
    } else {
        unitsCard.value = "units-card";
    }
}

