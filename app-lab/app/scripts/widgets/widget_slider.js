import { tns } from "tiny-slider";

class Slider {
  constructor() {
    this.init();
  }

  init() {
    this.setSlider();
  }

  setSlider() {
    const slider = tns({
      container: ".customer-slider",
      items: 1,
      slideBy: "page",
      autoplay: false,
      speed: 800,
      loop: false,
      navPosition: "bottom",
      controlsContainer: ".customer-controls",
      nav: false,
    });
  }
}

export default Slider;

new Slider();
