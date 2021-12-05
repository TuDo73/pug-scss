import { getSiblings } from "../../../lib/utils";

class Tab {
  constructor() {
    this.buttons = document.querySelectorAll(".license-btn");
    this.tabs = document.querySelectorAll(".license-tab-content");

    this.init();
  }

  init() {
    this.handleTab();
  }

  handleTab() {
    if (this.buttons.length > 0) {
      this.buttons.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const _this = e.target;
          const siblings = getSiblings(btn);
          const dataTab = _this.getAttribute("data-tab");

          // active tab bar
          _this.classList.add("active");
          siblings.forEach((item) => {
            item.classList.remove("active");
          });

          // active tab content
          this.tabs.forEach((tab) => {
            const dataTabContent = tab.getAttribute("data-tab");
            const tabSiblings = getSiblings(tab);

            if (dataTabContent === dataTab) {
              tab.classList.add("active");
              tabSiblings.forEach((item) => {
                item.classList.remove("active");
              });
            }
          });
        });
      });
    }
  }
}

export default Tab;

new Tab();
