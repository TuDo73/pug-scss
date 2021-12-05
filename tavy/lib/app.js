class App {
  constructor(setting) {
    window.addEventListener(
      "DOMContentLoaded",
      () => {
        const html = document.querySelector("html");
        html.classList.remove("no-js");
      },
      false
    );
  }

  ready(f) {
    window.addEventListener(
      "DOMContentLoaded",
      () => {
        if (typeof f === "function") f();
      },
      false
    );
    return this;
  }

  load(f) {
    window.addEventListener(
      "load",
      () => {
        if (typeof f === "function") f();
      },
      false
    );
    return this;
  }

  loadCSS(files) {
    const $this = this;
    const head = document.getElementsByTagName("head")[0];
    files.map((x) => {
      const link = document.createElement("link");
      link.href = x.url;
      link.rel = x.rel || "stylesheet";
      link.media = x.media || "all";
      return head.appendChild(link);
    });
    return $this;
  }
}

export default App;
