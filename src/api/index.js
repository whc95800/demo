export function navRightHidden(navRight) {
    navRight.value = window.innerWidth >= 760;
}

export function navRightBlockHidden(navRightBlock) {
    navRightBlock.value = window.innerWidth < 760;
}

export function unitsCardHidden(unitsCard) {
    if (window.innerWidth < 760) {
        unitsCard.value = "active:false";
    } else {
        unitsCard.value = "units-card";
    }
}

