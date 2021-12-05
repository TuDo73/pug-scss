import { tns } from "../../../node_modules/tiny-slider/src/tiny-slider";

class Slider {
  constructor() {
    this.init();
  }

  init() {
    // this.setSlider();
  }

  setSlider() {
    const slider = tns({
      container: ".customer-slider",
      items: 3,
      slideBy: "page",
      autoplay: false,
      speed: 800,
      loop: false,
    });
    console.log(slider);
  }
}

export default Slider;

new Slider();
