class Utils {
  static getLocalData(key) {
    try {
      return window.localStorage.getItem(key);
    } catch (error) {
      return "";
    }
  }

  static setLocalData(key, value) {
    try {
      return window.localStorage.setItem(key, value);
    } catch (error) {
      return "";
    }
  }

  static insertAfter(target, source) {
    try {
      return target.parentElement.insertBefore(source, target.nextSibling);
    } catch (error) {
      return error;
    }
  }

  // https://stackoverflow.com/questions/21474678/scrolltop-animation-without-jquery
  static scrollToTop(scrollDuration) {
    const cosParameter = window.scrollY / 2;
    let scrollCount = 0;
    let oldTimestamp = window.performance.now();

    function step(newTimestamp) {
      scrollCount += Math.PI / (scrollDuration / (newTimestamp - oldTimestamp));
      if (scrollCount >= Math.PI) window.scrollTo(0, 0);
      if (window.scrollY === 0) return;
      window.scrollTo(
        0,
        Math.round(cosParameter + cosParameter * Math.cos(scrollCount))
      );
      oldTimestamp = newTimestamp;
      window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
  }

  static scrollToElement(target, isScrollHorizontal) {
    window.scrollTo({
      top: isScrollHorizontal !== 1 ? target.offsetTop : 0,
      left:
        isScrollHorizontal !== 0 && isScrollHorizontal !== undefined
          ? target.offsetLeft
          : 0,
      behavior: "smooth",
    });
  }

  static getSiblings(elem) {
    let siblings = [];
    let sibling = elem.parentNode.firstChild;
    while (sibling) {
      if (sibling.nodeType === 1 && sibling !== elem) {
        siblings.push(sibling);
      }
      sibling = sibling.nextSibling;
    }

    return siblings;
  }
}

export default Utils;

export const { getLocalData } = Utils;
export const { setLocalData } = Utils;
export const { scrollToTop } = Utils;
export const { scrollToElement } = Utils;
export const { insertAfter } = Utils;
export const { getSiblings } = Utils;
