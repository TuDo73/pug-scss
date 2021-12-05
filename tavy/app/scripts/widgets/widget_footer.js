class Footer {
  constructor() {
    this.button = document.querySelector(".back-to-top");
    this.init();
  }

  init() {
    this.handleBackToTop();
  }

  handleBackToTop() {
    this.button.addEventListener("click", () => {
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
    });
  }
}

export default Footer;

new Footer();
