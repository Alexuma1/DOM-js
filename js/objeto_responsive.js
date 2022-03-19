const d = document,
  w = window;

export default function responsiveMedia(id, mq, mobileContent, desktopContent) {
  window.addEventListener("resize", responsive);
  let breakpoint = w.matchMedia(mq);
  function responsive() {
    if (breakpoint.matches === true)
      d.getElementById(id).innerHTML = desktopContent;
    else d.getElementById(id).innerHTML = mobileContent;
  }
  responsive(breakpoint);
}
