import "./scss/app.scss";
import Application from "./js/Application";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  const app = new Application();
  // Used to access the app instance by the automated tests
  app.setEmojis(["🐒", "🦍", "🦧"]);
  app.addBananas();
  document.createElement=setEmojis.map((addBananas)=>{
    return banana +1;
  })
  window.__JS_APP = app;
});
