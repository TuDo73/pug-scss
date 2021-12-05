class Subscribe {
  constructor() {
    this.subscribe = document.querySelector(".subscribe");

    this.init();
  }

  init() {
    this.setTranslate();
  }

  setTranslate() {
    const height = Number(this.subscribe.getBoundingClientRect().height) / 2;
    this.subscribe.style.transform = `translateY(${height}px)`;
  }
}

export default Subscribe;

new Subscribe();
