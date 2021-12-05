import { getSiblings } from "../../../lib/utils";

class Faq {
  constructor() {
    this.faqs = document.querySelectorAll(".faq-item-heading");

    this.init();
  }

  init() {
    this.handleFaq();
  }

  handleFaq() {
    this.faqs.forEach((faq) => {
      faq.addEventListener("click", (ele) => {
        const _this = ele.target;
        const parent = _this.closest(".faq-item");
        const siblings = getSiblings(parent);
        const faqBody = parent.querySelector(".faq-item-body");
        const faqHeight = faqBody.scrollHeight;

        if (parent.classList.contains("open")) {
          parent.classList.remove("open");
          faqBody.style.maxHeight = "0px";
        } else {
          parent.classList.add("open");
          faqBody.style.maxHeight = `${faqHeight}px`;
        }
        siblings.forEach((item) => {
          const faqBody = item.querySelector(".faq-item-body");
          item.classList.remove("open");
          faqBody.style.maxHeight = "0px";
        });
      });
    });
  }
}

export default Faq;

new Faq();
