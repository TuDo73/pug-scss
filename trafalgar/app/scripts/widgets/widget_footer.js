class Footer {
  constructor() {
    this.copyright = document.querySelectorAll(".copyright");

    this.init();
  }

  init() {
    this.getYear();
  }

  getYear() {
    const year = new Date().getFullYear();

    this.copyright.forEach((item) => {
      item.innerHTML = year;
    });
  }
}

export default Footer;

new Footer();
