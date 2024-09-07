export class Main {
  constructor() {
    new spine.SpinePlayer("player-container", {
      skeleton: "spineboy-ess.json",
      atlas: "spineboy.atlas",
      animation: "walk",
    });
  }
}

new Main();
