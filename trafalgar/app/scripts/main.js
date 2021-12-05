import "../assets/styles/app.scss";
import "../assets/styles/criticalCSS.scss";

import App from "../../lib/app";
import coreScript from "../../lib/core/core_script";
import coreLazy from "../../lib/core/core_lazy";

window.app = new App();

app.load(() => {
  // app.loadCSS([
  //   {
  //     url: "https://zip-co-media.imgix.net/global-stylesheets/2021-07-21_zip-fonts.css",
  //     media: "screen",
  //   },
  // ]);

  new coreScript();
  new coreLazy();
});
