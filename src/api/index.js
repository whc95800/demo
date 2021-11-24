export function hidden(navRight, navRightBlock) {
    navRight.value = window.innerWidth >= 760;
    navRightBlock.value = window.innerWidth < 760;
}
