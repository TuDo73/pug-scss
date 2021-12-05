import Axios from "axios";

class Header {
  constructor() {
    this.showSlideMenu = false;
    this.headerElm = document.querySelector(".energy-header");
    this.menuToggleBtn = document.querySelector(".energy-menu-toggle");

    this.init();
  }

  init() {
    // this.toggleSlideMenu();
  }

  toggleSlideMenu() {
    this.headerElm.addEventListener("click", (e) => {
      if (!this.showSlideMenu) {
        this.showSlideMenu = true;
        this.headerElm.classList.add("energy-open");
        this.menuToggleBtn.classList.add("energy-open");
        this.toggleBodyScroll(!this.showSlideMenu);
      } else {
        this.showSlideMenu = false;
        this.headerElm.classList.remove("energy-open");
        this.menuToggleBtn.classList.remove("energy-open");
        this.toggleBodyScroll(!this.showSlideMenu);
      }
    });
  }

  toggleBodyScroll(enabled = true) {
    if (enabled) {
      document.body.classList.remove("no-scroll");
    } else {
      document.body.classList.add("no-scroll");
    }
  }
}

export default Header;

new Header();
